# MS-2 · Estándares de interfaces y LSEC

## Descripción y alcance

Definir y aplicar los estándares de interfaces de Guardianes de la Amazonía Lectora para Unity 2D: distribución, tipografía, contraste, tamaños, navegación, selección, ayuda, audio, retroalimentación, progreso, recompensa y reportes. Incorporar acceso a lengua de señas ecuatoriana (LSEC) en los contenidos y controles de los cinco niveles, mediante videos locales contextualizados, ampliables y reproducibles a demanda. Mantener la identidad visual del storytelling, el aprendizaje sin penalizaciones y el funcionamiento sin conexión. Separar la elección de una respuesta de su confirmación y conservar la actividad al utilizar los apoyos.

Responsable de la tarea: Dilan. MS significa Metáforas del Sistema. Identificador vigente: MS-2. Sustituye la denominación RS-03 de la entrega anterior. Versión 2.0, 12 de octubre de 2026.

El equipo eligió Unity 2D y C# para escritorio offline, según la tarjeta MS-03. Queda por registrar la versión concreta de Unity, sistema operativo, resoluciones y equipos. El ejemplo navegable en HTML facilita la revisión del diseño; el producto final sigue siendo Unity.

La entrega contiene reglas visuales, un prototipo de las escenas 1, 2, 11 y 12 del Nivel 3, estados docentes, guiones de referencia LSEC, matriz de cobertura de las 60 escenas y código C# de referencia. Las escenas intermedias no se simulan como completadas. Horas, prioridad, puntos y sprint quedan a cargo del equipo.

## Identidad visual y distribución

Conservar la selva amazónica, el río, los personajes guía y las recompensas del storytelling. La nueva ilustración representa al Guardián junto al río y sirve como propuesta visual; el docente y el equipo deben aprobar su uso. El texto y los botones se mantienen editables y separados del arte.

Pantalla amplia: encabezado del nivel y avance, zona principal de actividad y panel LSEC lateral. La bienvenida usa mensaje y personaje; las preguntas dan prioridad a la consigna y tarjetas equivalentes. En pantalla compacta: nivel, consigna, apoyos, opciones, confirmación y panel LSEC, con desplazamiento vertical.

En el prototipo, desde 901 px se reserva un panel LSEC de 310 px. Por debajo se apila. La disposición interna también cambia según el espacio de las tarjetas. Son reglas del ejemplo, no resoluciones obligatorias del ejecutable. En Unity se revisan LayoutGroup y ScrollRect sin reducir texto automáticamente.

## Tipografía, color y tamaño

Arial o una sans-serif disponible con permiso de distribución. Texto de consigna: 24 px; títulos: 32 px; respuestas: 21-24 px en el ejemplo. Los apoyos y la transcripción secundaria usan una jerarquía menor que debe revisarse con el docente. No usar bloques largos en mayúsculas ni letras sobre vegetación.

Paleta: texto #17324D sobre blanco (13,13:1); acción #FFFFFF sobre #166534 (7,13:1); apoyo #FFFFFF sobre #075985 (7,56:1); selección #1D4ED8 sobre #DBEAFE (5,49:1); acierto #166534 sobre #F0FDF4 (6,81:1); reintento #9F1239 sobre #FFF1F2 (7,30:1); aviso #854D0E sobre #FEFCE8 (6,62:1). Son contrastes de colores sólidos calculados.

Área seleccionable inicial: 48 × 48 px en el prototipo, acción principal de 56 px, separación de 12 px y relleno de 16-24 px. La etiqueta completa de radio o casilla es seleccionable. Foco: contorno oscuro de 3 px con separación blanca. El mínimo de 48 px es un acuerdo del proyecto, no una afirmación de que WCAG AA exija esa cifra.

Unity: Canvas de referencia 1920 × 1080; texto inicial 36 unidades y controles 72 unidades. Verificar el resultado a la resolución mínima y con escala del sistema. La escala de Canvas no sustituye una comprobación de legibilidad real. El tamaño de video se ajusta para ver rostro y manos; ofrecer ampliación.

