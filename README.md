# Estándares de interfaces de Guardianes de la Amazonía Lectora

Materiales del **RS-03**, a cargo de **Dilan**. La entrega define las reglas visuales y de interacción que se aplicarán al juego educativo y organiza su implementación y validación.

## Consultar la entrega

- [Guía completa en PDF](documentacion/RS03-Estandares-de-interfaces.pdf).
- [Guía editable y legible en GitHub](documentacion/RS03-Estandares-de-interfaces.md).
- [Esquema de pantallas amplias y compactas](diseno/distribucion-pantallas.png).
- [Paleta y contrastes calculados](diseno/paleta-y-contraste.csv).
- [Descripción criterios y tareas para Trello](trello/RS03-tarjeta-y-tareas.txt).
- [Plan de pruebas para registrar resultados](validacion/plan-de-pruebas.csv).

## Contenido

La guía contiene tipografía, colores, tamaños, distribución, estados de componentes, interacción del juego serio y accesibilidad. Incluye **10 criterios de aceptación, 28 tareas y 12 pruebas previstas**. Las tareas pertenecen a un único RS-03.

Se toma como referencia [WCAG 2.2](https://www.w3.org/TR/WCAG22/) para la alternativa web y las [Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines) como buenas prácticas para juegos. Las medidas y colores son la propuesta de diseño para revisar con el equipo.

## Estado del trabajo

La preparación documental de las tareas 1 a 7 está realizada: alcance, interacción educativa, reglas visuales, esquemas de distribución, comportamiento de componentes, referencias de accesibilidad y plan de aceptación y pruebas.

Están pendientes la confirmación de arquitectura y dispositivos, los prototipos funcionales, la integración en el juego, la revisión docente y las pruebas del producto. El PDF del stack presenta alternativas WebApp offline y Unity 2D; este repositorio no decide entre ellas. Los resultados del plan de pruebas permanecen pendientes hasta ejecutarse.

El equipo definirá horas, prioridad, puntos de historia y sprint. La guía por sí sola no demuestra conformidad WCAG ni completa la implementación del requisito.

## Carpetas

| Carpeta | Contenido |
| --- | --- |
| `documentacion` | Guía en PDF y texto Markdown editable |
| `diseno` | Distribución de pantallas y paleta con contraste |
| `trello` | Texto de la tarjeta y lista numerada de tareas |
| `validacion` | Registro editable de las pruebas previstas |

## Edición y revisión

La guía Markdown se puede leer y editar desde GitHub. Los archivos CSV usan separador de punto y coma y codificación UTF-8; pueden abrirse en una hoja de cálculo. Al cambiar las reglas, actualizar también el PDF y registrar qué pruebas deben repetirse. Mantener la evidencia de implementación y revisión antes de cerrar el requisito.

El repositorio se comparte públicamente por decisión de su propietario. Cualquier persona puede consultar y descargar estos materiales mediante el enlace; no se necesitan invitaciones para leerlos.

Seguimiento: [tarjeta RS-03 en Trello](https://trello.com/c/1f2jrRjS). El tablero conserva sus permisos de acceso propios.

