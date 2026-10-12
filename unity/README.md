# Integración de MS-2 en Unity 2D

El equipo confirmó Unity 2D, C#, Canvas, TextMeshPro, AudioSource y persistencia local en [MS-03](https://trello.com/c/2CD2Sc8B). La versión exacta de Unity y los equipos de destino aún deben registrarse. Este directorio entrega código de referencia y parámetros de montaje. **No es un proyecto Unity compilado ni un prefab ya validado.** No se encontró el editor Unity en este entorno; compilar y probar en el proyecto del equipo sigue pendiente.

## Montaje del ejemplo

1. Copiar `Runtime/` a `Assets/Guardianes/Interfaces/Runtime/` dentro de una rama de trabajo del proyecto. Conservar las reglas y versión de Unity del repositorio oficial.
2. Usar Canvas `Screen Space - Overlay`, CanvasScaler `Scale With Screen Size`, referencia 1920 × 1080, `Match Width Or Height` 0.5 como punto inicial. EventSystem con el módulo de entrada que ya use el equipo. No instalar un segundo sistema de entrada sin revisar el proyecto.
3. Crear esta jerarquía: `Canvas/Encabezado`, `Canvas/Actividad/Consigna`, `Actividad/Apoyos`, `Actividad/Opciones`, `Actividad/Resultado`, `Actividad/Confirmar`, `Canvas/PanelLSEC`, `Canvas/ModalAyuda`, `Canvas/ModalLSEC`. Usar LayoutGroup, ContentSizeFitter y ScrollRect vertical donde el contenido no quepa. Texto sin Auto Size que lo reduzca por debajo del mínimo acordado.
4. Asignar TextMeshPro a consignas y etiquetas. Crear `InterfaceTheme` desde Create → Guardianes → Interfaces → Tema visual. Los valores son unidades de Canvas: a escala 2/3, 72 unidades producen un área aproximada de 48 píxeles. Esta relación no demuestra tamaño suficiente en todos los monitores: verificar escalado del sistema, resolución y distancia real de uso.
5. En selección simple usar ToggleGroup sin confirmar al seleccionar. En múltiple usar Toggles independientes. Instanciar `SelectionModel` con IDs válidos de opciones y respuestas; reflejar su selección en los Toggles. ELEGIR llama a `Confirm()`. `Empty` pide elegir, `Retry` conserva la escena, `Correct` bloquea la respuesta y permite continuar una vez; `AlreadyConfirmed` no suma progreso.
6. Añadir `VideoPlayer` al objeto del panel. Añadir `LsecPanel`; enlazar RawImage, placeholder, transcript TMP, status TMP y botones. RawImage con AspectRatioFitter `Fit In Parent`, fondo liso y espacio libre alrededor. El controlador usa VideoClip local y `APIOnly`; no se necesita RenderTexture ni URL externa.
7. Crear un `LsecEntry` por contenido, con ID del catálogo, texto exacto y VideoClip importado. Mantener `linguisticallyApproved = false` hasta registrar revisión lingüística y su referencia. Un archivo existente sin aprobación tampoco se reproduce como traducción validada.
8. Llamar `SetContent(entry)` al abrir una escena o seleccionar su consigna, ayuda, opción o resultado. No llamar al clip de acierto antes de evaluar. Cada opción debe tener acceso a su propio clip, conservando exactamente las mismas oportunidades de elegir.
9. El panel ampliado utiliza el mismo reproductor: reubicar o redimensionar su contenedor y guardar RectTransform previo. Pausar al abrir un modal. Guardar el control que abrió el modal con EventSystem; al cerrar devolverle selección. Bloquear interacción detrás del modal. Escape y el botón CERRAR deben cerrar el modal; no depender únicamente del ratón.
10. El AudioSource reproduce un AudioClip local tras pulsar AUDIO. Antes de reproducir, llamar a `PauseForNarration()`. El controlador LSEC pausa el AudioSource al iniciar señas. Definir con el docente si se ofrecerá reproducción simultánea opcional; por defecto evitar estímulos superpuestos.
11. Conectar `onStatus` al mecanismo de accesibilidad que el equipo valide en su ejecutable. Un UnityEvent o un TMP_Text **no equivale** a compatibilidad con lectores de pantalla; debe verificarse con el lector, sistema y versión elegidos.
12. Compilar el ejecutable, desconectar la red y repetir el recorrido, incluidos todos los videos locales. Probar archivo no preparado, fallo de reproducción, cambio rápido de escena, pausa, repetición, ampliación y tamaño de manos/rostro. Guardar evidencia antes de cerrar integración.

## Reglas de construcción

- Texto sobre fondo sólido; no incrustarlo en la ilustración. El arte de referencia está en `../prototipo/assets/guardian-rio.png`.
- Ancho inicial: zona de actividad 72–76 %, LSEC 24–28 %. Cuando no quepan ambos con tamaños legibles, apilar y habilitar desplazamiento. Nunca recortar el cuerpo del intérprete para llenar el panel.
- Los clips se importan como recursos locales y se incluyen en la build mediante referencias desde los LsecEntry. Probar códec/tamaño en los equipos reales antes de fijar el formato definitivo.
- El progreso de estudiantes lo administra el subsistema local del juego. Este paquete no modifica ni migra archivos reales de estudiantes.
- No incluye traducciones a LSEC, locuciones finales, sistema de persistencia completo ni puente nativo de lector de pantalla.

## Referencias de implementación

- [Unity VideoPlayer](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Video.VideoPlayer.html): reproducción y estados del video.
- [Unity CanvasScaler](https://docs.unity3d.com/Packages/com.unity.ugui@2.0/manual/script-CanvasScaler.html): escala de la interfaz. Consultar la documentación equivalente a la versión real del equipo.