## Interacción del juego serio

Ciclo: comprender la consigna, explorar opciones, seleccionar, confirmar, recibir explicación y continuar o reintentar. La selección no revela el resultado. Se respeta el objetivo educativo: en el ejemplo, reconocer qué contamina el río y qué acciones lo protegen.

En selección simple una opción reemplaza la anterior. En múltiple cada una se marca o desmarca de forma independiente; la respuesta correcta requiere el conjunto completo sin distractores. Sin selección se muestra un aviso. La confirmación correcta se bloquea contra duplicados y CONTINUAR requiere una acción separada.

El error ofrece una pista y permite reintentar; no quita logros ni usa cuenta regresiva. La ayuda vuelve a la actividad con selección y contexto conservados. No premiar la rapidez ni penalizar el uso de señas, audio o ayuda.

El progreso del ejemplo indica cuatro vistas; las escenas conservan números 1, 2, 11 y 12. La integración final debe usar el progreso real de cada nivel. Los reportes se muestran con estados de carga, vacío, fallo y datos ficticios; no se exponen datos de estudiantes.

## LSEC en toda la experiencia

Lengua confirmada por el usuario: lengua de señas ecuatoriana (LSEC). No sustituirla por ASL, LSE u otra lengua. La cobertura es una decisión del proyecto y se añade al storytelling; el PDF original no se presenta como la fuente de este nuevo requisito.

Cubrir bienvenida, narración, consignas, cada respuesta, ayudas, acierto, reintento, recompensas, nombres de controles, menús, progreso, ajustes, estados de carga, guardado y errores, incluidos reportes docentes. La matriz tiene 60 filas de escenas; cada casilla debe enlazar los clips que correspondan antes del cierre.

El panel permite seleccionar el contenido, reproducir, pausar, repetir y ampliar. Siempre se identifica el contenido actual. Al ampliarlo se mantiene la respuesta; al cambiar de escena se detiene la reproducción anterior. Los resultados en señas se habilitan después de responder, con el mismo momento de acceso que el texto.

El área de interpretación no tapa opciones ni subtítulos. Mostrar rostro, manos y espacio de señas completos, con iluminación uniforme y fondo liso contrastante. No recortar, acelerar o invertir la imagen para ajustarla al diseño. El estudiante elige la reproducción y puede repetir sin límites.

Estado actual: el prototipo contiene la distribución y controles, con un marcador explícito de video pendiente. No contiene intérpretes ni videos traducidos. Los botones de reproducción permanecen desactivados hasta existir un recurso local aprobado. Un marcador gráfico no cuenta como implementación lingüística.

## Producción y validación de los videos

El catálogo contiene 49 guiones en español para el ejemplo y sus estados comunes. Son textos para encargar la traducción; no son glosas ni transcripciones LSEC. Algunos textos son del storytelling y otros son propuestas de interfaz identificadas en la columna de origen.

Flujo por clip: revisar texto y objetivo educativo; traducir con persona competente en LSEC; revisar con persona sorda usuaria de LSEC; grabar; comprobar equivalencia docente; corregir; registrar versión y aprobación; integrar; probar en el dispositivo. Acordar permisos de uso de imagen y distribución antes de incorporar grabaciones.

Registrar ID, texto exacto, lengua, archivo local, versión y referencias de revisiones. Si cambia el texto o la actividad, reabrir la validación del clip. Preferir VideoClip local en Unity y comprobar códec y calidad en el equipo escolar; no depender de enlaces de YouTube o de servicios externos.

Los clips deben dar acceso equivalente. No enfatizar la opción correcta ni explicar la solución dentro de una opción incorrecta. Traducir el significado y las expresiones apropiadas de LSEC; no convertir cada palabra española en una sucesión inventada de gestos.

