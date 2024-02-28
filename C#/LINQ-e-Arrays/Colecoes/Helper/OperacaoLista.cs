using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static System.Console;

namespace Colecoes.Helper
{
    public class OperacaoLista
    {
        public void ImprimirListaString(List<string> lista)
        {
            for (int i = 0; i < lista.Count; i++)
            {
                WriteLine($"Indice: {i} | Valor: {lista[i]}");
            }
        }
    }
}