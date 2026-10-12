using System;
using Guardianes.Interfaces;
class Program {
 static void Check(bool condition,string message) { if(!condition)throw new Exception(message); Console.WriteLine("PASS: "+message); }
 static void Main() {
  var single=new SelectionModel(new[]{"water","bottle","leaf"},new[]{"bottle"},false);
  Check(single.Confirm()==SelectionModel.Result.Empty,"Sin selección no confirma");
  single.Select("water");Check(single.Confirm()==SelectionModel.Result.Retry,"Respuesta incorrecta permite reintentar");
  single.Select("bottle");Check(single.Confirm()==SelectionModel.Result.Correct,"Selección simple correcta");
  Check(!single.Select("leaf")&&single.Confirm()==SelectionModel.Result.AlreadyConfirmed,"Bloquea duplicados después del acierto");
  var multi=new SelectionModel(new[]{"a","b","c"},new[]{"a","b"},true);
  multi.Select("a");Check(multi.Confirm()==SelectionModel.Result.Retry,"Conjunto incompleto no pasa");
  multi.Select("b");multi.Select("c");Check(multi.Confirm()==SelectionModel.Result.Retry,"Distractor adicional no pasa");
  multi.Select("c");Check(multi.Confirm()==SelectionModel.Result.Correct,"Desmarcado y conjunto exacto");
 }
}