Cuando un recurso obligatorio falte, mostrar aviso y conservar actividad y texto; el mensaje es una contingencia, no una sustitución que permita declarar cerrada la cobertura LSEC. Probar de nuevo todos los estados con videos reales antes de publicar una versión educativa final.

## Implementación en Unity

El directorio unity contiene LsecEntry, LsecPanel, SelectionModel e InterfaceTheme, junto con instrucciones de montaje y referencias de cada campo. SelectionModel está separado de Unity y pasó siete comprobaciones ejecutadas con .NET 9. Los componentes que dependen de Unity requieren compilación en la versión del equipo.

LsecEntry une ID, texto, VideoClip local y referencia de aprobación. LsecPanel prepara el video, muestra estados, pausa, repite y detiene al desactivarse. Usa una RawImage con relación de aspecto conservada. La ampliación se conecta mediante el contenedor del panel en la escena.

Canvas, TextMeshPro o UnityEvent no garantizan lectura de pantalla. Debe elegirse y comprobarse una solución accesible para el ejecutable real y sus controles. Teclado: selección, confirmación, orden de foco, modales y retorno. Reducir movimiento debe conservar todos los mensajes y logros.

El prototipo HTML abre con sus archivos locales; usa voz del sistema como demostración cuando el navegador la admite. Esa voz no es una locución final ni prueba audio offline en Unity. El juego deberá incluir AudioClip locales aprobados y coordinar audio y video para evitar superposición.

## Criterios de aceptación

La guía y los componentes identifican las pantallas de bienvenida, actividad, ayuda, resultado, recompensa, navegación y reporte docente. Conservan personajes y temática amazónica, con texto real sobre fondos sólidos. El diseño amplio distingue consigna, actividad y panel LSEC; en espacio reducido los apila sin tapar opciones ni recortar texto.

Las consignas, opciones y explicaciones mantienen el significado del storytelling. Las pistas nuevas están identificadas como propuestas y reciben revisión docente. Cada escena conserva su número original; el prototipo de cuatro escenas no registra ni presenta como completado el nivel completo.

Las combinaciones de texto y fondo alcanzan al menos 4,5:1 y los indicadores necesarios de control y selección, 3:1 respecto a los colores contiguos. El foco es visible; la selección, el acierto y el reintento incluyen texto o símbolos además del color. Ninguna información necesaria depende únicamente del sonido.

El tamaño de texto y el área de cada control se verifican a la resolución y escala del equipo objetivo. La propuesta web usa texto principal de 24 px y objetivos de al menos 48 × 48 px; la referencia de Unity usa 36 y 72 unidades en Canvas 1920 × 1080 como punto de partida, sin asumir equivalencia física universal. La ampliación no oculta controles ni contenido.

En selección simple queda una opción elegida. En selección múltiple se pueden marcar y desmarcar opciones; solo se acepta el conjunto correcto. ELEGIR valida y no cambia de escena automáticamente. Sin selección se solicita elegir. Una confirmación repetida no duplica intentos, avance ni recompensas.

AYUDA conserva selección y progreso, abre la pista de la escena y permite volver al mismo punto. AUDIO comienza por acción del estudiante, permite pausar y repetir, y se detiene al cambiar de escena. La información necesaria permanece en texto e imagen cuando el audio está apagado.

Todos los controles funcionan con las entradas acordadas. En los modales, el foco entra, permanece dentro y vuelve al control de origen al cerrar. En el ejecutable Unity se comprueba el mecanismo accesible con el lector de pantalla elegido; exponer texto en Canvas o emitir un evento no se considera prueba de accesibilidad nativa.

Cada consigna, opción, ayuda, resultado, recompensa, explicación de navegación, ajuste y mensaje de estado dispone de una referencia LSEC en el catálogo. El clip corresponde al texto y versión mostrados. Los clips de resultado solo se ofrecen después de evaluar; la traducción no señala la respuesta correcta antes de tiempo.

