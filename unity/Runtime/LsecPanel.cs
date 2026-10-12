using TMPro;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;
using UnityEngine.Video;

namespace Guardianes.Interfaces
{
    // Un VideoPlayer local compartido. Cambiar contenido nunca reproduce por sí solo.
    public sealed class LsecPanel : MonoBehaviour
    {
        [SerializeField] private VideoPlayer player;
        [SerializeField] private RawImage picture;
        [SerializeField] private GameObject placeholder;
        [SerializeField] private TMP_Text transcript;
        [SerializeField] private TMP_Text status;
        [SerializeField] private Button playButton;
        [SerializeField] private Button pauseButton;
        [SerializeField] private Button repeatButton;
        [SerializeField] private AudioSource narration;
        [SerializeField] private UnityEvent<string> onStatus = new UnityEvent<string>();
        private LsecEntry current;
        private bool ready;

        private void OnEnable()
        {
            if (!Configured()) { Debug.LogError("Completa las referencias del panel LSEC.", this); return; }
            player.playOnAwake = false;
            player.isLooping = false;
            player.source = VideoSource.VideoClip;
            player.audioOutputMode = VideoAudioOutputMode.None;
            player.renderMode = VideoRenderMode.APIOnly;
            player.prepareCompleted += Prepared;
            player.errorReceived += Failed;
            player.loopPointReached += Finished;
            playButton.onClick.AddListener(Play);
            pauseButton.onClick.AddListener(Pause);
            repeatButton.onClick.AddListener(Repeat);
            SetContent(current);
        }

        private bool Configured() => player && picture && placeholder && transcript && status
            && playButton && pauseButton && repeatButton;

        public void SetContent(LsecEntry entry)
        {
            current = entry;
            if (!Configured()) return;
            player.Stop();
            player.clip = null;
            picture.texture = null;
            picture.gameObject.SetActive(false);
            placeholder.SetActive(true);
            ready = false;
            SetControls(false, false);
            transcript.text = entry ? entry.referenceText : "Selecciona un contenido para ver sus señas.";
            if (!entry || !entry.CanPlay)
            {
                ShowStatus("Video LSEC pendiente de grabación o validación.");
                return;
            }
            player.clip = entry.localClip;
            ShowStatus("Preparando el video LSEC local…");
            player.Prepare();
        }

        private void Prepared(VideoPlayer source)
        {
            if (!isActiveAndEnabled || !current || !current.CanPlay || source.clip != current.localClip) return;
            ready = true;
            picture.texture = source.texture;
            var aspect = picture.GetComponent<AspectRatioFitter>();
            if (aspect && source.height > 0) aspect.aspectRatio = (float)source.width / source.height;
            placeholder.SetActive(false);
            picture.gameObject.SetActive(true);
            SetControls(true, false);
            ShowStatus("Video LSEC listo. Selecciona Reproducir.");
        }

        public void Play()
        {
            if (!ready || !current || !current.CanPlay) return;
            if (narration) narration.Pause();
            player.Play(); SetControls(false, true); ShowStatus("Reproduciendo señas.");
        }
        public void Pause()
        {
            if (!ready) return;
            player.Pause(); SetControls(true, false); ShowStatus("Video pausado.");
        }
        public void Repeat()
        {
            if (!ready) return;
            player.time = 0; Play();
        }
        public void PauseForNarration() { if (ready && player.isPlaying) Pause(); }
        private void Finished(VideoPlayer source)
        {
            if (!ready) return;
            source.Pause(); source.time = 0; SetControls(true, false);
            ShowStatus("Video terminado. Puedes repetirlo.");
        }
        private void Failed(VideoPlayer source, string message)
        {
            ready = false; source.Stop(); picture.texture = null;
            picture.gameObject.SetActive(false); placeholder.SetActive(true);
            SetControls(false, false);
            ShowStatus("No se pudo abrir el video. El texto sigue disponible. Solicita apoyo.");
            Debug.LogWarning("Error al abrir el video LSEC local: " + message, this);
        }
        private void SetControls(bool play, bool pause)
        {
            playButton.interactable = play;
            pauseButton.interactable = pause;
            repeatButton.interactable = ready;
        }
        private void ShowStatus(string message) { status.text = message; onStatus.Invoke(message); }
        private void OnApplicationPause(bool paused) { if (paused && Configured()) Pause(); }
        private void OnDisable()
        {
            if (player)
            {
                player.Stop(); player.prepareCompleted -= Prepared;
                player.errorReceived -= Failed; player.loopPointReached -= Finished;
            }
            if (playButton) playButton.onClick.RemoveListener(Play);
            if (pauseButton) pauseButton.onClick.RemoveListener(Pause);
            if (repeatButton) repeatButton.onClick.RemoveListener(Repeat);
            ready = false;
        }
    }
}
