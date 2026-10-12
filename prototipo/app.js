'use strict';
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icons={
 water:'<path d="M48 8C40 23 22 42 22 58a26 26 0 0 0 52 0C74 42 56 23 48 8Z" fill="#80d9ed" stroke="#075985" stroke-width="4"/><path d="M32 58q0 15 14 16" fill="none" stroke="white" stroke-width="6" stroke-linecap="round"/>',
 bottle:'<g transform="rotate(20 48 48)"><path d="M37 20h22v18l8 9v35q-19 8-38 0V47l8-9Z" fill="#bee8e7" stroke="#075985" stroke-width="4"/><path d="M38 11h20v13H38Z" fill="#075985"/><path d="M30 54h36v18H30Z" fill="#f6d366" stroke="#075985" stroke-width="3"/></g>',
 leaf:'<path d="M17 77C7 36 39 10 80 15c6 39-17 72-63 62Z" fill="#9bce6b" stroke="#166534" stroke-width="4"/><path d="m12 85 57-57M37 60l-8-19m18 9 20 3" stroke="#166534" stroke-width="4" fill="none" stroke-linecap="round"/>',
 collect:'<path d="M27 31h44l-5 53H32Z" fill="#9bce6b" stroke="#166534" stroke-width="4"/><path d="M24 25h50M39 17h19M41 44v27m14-27v27" stroke="#166534" stroke-width="4" stroke-linecap="round"/><path d="m7 52 8 8 13-18" stroke="#075985" stroke-width="5" fill="none"/>',
 throw:'<path d="M8 74q12-12 26 0t27 0t27 0M8 87q12-12 26 0t27 0t27 0" fill="none" stroke="#075985" stroke-width="4"/><g transform="rotate(-30 52 36)"><path d="M42 22h20v35H42Z" fill="#dbeafe" stroke="#075985" stroke-width="4"/><path d="M45 14h14v8H45Z" fill="#075985"/></g>',
 tap:'<path d="M18 35h39v-9H40V15h41v11H66v9q17 0 17 20H66q0-6-7-6H18Z" fill="#b6cbd2" stroke="#17324d" stroke-width="4"/><path d="m71 62-5 12m17-12-5 12m-7 5-5 12" stroke="#075985" stroke-width="4" stroke-linecap="round"/>'
};
const svg=(id)=>`<svg viewBox="0 0 96 96" aria-hidden="true" focusable="false">${icons[id]||icons.water}</svg>`;
const frame='<svg viewBox="0 0 180 160" aria-hidden="true"><rect x="8" y="5" width="164" height="145" rx="15" fill="#f8faf9" stroke="#9caeae" stroke-dasharray="6 5"/><circle cx="90" cy="49" r="23" fill="#91a9af"/><path d="M44 138V99q0-27 46-27t46 27v39" fill="#91a9af"/><path d="M66 95v42m48-42v42" stroke="#f8faf9" stroke-width="4"/></svg>';
let current='welcome',selected=[],locked=false,feedback='',feedbackType='',contexts=[],signId='',teacherState='empty',returnFocus=null;
let audioState='stopped',speech=null;
const reportTexts={loading:'Estamos preparando el reporte. Espera un momento.',empty:'Todavía no hay actividades registradas. El progreso aparecerá aquí cuando haya resultados.',error:'No pudimos leer el progreso guardado. Puedes reintentar sin borrar los datos.',success:'Ejemplo de datos ficticios: 2 actividades respondidas. Estos resultados no pertenecen a estudiantes.'};
function announce(text){$('announcer').textContent=text;}
function stopAudio(){if('speechSynthesis'in window)window.speechSynthesis.cancel();audioState='stopped';updateAudio();}
function updateAudio(){const b=$('audio');if(b)b.textContent=audioState==='playing'?'❚❚ PAUSAR':audioState==='paused'?'▶ CONTINUAR AUDIO':'◖ AUDIO';}
function narration(){const s=SCENES[current];return [s.text,...(s.options||[]).map(x=>x.text),feedback].filter(Boolean).join('. ');}
function playAudio(restart=false){
 if(!('speechSynthesis'in window)){announce('Audio no disponible en este navegador. El texto permanece visible.');return;}
 if(!restart&&audioState==='playing'){speechSynthesis.pause();audioState='paused';updateAudio();return;}
 if(!restart&&audioState==='paused'){speechSynthesis.resume();audioState='playing';updateAudio();return;}
 stopAudio();document.querySelectorAll('video').forEach(v=>v.pause());speech=new SpeechSynthesisUtterance(narration());speech.lang='es-EC';speech.rate=.88;
 speech.onend=()=>{audioState='stopped';updateAudio();};speech.onerror=()=>{audioState='stopped';updateAudio();announce('No fue posible reproducir el audio. Puedes leer el texto.');};
 audioState='playing';speechSynthesis.speak(speech);updateAudio();
}
function supports(){return '<div class="support-row"><button id="audio">◖ AUDIO</button><button id="audio-repeat" aria-label="Repetir audio">↺ AUDIO</button><button id="help">? AYUDA</button><button id="sign-activity">SEÑAS</button></div>';}
function showScreen(name,focus=true){
 stopAudio();announce('');current=name;selected=[];locked=false;feedback='';feedbackType='';$('screen-picker').value=name;
 const s=SCENES[name];let content='';
 const kicker=`<p class="scene-kicker">${s.scene?'ESCENA '+s.scene+' · PROTEJO EL RÍO':'VISTA DE EJEMPLO'}</p>`;
 if(name==='welcome')content=`<div class="welcome-layout"><div class="welcome-copy student">${kicker}<h2 id="screen-title" tabindex="-1">${s.title}</h2><p>${s.text}</p>${supports()}<button id="begin" class="primary full">COMENZAR →</button></div><img class="hero" src="assets/guardian-rio.png" alt="El Guardián de la Selva saluda junto a un río amazónico con delfines rosados y vegetación."></div>`;
 if(name==='single'||name==='multi')content=`<div class="scene-image" aria-hidden="true"></div><div class="game-inner student">${kicker}<h2 id="screen-title" tabindex="-1">${s.title}</h2><p class="instructions">${s.text}</p>${supports()}<fieldset class="options ${name==='multi'?'multi':''}"><legend>${name==='multi'?'Puedes elegir varias respuestas.':'Elige una respuesta.'}</legend>${s.options.map(o=>`<label class="option"><input type="${name==='multi'?'checkbox':'radio'}" name="answer" value="${o.id}">${svg(o.icon)}<span>${o.text}</span><span class="chosen" aria-hidden="true">✓ Elegida</span></label>`).join('')}</fieldset><div id="feedback"></div><button id="confirm" class="primary">${s.action} →</button></div>`;
 if(name==='reward')content=`<div class="reward student">${kicker}<div class="medal" aria-hidden="true">${svg('water')}</div><h2 id="screen-title" tabindex="-1">${s.title}</h2><p>${s.text}</p><p class="hint-label">Vista de la recompensa del storytelling. Este recorrido es un ejemplo y no completa el Nivel 3.</p>${supports()}<button id="begin" class="primary">VOLVER AL INICIO</button></div>`;
 if(name==='teacher')content=`<div class="teacher">${kicker}<h2 id="screen-title" tabindex="-1">Reporte docente</h2><p>Estados de la interfaz · datos de demostración.</p><label for="report-state">Estado que quieres revisar</label><select id="report-state"><option value="empty">Sin datos</option><option value="loading">Cargando</option><option value="error">Error</option><option value="success">Con resultados ficticios</option></select><div id="report-content" class="report-state" role="status"></div>${supports()}</div>`;
 $('screen').innerHTML=content;
 $('journey-label').textContent=name==='teacher'?'Reporte · vista de ejemplo':`Recorrido de ejemplo · ${['welcome','single','multi','reward'].indexOf(name)+1} de 4`;
 $('journey-progress').value=Math.max(0,['welcome','single','multi','reward'].indexOf(name)+1);
 document.querySelectorAll('input[name="answer"]').forEach(input=>input.addEventListener('change',()=>{
  selected=GuardianCore.select(selected,input.value,name==='multi',locked);feedback='';feedbackType='';$('feedback').innerHTML='';buildContexts();
  document.querySelectorAll('input[name="answer"]').forEach(x=>x.checked=selected.includes(x.value));
  announce(selected.length?'Seleccionado: '+s.options.filter(x=>selected.includes(x.id)).map(x=>x.text).join(', '):'Sin respuestas seleccionadas.');
 }));
 $('confirm')?.addEventListener('click',checkAnswer);
 $('begin')?.addEventListener('click',()=>showScreen(name==='welcome'?'single':'welcome'));
 $('audio')?.addEventListener('click',()=>playAudio());$('audio-repeat')?.addEventListener('click',()=>playAudio(true));
 $('help')?.addEventListener('click',()=>{$('help-text').textContent=s.help;stopAudio();openDialog('help-dialog');});
 $('sign-activity')?.addEventListener('click',()=>setSign('n3-e'+s.scene+'-consigna',true));
 if(name==='teacher'){$('report-state').value=teacherState;$('report-state').addEventListener('change',e=>{teacherState=e.target.value;renderReport();buildContexts();});renderReport();}
 buildContexts();if(focus)$('screen-title').focus();
}
function renderReport(){const labels={loading:'Preparando el reporte',empty:'Aún no hay resultados',error:'No se pudo cargar',success:'Resultados de ejemplo'};$('report-content').innerHTML=`<h3>${labels[teacherState]}</h3><p>${reportTexts[teacherState]}</p>${teacherState==='error'?'<button id="retry-report" class="secondary">REINTENTAR</button>':''}`;$('retry-report')?.addEventListener('click',()=>{teacherState='empty';$('report-state').value='empty';renderReport();buildContexts();});}
function checkAnswer(){const s=SCENES[current],result=GuardianCore.validate(selected,s.correct,locked);if(result==='locked')return;
 feedback=result==='empty'?'Selecciona una respuesta antes de elegir.':result==='correct'?s.success:s.retry;feedbackType=result==='correct'?'acierto':result==='retry'?'reintento':'sin-seleccion';
 locked=result==='correct';const css=result==='correct'?'good':result==='retry'?'retry':'info';
 $('feedback').innerHTML=`<div class="feedback ${css}" role="status"><p>${result==='correct'?'✓ ':result==='retry'?'↺ ':''}${feedback}</p><button id="feedback-sign" class="secondary">Ver resultado en señas</button></div>`;
 $('feedback-sign').addEventListener('click',()=>setSign('n3-e'+s.scene+'-'+(result==='correct'?'acierto':result==='retry'?'reintento':'sin-seleccion'),true));
 if(locked){document.querySelectorAll('input[name="answer"]').forEach(x=>x.disabled=true);$('confirm').disabled=true;$('confirm').textContent='RESPUESTA CONFIRMADA';const next=document.createElement('button');next.className='primary';next.textContent='CONTINUAR →';next.id='continue';$('feedback').appendChild(next);next.addEventListener('click',()=>showScreen(current==='single'?'multi':'reward'));next.focus();}
 else{announce(feedback);$('feedback-sign').focus();}
 buildContexts();
}
function buildContexts(){const s=SCENES[current],prefix='n3-e'+s.scene;
 contexts=[{id:prefix+'-consigna',label:current==='teacher'?'Presentación del reporte':'Consigna de la escena',text:s.text},{id:prefix+'-titulo',label:'Título de la pantalla',text:s.title},{id:'comun-nivel',label:'Nombre del nivel',text:'Nivel 3. Protejo el río.'},{id:prefix+'-ayuda',label:'Ayuda de la escena',text:s.help},...(s.options||[]).map(o=>({id:prefix+'-opcion-'+o.id,label:'Opción: '+o.text,text:o.text})),
 {id:'comun-navegacion',label:'Botones y navegación',text:'COMENZAR inicia la actividad. ELEGIR confirma tu respuesta. CONTINUAR abre el siguiente ejemplo. AUDIO lee el texto. AYUDA ofrece una pista. SEÑAS abre la interpretación.'},
 {id:current==='teacher'?'docente-progreso':'comun-progreso-'+(['welcome','single','multi','reward'].indexOf(current)+1),label:'Progreso',text:current==='teacher'?'Reporte: vista de ejemplo.':`Recorrido de ejemplo: ${['welcome','single','multi','reward'].indexOf(current)+1} de 4. No hay límite de tiempo.`},
 {id:'comun-ajustes',label:'Ajustes de lectura',text:'Puedes aumentar el texto y reducir el movimiento. Guardar y volver conserva los ajustes en este dispositivo.'},
 {id:$('save-state').textContent.startsWith('No se')?'comun-guardado-error':$('save-state').textContent.includes('guardadas')?'comun-guardado':$('save-state').textContent.includes('solo')?'comun-guardado-sesion':'comun-guardado-inicial',label:'Estado del guardado',text:$('save-state').textContent},
 {id:'comun-reproductor',label:'Controles del video',text:'Reproducir inicia las señas. Pausar detiene el video. Repetir lo inicia de nuevo. Ampliar muestra un panel grande. Cerrar vuelve a la actividad.'},
 {id:'comun-recursos',label:'Video no disponible',text:'El video todavía no está disponible. Puedes consultar el texto y pedir apoyo.'}];
 if(feedback)contexts.push({id:prefix+'-'+feedbackType,label:'Resultado actual',text:feedback});
 if(current==='teacher')contexts.push({id:'docente-'+teacherState,label:'Estado actual del reporte',text:reportTexts[teacherState]});
 if(current==='reward')contexts.push({id:prefix+'-recompensa',label:'Nombre de la recompensa',text:s.title});
 $('sign-context').innerHTML=contexts.map(c=>`<option value="${c.id}">${esc(c.label)}</option>`).join('');
 setSign(contexts[0].id,false);
}
function clipMarkup(c){const item=SIGN_CLIPS[c.id];const ready=GuardianCore.approvedClip(item);
 return `<div class="sign-stage">${ready?`<video controls playsinline preload="metadata" aria-label="${esc(c.label)} en LSEC" src="${esc(item.src)}"></video>`:frame+'<p>Aquí aparecerá el video<br>en LSEC</p>'}</div><p class="clip-status">${ready?'Video validado · LSEC':'Pendiente de grabación y validación'}</p><div class="clip-controls"><button class="clip-play" ${ready?'':'disabled'}>▶ Reproducir</button><button class="clip-pause" ${ready?'':'disabled'}>❚❚ Pausar</button><button class="clip-repeat" ${ready?'':'disabled'}>↺ Repetir</button></div><div class="transcript"><strong>Texto de referencia</strong><br>${esc(c.text)}</div>`;
}
function bindClip(container){const video=container.querySelector('video');if(!video)return;
 const play=()=>{stopAudio();document.querySelectorAll('video').forEach(v=>{if(v!==video)v.pause();});video.play().catch(()=>announce('No se pudo reproducir este video.'));};
 container.querySelector('.clip-play').onclick=play;container.querySelector('.clip-pause').onclick=()=>video.pause();container.querySelector('.clip-repeat').onclick=()=>{video.currentTime=0;play();};
 video.addEventListener('play',()=>{stopAudio();document.querySelectorAll('video').forEach(v=>{if(v!==video)v.pause();});});
 video.addEventListener('error',()=>{container.querySelector('.clip-status').textContent='No se pudo cargar el video. El texto sigue disponible.';container.querySelectorAll('.clip-controls button').forEach(b=>b.disabled=true);});
}
function setSign(id,expand){document.querySelectorAll('video').forEach(v=>v.pause());const c=contexts.find(x=>x.id===id)||contexts[0];signId=c.id;$('sign-context').value=c.id;$('sign-content').innerHTML=clipMarkup(c);bindClip($('sign-content'));if(expand){$('expanded-sign').innerHTML=`<h3>${esc(c.label)}</h3>`+clipMarkup(c);bindClip($('expanded-sign'));stopAudio();openDialog('sign-dialog');}}
function openDialog(id){returnFocus=document.activeElement;$(id).showModal();$(id).querySelector('button,select,input')?.focus();}
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('close',()=>{d.querySelectorAll('video').forEach(v=>v.pause());if(returnFocus?.isConnected)returnFocus.focus();}));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>$(b.dataset.close).close()));
$('screen-picker').addEventListener('change',e=>showScreen(e.target.value));
$('sign-context').addEventListener('change',e=>setSign(e.target.value,false));$('sign-expand').addEventListener('click',()=>setSign(signId,true));
$('help-sign').addEventListener('click',()=>{$('help-dialog').close();setSign('n3-e'+SCENES[current].scene+'-ayuda',true);returnFocus=$('help');});
$('settings').addEventListener('click',()=>{stopAudio();openDialog('settings-dialog');});
$('settings-sign').addEventListener('click',()=>{$('settings-dialog').close();setSign('comun-ajustes',true);returnFocus=$('settings');});
function savePrefs(){document.body.classList.toggle('large',$('large-text').checked);document.body.classList.toggle('reduced',$('reduce-motion').checked);try{localStorage.setItem('guardianes-ms2-design-prefs',JSON.stringify({large:$('large-text').checked,reduced:$('reduce-motion').checked}));$('save-state').textContent='Preferencias guardadas en este dispositivo';}catch{$('save-state').textContent='No se pudieron guardar los ajustes. Se mantienen durante esta sesión.';}buildContexts();}
try{const p=JSON.parse(localStorage.getItem('guardianes-ms2-design-prefs')||'{}');$('large-text').checked=p.large===true;$('reduce-motion').checked=p.reduced===true;document.body.classList.toggle('large',p.large===true);document.body.classList.toggle('reduced',p.reduced===true);}catch{$('save-state').textContent='Preferencias disponibles solo durante esta sesión';}
$('large-text').addEventListener('change',savePrefs);$('reduce-motion').addEventListener('change',savePrefs);
document.addEventListener('visibilitychange',()=>{if(document.hidden){stopAudio();document.querySelectorAll('video').forEach(v=>v.pause());}});
showScreen('welcome',false);
