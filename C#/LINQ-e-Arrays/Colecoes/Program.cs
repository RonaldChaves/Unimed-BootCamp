using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static System.Console;
using Colecoes.Helper;

namespace Colecoes
{
   public class Program
   {
      static void Main(string[] args)
      {

         int[] arrayNum = new int[7] {100, 1, 4, 0, 8, 15, 19 };

         var minimo = arrayNum.Min();
         var maximo = arrayNum.Max();
         var medio = arrayNum.Average();
         var soma = arrayNum.Sum();
         var distct = arrayNum.Distinct().ToArray();

         WriteLine(minimo);
         WriteLine(maximo);
         WriteLine(medio);
         WriteLine(soma);
         WriteLine(string.Join(",", distct));


         // int[] arrayNumeros = new int[5] {12, 24, 36, 47, 50};

         // var numerosParesQuery = 
         //    from num in arrayNumeros
         //    where num % 2 == 0
         //    orderby num
         //    select num;

         // var numerosParesMethod = arrayNumeros.Where(x => x % 2 == 0).OrderBy(x => x).ToList();

         // WriteLine("Números pares query: " + string.Join(",", numerosParesQuery));
         // WriteLine("Números pares metodo: " + string.Join(",", numerosParesMethod));

         // Dictionary<string, string> estados = new Dictionary<string, string>();

         // estados.Add("SP", "São Paulo");
         // estados.Add("MG", "Minas Gerais");
         // estados.Add("BA", "Bahia");

         // foreach (KeyValuePair<string, string> item in estados)
         // {
         //    WriteLine($"Chave: {item.Key} | Estado: {item.Value}");
         // }

         // string valorP = "BA";   

         // WriteLine($"Removendo o valor: {valorP}");

         // estados.Remove(valorP);

         // foreach (KeyValuePair<string, string> item in estados)
         // {
         //    WriteLine($"Chave: {item.Key} | Estado: {item.Value}");
         // }

         //Acessando um valor

         // string valorProcurado = "BA";

         // WriteLine(estados[valorProcurado]);

         // Stack<string> pilha = new Stack<string>();
         
         // pilha.Push("DDD");
         // pilha.Push(".NET");
         // pilha.Push("CSHARP");

         // WriteLine(pilha.Count);
         // while(pilha.Count > 0)
         // {
         //    WriteLine($"Próximo livro para a leitura: {pilha.Peek()}");
         //    WriteLine($"{pilha.Pop()} lido com sucesso.");
         // }
         
         // WriteLine(pilha.Count);

         // Queue<string> fila = new Queue<string>();

         // fila.Enqueue("Leo");
         // fila.Enqueue("Dudu");
         // fila.Enqueue("Dé");

         // WriteLine(fila.Count);

         // while (fila.Count > 0)
         // {
         //    WriteLine($"Vez de {fila.Peek()}.");
         //    WriteLine($"{fila.Dequeue()} atendido.");
         // }

         // WriteLine(fila.Count);

         // OperacaoLista opLista = new OperacaoLista();
         // List<string> estados = new List<string>() {"SP", "MG", "BA"};
         // string[] estadosArray = new string[2] {"SP", "MT"};

         // WriteLine($"Quantidade de elementos na lista: {estados.Count}");

         // opLista.ImprimirListaString(estados);

         // WriteLine();
         // // WriteLine("Removido o indice.");
         // // estados.Remove("MG");

         // estados.AddRange(estadosArray);

         // opLista.ImprimirListaString(estados);

         // OperacaoArray op = new OperacaoArray();

         // int[] array = new int[5] {6, 3, 8, 1, 9}; 


         // WriteLine("Array original");
         // op.ImprimirArray(array);

         // WriteLine("Array ordenado");
         // op.OrdenarBubbleSort(ref array);
         // op.ImprimirArray(array);

         // int[] arrayInteiros = new int[3];

         // arrayInteiros[0] = 12;
         // arrayInteiros[1] = 32;
         // arrayInteiros[2] = 43;

         // for (int i = 0; i < arrayInteiros.Length; i++)
         // {
         //    WriteLine(arrayInteiros[i]);
         // }

         // int[,] matriz = new int[4,2]
         // {
         //    {8, 8}, {10, 32}, {42, 54}, {12, 21}
         // };

         // for (int i = 0; i < matriz.GetLength(0); i++)
         // {
         //    for (int j = 0; j < matriz.GetLength(1); j++)
         //    {
         //       WriteLine(matriz[i,j]);
         //    }
         // }
      }
   }
}