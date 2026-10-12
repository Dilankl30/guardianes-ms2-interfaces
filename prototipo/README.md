# Prototipo de MS-2

Abrir MS2-demo.html con doble clic en Chrome o Edge. Incluye estilos, código e ilustración. Para editar, usar index.html, styles.css, app.js, data.js, icons.js y assets/.

La primera pantalla presenta la pregunta de la escena 2. Ver respuestas revela tres botones; activar uno evalúa. Ayuda, Señas y Lectura abren diálogos que conservan el estado. Escape cierra y devuelve el foco. La sección inferior Explorar las pantallas del ejemplo permite revisar bienvenida, selección múltiple, recompensa y reportes ficticios.

Los videos LSEC están pendientes. Para integrar un clip aprobado en los fuentes, copiarlo a assets/lsec/ y registrar su ID en SIGN_CLIPS de data.js con src local y status: validado, junto con la referencia de aprobación en el catálogo. No marcar validado un recurso pendiente. El HTML autocontenido no incrusta futuros videos automáticamente: distribuirlos con el paquete o preparar una build que los incluya.

El audio utiliza la voz del sistema disponible en el navegador y su funcionamiento sin red depende de las voces instaladas. El producto Unity utiliza locuciones locales. El prototipo guarda preferencias de lectura, no progreso de estudiantes.

Pruebas: node --test validacion/core.test.cjs desde la raíz. La guía de Unity describe el montaje equivalente en el producto. El fondo y los pictogramas no representan interpretación lingüística; consultar diseno/origen-ilustracion.txt para los recursos visuales.
