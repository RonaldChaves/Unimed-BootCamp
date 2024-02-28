using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DOTNET__POO.src.Entities;

namespace DOTNET__POO
{
    public class Program
    {
        static void Main(string[] args)
        {
            Knight arus = new Knight("Arus", 43, "knight", 30, 400);
            Wizard jenica = new Wizard("jenica", 45, "Wizard", 25, 350);
            Ninja wedre = new Ninja("Wedre", 42, "Ninja", 29, 380);
            Wizard tepapa = new Wizard("Tepapa", 46, "Wizard", 32, 420);

            Console.WriteLine(arus);
            Console.WriteLine(jenica);
            Console.WriteLine(wedre);
            Console.WriteLine(tepapa);
        }
    }
}