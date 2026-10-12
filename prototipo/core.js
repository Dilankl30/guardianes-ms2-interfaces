/* Modelo de interacción independiente de la presentación. */
(function(root,factory){const api=factory();if(typeof module==='object')module.exports=api;else root.GuardianCore=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  function select(current,id,multiple,locked=false){
    if(locked)return [...current];
    return multiple?(current.includes(id)?current.filter(x=>x!==id):[...current,id]):[id];
  }
  function validate(selected,correct,locked=false){
    if(locked)return 'locked';
    if(!selected.length)return 'empty';
    return selected.length===correct.length&&correct.every(x=>selected.includes(x))?'correct':'retry';
  }
  function approvedClip(item){return Boolean(item&&item.status==='validado'&&item.src&&/^assets\/lsec\/[a-z0-9-]+\.mp4$/.test(item.src));}
  return {select,validate,approvedClip};
});
