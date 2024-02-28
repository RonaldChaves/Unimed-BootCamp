using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static System.Console;

namespace myApp
{
   public class Program
   {
      static void Main(string[] args)
      {
         Aluno[] alunos = new Aluno[5];
         var indiceAluno = 0;
         string opcaoUsuario = ObterOpcaoUsuario();

         WriteLine("Informe a opção desejada:");
         WriteLine("1- Inserir novo aluno");
         WriteLine("2- Listar alunos");
         WriteLine("3- Calcular média geral");
         WriteLine("x- Sair");
         WriteLine();

         while (opcaoUsuario.ToUpper() != "X")
         {
            switch (opcaoUsuario)
            {
               case "1":
                  WriteLine("Informe o nome do aluno:");
                  Aluno aluno = new Aluno();
                  aluno.Nome = ReadLine();

                  WriteLine($"Informe a nota do {aluno.Nome} :");

                  if (decimal.TryParse(ReadLine(), out decimal nota))
                  {
                     aluno.Nota = Convert.ToInt32(nota);
                  }
                  else
                  {
                     throw new ArgumentException("Valor da nota deve ser decimal.");
                  }

                  alunos[indiceAluno] = aluno;
                  indiceAluno++;

                  break;
               case "2":
                  foreach (var a in alunos)
                  {
                     if (!string.IsNullOrEmpty(a.Nome))
                     {
                        WriteLine($"ALUNO : {a.Nome} - NOTA {a.Nota}");
                     }
                  }
                  break;
               case "3":
                  decimal notaTotal = 0;
                  var nrAlunos = 0;

                  for (int i = 0; i < alunos.Length; i++)
                  {
                     if (!string.IsNullOrEmpty(alunos[i].Nome))
                     {
                        notaTotal = notaTotal + alunos[i].Nota;
                        nrAlunos++;
                     }
                  }

                  var mediaGeral = notaTotal / nrAlunos;

                  Conceito conceitoGeral;

                  if (mediaGeral < 2)
                  {
                     conceitoGeral = Conceito.E;
                  }
                  else if (mediaGeral < 4)
                  {
                     conceitoGeral = Conceito.D;
                  }
                  else if (mediaGeral < 6)
                  {
                     conceitoGeral = Conceito.C;
                  }
                  else if (mediaGeral < 8)
                  {
                     conceitoGeral = Conceito.B;
                  }
                  else
                  {
                     conceitoGeral = Conceito.A;
                  }

                  WriteLine($"MÉDIA GERAL: {mediaGeral} -CONCEITO: {conceitoGeral}");

                  break;
               default:
                  throw new ArgumentOutOfRangeException();
            }

            opcaoUsuario = ObterOpcaoUsuario();
         }
      }

      private static string ObterOpcaoUsuario()
      {
         WriteLine();
         WriteLine("Informe a opção desejada:");
         WriteLine("1- Inserir novo aluno");
         WriteLine("2- Listar alunos");
         WriteLine("3- Calcular média geral");
         WriteLine("x- Sair");
         WriteLine();

         string opcaoUsuario = ReadLine();
         WriteLine();

         return opcaoUsuario;
      }
   }
}