El panel LSEC permite reproducir, pausar, repetir y ampliar. El estudiante controla el inicio. Rostro, manos y espacio de señas se ven completos y con claridad, sin recorte ni superposición con subtítulos o controles. Abrir o cerrar el panel no cambia la respuesta ni el progreso y el cambio de escena detiene el video anterior.

Los videos LSEC se graban con personas competentes en LSEC y se revisan lingüísticamente con participación de una persona sorda usuaria de LSEC. La revisión docente verifica equivalencia y adecuación educativa. Se registra aprobación y versión por clip. Un marcador gráfico o un avatar sin validación no cuenta como traducción.

El ejecutable incluye los recursos de audio e interpretación aprobados para funcionar sin red. Si falta un video o falla su carga, ofrece un aviso comprensible y conserva el texto y la actividad; no afirma que la traducción esté disponible. La falta de un clip obligatorio impide cerrar la cobertura LSEC.

Las pruebas registran entorno, recorrido, resultado y evidencia. La entrega distingue diseño, prototipo, código de referencia e integración final. MS-2 se cierra después de integrar los cinco niveles, validar los videos, probar los equipos acordados, revisar con el docente y resolver los defectos que impidan cumplir estos criterios.

## Pruebas realizadas y límites

Pruebas automáticas: 6 casos del modelo JavaScript y 7 comprobaciones del modelo C#; resultados correctos. Cubren reemplazo de selección simple, marcado y desmarcado múltiple, conjunto incompleto, distractores, respuesta vacía, bloqueo después del acierto y rechazo de clip no validado en el prototipo.

Recorrido de navegador: bienvenida, respuesta vacía, reintento, acierto simple, conjunto incompleto, acierto múltiple, recompensa, ayuda y panel ampliado. Escape devuelve el foco a AYUDA y conserva la selección. Se comprobó la selección de radio mediante flecha derecha. Las preferencias de lectura sobreviven a la recarga.

Redistribución: las cinco vistas del prototipo se comprobaron en un viewport de 320 px (305 px de contenido por la barra de desplazamiento), sin desbordamiento horizontal. El texto ampliado de la opción del ejemplo usa 30 px y conserva el ajuste. Esto no equivale a una prueba de todos los tamaños ni de ampliación de 200 % del producto final.

Pendiente: traducción, grabación y revisión LSEC; revisión docente; integración en todas las escenas; lector de pantalla; audio y videos reales sin red; compilación y pruebas de Unity en hardware acordado. El detalle del estado real figura en validacion/estado-tareas.csv. No se marca el requisito completo.

## Tareas

1. Documentar el alcance del MS-2 y el inventario de tipos de pantalla compartidos por los cinco niveles.

2. Definir el ciclo de interacción del juego y relacionar las acciones con el objetivo de lectura de cada nivel.

3. Establecer tipografía, tamaños, espaciado y paleta, y calcular el contraste de las combinaciones propuestas.

4. Diseñar los esquemas de distribución de la pantalla amplia y de la pantalla compacta.

5. Especificar funciones y estados de botones, tarjetas, audio, ayuda, progreso y mensajes.

6. Relacionar las reglas de accesibilidad con WCAG 2.2 y las buenas prácticas de accesibilidad de juegos.

7. Redactar criterios de aceptación verificables y preparar el plan de pruebas del MS-2.

8. Confirmar con el equipo la arquitectura elegida y registrar los dispositivos, navegadores o sistemas que se usarán.

9. Diseñar el prototipo de bienvenida con personaje, misión, AUDIO y COMENZAR.

10. Diseñar el prototipo de selección simple con estados inicial, seleccionado, acierto y reintento.

11. Diseñar el prototipo de selección múltiple con marcado, desmarcado y confirmación del conjunto.

12. Diseñar la ayuda, el progreso, la recompensa y los estados de carga, vacío y error del reporte docente.

13. Revisar con el docente las consignas, pistas, mensajes e imágenes de las escenas que usarán las plantillas.

