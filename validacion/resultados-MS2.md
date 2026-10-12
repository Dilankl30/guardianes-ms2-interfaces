# Verificación de MS-2

Fecha: 12 de octubre de 2026. Entorno: Windows, Chrome de la sesión del usuario, prototipo HTML local. Para el modelo C#: .NET SDK 9.0.318. El ejecutable Unity no se compiló ni se probó en este entorno.

## Resultados ejecutados

| Prueba | Resultado observado |
| --- | --- |
| Modelo JavaScript | 6 pruebas correctas con `node --test validacion/core.test.cjs` |
| Modelo C# | 7 comprobaciones correctas: sin selección, reintento, acierto, duplicados, conjunto incompleto, distractores y desmarcado |
| Bienvenida | COMENZAR abre la escena 2; consigna y personaje visibles |
| Respuesta vacía | ELEGIR pide seleccionar; no avanza |
| Selección simple | Agua limpia permite reintento; Botella de plástico produce acierto y bloquea confirmaciones posteriores |
| Selección múltiple | Recoger basura sola no pasa; añadir Cuidar el agua permite continuar |
| Ayuda y LSEC | Conservan la selección; la ayuda ampliada corresponde al texto actual |
| Escape y foco | Escape cierra el panel ampliado y devuelve el foco a AYUDA |
| Radio por teclado | Flecha derecha desde Agua limpia selecciona Botella de plástico |
| Resultados LSEC | No se ofrece el clip de acierto antes de responder; aparece Resultado actual después de evaluar |
| Recompensa | Se muestra Gota del Guardián del Río; la pantalla aclara que es un recorrido de ejemplo |
| Reporte | Estado de error y REINTENTAR conducen a Sin datos; no hay datos reales |
| 320 px de viewport | Las cinco vistas tienen 305 px de ancho de contenido y 305 px de scrollWidth: sin desplazamiento horizontal |
| 768 px de viewport | Las cinco vistas tienen 753 px de ancho de contenido y 753 px de scrollWidth: sin desplazamiento horizontal |
| Preferencias | Texto de 30 px y movimiento reducido permanecen al recargar; en 320 px no aparece desbordamiento horizontal |
| HTML autocontenido | Ilustración completa (1536 px de origen); no contiene recursos src/href HTTP externos |

Se comprobó también el HTML autocontenido con el identificador definitivo MS-2 y la misma lógica de interacción.

## Pendientes y límites

- Prueba con lector de pantalla real: pendiente. La inspección del árbol accesible no equivale a esa prueba.
- Verificación de todos los controles a 200 % de ampliación y tamaños de hardware final: pendiente. La opción Texto más grande del ejemplo es de 24 a 30 px.
- Audio final y videos LSEC sin red en Unity: pendiente. No hay videos aprobados ni locuciones finales en esta entrega.
- Compilación y comportamiento de LsecPanel, LsecEntry e InterfaceTheme en Unity: pendiente. Solo SelectionModel se compiló y ejecutó con .NET.
- Revisión docente, lingüística y con usuarios: pendiente.

## Repetir pruebas

JavaScript: `node --test validacion/core.test.cjs`.

C#: desde `validacion/csharp`, ejecutar `dotnet run`. Ese runner incluye el mismo SelectionModel entregado en unity/Runtime y no necesita paquetes externos. Su éxito no valida las APIs de Unity.

Abrir `prototipo/MS2-demo.html` y repetir los recorridos. Para revisar los fuentes por separado se puede servir la carpeta prototipo por HTTP local. El HTML autocontenido ya incluye CSS, JavaScript e ilustración.
