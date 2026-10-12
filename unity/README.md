# Integración de MS-2 en Unity 2D

**Metáfora del Sistema: estándares de interfaces y LSEC.** El producto usa Unity 2D, C#, Canvas, TextMeshPro y recursos locales. Este directorio contiene componentes de referencia y una guía de montaje; la integración y compilación en la versión del equipo requieren verificación en Unity.

## Jerarquía de presentación

```text
Canvas
  FondoDecorativo
  Encabezado (identidad, nivel, escena)
  Actividad
    Pregunta (consigna, Escuchar, VerRespuestas)
    Respuestas (franja, Escuchar, tarjetas)
    Resultado (explicación, apoyos, Continuar)
  Apoyos (Ayuda, Señas, Lectura)
  CapaDialogos
    Atenuacion
    Ayuda
    LSEC
    Lectura
```

El arte está en `../prototipo/assets/guardian-modular.png`. Texto y controles se construyen con componentes reales. Los cuatro diseños se encuentran en `../diseno/pantallas/`.

## Montaje

1. Copiar `Runtime/` a `Assets/Guardianes/Interfaces/Runtime/` en el proyecto del equipo. Registrar versión del editor, sistema operativo y dispositivos objetivo. Usar el sistema de entrada del proyecto.
2. Configurar Canvas `Screen Space - Overlay` y CanvasScaler `Scale With Screen Size`, referencia 1920 × 1080, Match 0.5 como punto de partida. Crear EventSystem y seleccionar explícitamente el primer control de cada vista.
3. Crear `InterfaceTheme` desde Create → Guardianes → Interfaces → Tema visual. El cuerpo de 36 unidades y objetivos de 72 unidades requieren verificación física. No reducir automáticamente textos para hacerlos caber; usar LayoutGroup y desplazamiento vertical cuando sea necesario.
4. Activar Pregunta al entrar a una actividad y mantener Respuestas oculto. `VerRespuestas.onClick` activa la franja y las tarjetas y conserva la consigna. El controlador guarda etapa, IDs seleccionados, resultado y bloqueo independientemente de los diálogos.
5. En respuesta simple, construir tarjetas con Button. Al pulsar, llamar a `SelectionModel.Select(id)` y después `Confirm()`. En múltiple, usar Toggles independientes que llaman a Select; solo el botón Confirmar respuestas llama a Confirm. Consultar el nombre exacto de métodos en `SelectionModel.cs`.
6. `Empty` solicita seleccionar; `Retry` muestra explicación y permite reintentar; `Correct` bloquea respuestas y habilita Continuar; `AlreadyConfirmed` no registra otro intento ni avance. El gestor de progreso procesa una continuación por escena. La apertura de apoyos no reinicializa SelectionModel.
7. Mantener una única vista de diálogo activa en CapaDialogos. Al abrir, detener AudioSource y el video, guardar el objeto seleccionado de EventSystem, activar la atenuación y desactivar interacción del contenido inferior mediante CanvasGroup. Seleccionar Cerrar y limitar la navegación a los controles del diálogo.
8. Cerrar y Escape desactivan el diálogo, detienen el video, restauran la interacción de la actividad y seleccionan el control de origen. Si se pasa de Ayuda a LSEC, conservar el origen Ayuda y evitar dos modales simultáneos. Se debe implementar y probar la contención del foco; activar un CanvasGroup por sí solo no define el orden de navegación.
9. Añadir VideoPlayer y LsecPanel dentro del diálogo LSEC. Enlazar RawImage, placeholder, transcript TMP, status TMP, botones y AudioSource. RawImage usa AspectRatioFitter `Fit In Parent`. El controlador usa `VideoClip` local y `APIOnly`; rostro, manos y espacio de señas se muestran completos.
10. Crear LsecEntry por ID del catálogo. Registrar texto, VideoClip local y referencia de aprobación. Mantener `linguisticallyApproved = false` hasta disponer de revisión lingüística registrada. El catálogo debe coincidir con el contenido mostrado, incluidos estados dinámicos.
11. Al abrir Señas, llamar a `SetContent(entry)` para la consigna. El selector de contexto accede a pista, opciones disponibles, navegación, ajustes y resultado solo después de evaluar. La ausencia de un clip aprobado muestra Video en preparación con controles inactivos.
12. Ampliar redimensiona el contenedor del mismo diálogo y conserva el contenido. Pausar no pierde posición; Repetir vuelve al principio. Cerrar desactiva el componente y detiene la reproducción. Probar cambio de contexto durante carga, error de archivo y reapertura.
13. Escuchar detiene la locución anterior y reproduce un AudioClip local. Antes de iniciar narración, llamar a `PauseForNarration()`. Antes de abrir cualquier apoyo o escena, detener la locución. El reproductor LSEC pausa el AudioSource al iniciar el video.
14. Lectura cambia la escala tipográfica y la preferencia de movimiento. Persistir preferencias en el dispositivo con manejo de fallos. El progreso del juego lo administra su subsistema local y no depende del cierre de diálogos.
15. Conectar textos y estados al mecanismo accesible que el equipo valide para su ejecutable. TMP_Text o UnityEvent no equivalen a compatibilidad con lector de pantalla. Comprobar nombres, orden, foco, mensajes y controles con el lector y sistema acordados.
16. Compilar, desconectar la red y repetir el recorrido completo con recursos aprobados. Probar teclado, control por puntero, ampliación, foco, repetición de acciones y lectura del intérprete. Registrar evidencias y resolver bloqueos antes de cerrar la integración.

## Componentes

- `InterfaceTheme`: colores y medidas de referencia.
- `SelectionModel`: selección y evaluación sin dependencias de Unity.
- `LsecEntry`: vínculo entre texto, archivo y validación lingüística.
- `LsecPanel`: preparación y controles de video local.

La coordinación de etapas y diálogos se monta en las escenas del producto siguiendo esta guía. Los componentes no constituyen un proyecto Unity completo ni acreditan su compilación. No se incluyen grabaciones LSEC, locuciones finales o un puente nativo de lector de pantalla.

## Referencias

- [Unity VideoPlayer](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Video.VideoPlayer.html).
- [Unity CanvasScaler](https://docs.unity3d.com/Packages/com.unity.ugui@2.0/manual/script-CanvasScaler.html).

Consultar las APIs equivalentes a la versión exacta del equipo.
