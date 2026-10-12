using UnityEngine;
using UnityEngine.Video;

namespace Guardianes.Interfaces
{
    [CreateAssetMenu(menuName = "Guardianes/Interfaces/Contenido LSEC")]
    public sealed class LsecEntry : ScriptableObject
    {
        public string contentId;
        [TextArea(3, 8)] public string referenceText;
        public VideoClip localClip;
        public bool linguisticallyApproved;
        public string validationReference;

        public bool CanPlay => localClip != null && linguisticallyApproved
            && !string.IsNullOrWhiteSpace(validationReference);
    }
}
