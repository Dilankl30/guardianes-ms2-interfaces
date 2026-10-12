const test=require('node:test');const assert=require('node:assert/strict');const c=require('../prototipo/core.js');
test('la selección simple reemplaza la anterior',()=>assert.deepEqual(c.select(['water'],'bottle',false),['bottle']));
test('la selección múltiple permite quitar una opción sin perder las otras',()=>assert.deepEqual(c.select(['collect','care'],'collect',true),['care']));
test('no acepta un conjunto incompleto o con distractores',()=>{assert.equal(c.validate(['collect'],['collect','care']),'retry');assert.equal(c.validate(['collect','care','throw'],['collect','care']),'retry');assert.equal(c.validate(['care','collect'],['collect','care']),'correct');});
test('sin respuesta no se confirma ni se evalúa como error pedagógico',()=>assert.equal(c.validate([],['bottle']),'empty'));
test('no permite modificar ni confirmar otra vez una respuesta validada',()=>{assert.deepEqual(c.select(['bottle'],'water',false,true),['bottle']);assert.equal(c.validate(['bottle'],['bottle'],true),'locked');});
test('un video pendiente o externo no se presenta como traducción validada',()=>{assert.equal(c.approvedClip({status:'pendiente',src:'assets/lsec/a.mp4'}),false);assert.equal(c.approvedClip({status:'validado',src:'https://example.com/a.mp4'}),false);assert.equal(c.approvedClip({status:'validado',src:'assets/lsec/a.mp4'}),true);});
