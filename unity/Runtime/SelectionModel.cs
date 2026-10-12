using System;
using System.Collections.Generic;

namespace Guardianes.Interfaces
{
    // Sin referencias Unity: permite probar las reglas con el runner del equipo.
    public sealed class SelectionModel
    {
        public enum Result { Empty, Retry, Correct, AlreadyConfirmed }
        private readonly HashSet<string> allowed;
        private readonly HashSet<string> correct;
        private readonly HashSet<string> selected = new HashSet<string>();
        private readonly bool multiple;
        public bool Confirmed { get; private set; }
        public IReadOnlyCollection<string> Selected => selected;

        public SelectionModel(IEnumerable<string> options, IEnumerable<string> answers, bool multiple)
        {
            allowed = new HashSet<string>(options);
            correct = new HashSet<string>(answers);
            if (correct.Count == 0 || !correct.IsSubsetOf(allowed) || (!multiple && correct.Count != 1))
                throw new ArgumentException("Las respuestas deben corresponder a las opciones de la escena.");
            this.multiple = multiple;
        }
        public bool Select(string id)
        {
            if (Confirmed || !allowed.Contains(id)) return false;
            if (!multiple) { selected.Clear(); selected.Add(id); }
            else if (!selected.Remove(id)) selected.Add(id);
            return true;
        }
        public Result Confirm()
        {
            if (Confirmed) return Result.AlreadyConfirmed;
            if (selected.Count == 0) return Result.Empty;
            if (!selected.SetEquals(correct)) return Result.Retry;
            Confirmed = true;
            return Result.Correct;
        }
    }
}
