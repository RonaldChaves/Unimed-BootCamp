using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExemploPOO.Models;

namespace ExemploPOO 
{
    public class Program
    {
        
        static void Main(string[] args)
        {

            Aluno p1 = new Aluno();
            p1.Nome = "Bob";
            p1.Idade = 20;
            p1.Nota = 15;
            p1.Apresentar();

            Professor p2 = new Professor();
            p2.Nome = "Tiago";
            p2.Idade = 20;
            p2.Salario = 1500;
            p2.Apresentar();

            // Retangulo r = new Retangulo();
            // r.DefinirMedidas(30, 30);

            // Console.WriteLine($"Area: {r.ObterArea()}");

            // Pessoa p1 = new Pessoa();
            // p1.Nome = "Bob";
            // p1.Idade = 20;
            // p1.Apresentar();

        }
    }
}