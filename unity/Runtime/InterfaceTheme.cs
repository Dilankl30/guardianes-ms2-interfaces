using UnityEngine;

namespace Guardianes.Interfaces
{
    [CreateAssetMenu(menuName = "Guardianes/Interfaces/Tema visual")]
    public sealed class InterfaceTheme : ScriptableObject
    {
        public Color text = new Color32(23, 50, 77, 255);
        public Color primary = new Color32(22, 101, 52, 255);
        public Color support = new Color32(7, 89, 133, 255);
        public Color surface = Color.white;
        public Color selected = new Color32(219, 234, 254, 255);
        public Color selectionBorder = new Color32(29, 78, 216, 255);
        public Color retryText = new Color32(159, 18, 57, 255);
        public Color retrySurface = new Color32(255, 241, 242, 255);
        // Valores iniciales para Canvas 1920x1080; comprobar tamaño físico y escala.
        public float bodySize = 36;
        public float titleSize = 48;
        public float targetMinimum = 72;
        public float gap = 18;
    }
}
