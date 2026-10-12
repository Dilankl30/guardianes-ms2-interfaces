# Verificación de MS-2

Entorno: Windows, Chrome de la sesión del usuario, prototipo HTML local. Fecha de ejecución: 12 de octubre de 2026. Modelo C#: .NET SDK 9.0.318.

## Resultados observados

| Recorrido | Resultado |
| --- | --- |
| Modelo JavaScript | 6 casos correctos: selección, conjunto exacto, vacío, bloqueo y clips permitidos |
| Modelo C# | 7 comprobaciones correctas con dotnet run |
| Pregunta inicial | Opciones ocultas; Ver respuestas revela tres tarjetas y mantiene la consigna |
| Respuesta simple | Agua limpia produce reintento; Botella de plástico produce acierto al pulsar Enter; las tres tarjetas quedan bloqueadas |
| Selección múltiple | Sin respuesta solicita seleccionar; una acción correcta resulta incompleta; las dos correctas permiten continuar |
| Recompensa | Muestra Gota del Guardián del Río, identifica la vista como ejemplo y permite volver a bienvenida |
| Bienvenida | Comenzar abre la pregunta de la escena 2 |
| Ayuda y señas | Una respuesta incorrecta y su resultado permanecen al consultar Ayuda y pasar a su contexto LSEC |
| Un solo diálogo | El paso Ayuda → Señas mantiene un diálogo abierto |
| Foco | Mayús+Tab en Cerrar señas vuelve a Volver a la actividad; Escape cierra y devuelve el foco al apoyo de origen |
| LSEC | Contexto y transcripción corresponden; Reproducir, Pausar y Repetir están desactivados por ausencia de clips; Ampliar cambia a Reducir |
| Lectura | Texto ampliado y movimiento reducido permanecen después de recargar |
| Reporte | Error seguido de Reintentar muestra Sin datos |
| Ancho compacto | Cinco vistas probadas dentro de un marco de 320 px: ancho útil 305 px y scrollWidth 305 px; sin desplazamiento horizontal |
| Diálogo compacto | Ancho útil y scrollWidth 248 px; el contenido utiliza desplazamiento vertical |
| LSEC en pantalla amplia | Diálogo normal con alto útil 640 px y scrollHeight 640 px; controles y retorno visibles |
| Paleta | Nueve combinaciones sólidas calculadas cumplen el objetivo de contraste registrado en diseno/paleta-y-contraste.csv |

La prueba compacta usa el viewport de un iframe de ensayo que carga el mismo index.html, con Texto más grande activo. No equivale a una prueba en hardware móvil. El fondo y los controles se revisaron visualmente y las capturas se encuentran en evidencias/.

## Pruebas pendientes de integración

- Lector de pantalla real y solución accesible del ejecutable Unity.
- Escala de 200 %, tamaños físicos, orientación y dispositivos acordados.
- Locuciones finales y videos LSEC aprobados, reproducidos sin red en Unity.
- Compilación y pruebas de LsecPanel, LsecEntry e InterfaceTheme en Unity. El runner C# solo verifica SelectionModel.
- Revisión docente y lingüística, comprensión de las señas y pruebas con usuarios.

## Repetir las comprobaciones

Desde la raíz del repositorio: `node --test validacion/core.test.cjs` y `dotnet run --project validacion/csharp/CoreCheck.csproj`.

Abrir `prototipo/MS2-demo.html` y seguir los casos de `plan-de-pruebas.csv`. Para editar, conservar juntos index.html, CSS, JavaScript y assets/. El HTML autocontenido incluye esos recursos gráficos y de código. No contiene videos LSEC ni datos de estudiantes.
