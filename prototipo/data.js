/* Textos base: storytelling, Nivel 3, escenas 1, 2, 11 y 12.
   Las pistas y textos de interfaz son propuestas pendientes de revisión docente.
   src solo puede completarse cuando exista una traducción LSEC validada. */
window.SIGN_CLIPS = {};
window.SCENES = {
 welcome:{scene:1,title:'La misión del río',text:'¡Hola, explorador! Hoy tenemos una nueva misión: proteger el río. ¿Quieres descubrir cómo cuidar el agua?',help:'Lee el mensaje o escucha el audio. Selecciona Comenzar cuando quieras iniciar.',action:'COMENZAR'},
 single:{scene:2,title:'Observa el río',text:'¿Cuál de estos elementos puede contaminar el agua?',help:'Busca algo que las personas fabrican y que no pertenece al río.',action:'ELEGIR',correct:['bottle'],success:'¡Correcto! La basura puede contaminar el río.',retry:'Mira otra vez. Busca el objeto que puede convertirse en basura.',options:[{id:'water',text:'Agua limpia',icon:'water'},{id:'bottle',text:'Botella de plástico',icon:'bottle'},{id:'leaf',text:'Hoja',icon:'leaf'}]},
 multi:{scene:11,title:'Elige cómo cuidar el río',text:'Ya aprendiste varias formas de cuidar el agua. Lee las acciones y selecciona las que ayudan a proteger el río.',help:'Puedes marcar más de una acción. Lee todas las opciones antes de confirmar.',action:'ELEGIR',correct:['collect','care'],success:'¡Excelente! Ya conoces varias formas de proteger el río.',retry:'Revisa tus elecciones. Busca las acciones que mantienen el agua limpia y evitan desperdiciarla.',options:[{id:'collect',text:'Recoger la basura',icon:'collect'},{id:'throw',text:'Arrojar residuos',icon:'throw'},{id:'care',text:'Cuidar el agua',icon:'water'},{id:'running',text:'Dejar correr el agua',icon:'tap'}]},
 reward:{scene:12,title:'Gota del Guardián del Río',text:'¡Lo lograste! Aprendiste que el agua es importante y que todos podemos ayudar a proteger los ríos de la Amazonía.',help:'Esta gota representa el cuidado del río. Puedes volver a explorar el ejemplo.',action:'VOLVER AL INICIO'},
 teacher:{scene:0,title:'Reporte docente',text:'Consulta el progreso de las actividades.',help:'Este ejemplo muestra los estados de carga, sin datos, error y resultados del reporte.'}
};