14. Implementar los estilos y componentes reutilizables en la tecnología confirmada por el equipo.

15. Aplicar las plantillas y los tamaños a las escenas y al reporte docente definidos en el backlog.

16. Implementar selección simple, selección múltiple y prevención de confirmaciones repetidas.

17. Integrar controles de AUDIO y AYUDA, evitando superposición de locuciones y pérdida de contexto.

18. Redactar e integrar etiquetas accesibles y alternativas textuales de las imágenes informativas.

19. Implementar navegación por teclado, foco visible y entrada y salida accesible de la ayuda.

20. Anunciar selección y resultado a las tecnologías de asistencia del entorno objetivo.

21. Aplicar mensajes de acierto y reintento, progreso y recompensa con señales visuales y texto.

22. Implementar reducción de movimiento y los estados de interfaz relacionados con uso sin conexión y guardado.

23. Probar los recorridos de bienvenida, respuesta simple, respuesta múltiple, ayuda, error y recompensa con teclado y lector de pantalla.

24. Probar contraste, tamaño de controles, ampliación del texto, redistribución y cambio de orientación en los equipos acordados.

25. Probar el recorrido con sonido apagado, recursos preparados sin conexión y repetición rápida de acciones.

26. Realizar la revisión de uso con el docente y registrar los problemas de comprensión y operación.

27. Corregir los defectos encontrados y repetir las pruebas afectadas.

28. Guardar las evidencias y obtener la revisión del equipo antes de cerrar el MS-2.

29. Confirmar LSEC como lengua de señas del proyecto y documentar su alcance transversal.

30. Diseñar el panel LSEC normal y ampliado con controles, estados de carga y alternativas cuando falta un video.

31. Preparar el catálogo de guiones del ejemplo y la matriz de cobertura LSEC de las 60 escenas.

32. Preparar los componentes C# de referencia para tema visual, selección y reproducción de videos LSEC locales.

33. Validar los guiones con el docente y traducirlos a LSEC con profesionales y personas sordas usuarias de LSEC.

34. Grabar, revisar y aprobar cada video LSEC; registrar versión, referencia de validación y permisos de uso.

35. Integrar los videos LSEC aprobados en las escenas, opciones, ayudas, resultados, menús, ajustes y reportes de Unity.

36. Probar interpretación LSEC, legibilidad del intérprete, teclado, lector de pantalla y funcionamiento sin conexión en el ejecutable final.

## Referencias y trazabilidad

Fuente de contenido educativo: GUARDIANES DE LA AMAZONÍA LECTORA STORYTELLING (1).pdf aportado por el usuario. Ejemplos del Nivel 3, páginas 17, 18, 22 y 23. Se conserva el significado de las consignas y respuestas; las nuevas pistas quedan sujetas a revisión docente.

Decisión tecnológica: MS-03 del tablero Guardianes de la selva: https://trello.com/c/2CD2Sc8B . Seguimiento de MS-2: https://trello.com/c/1f2jrRjS .

WCAG 2.2: https://www.w3.org/TR/WCAG22/ . Referencia para contraste, foco, teclado y estados; evaluar aplicabilidad al producto. No se certifica conformidad con esta entrega.

W3C, Sign Languages: https://www.w3.org/WAI/media/av/sign-languages/ . Considera diferencias entre lenguas de señas y preparación de interpretación.

WCAG 1.2.6, Sign Language (Prerecorded), es de nivel AAA y se refiere a audio pregrabado en medios sincronizados: https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html . La cobertura LSEC de todos los controles y contenidos se exige aquí por decisión del proyecto.

Buenas prácticas para juegos: https://learn.microsoft.com/en-us/xbox/accessibility/guidelines .

Implementación: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Video.VideoPlayer.html y https://docs.unity3d.com/Packages/com.unity.ugui@2.0/manual/script-CanvasScaler.html . Verificar equivalencia con la versión real del equipo.
