using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DOTNET__POO.src.Entities
{
    public class Knight : Hero
    {
        public Knight(string name, int level, string heroType, int magicPower, int healthPower) : 
        base(name, level, heroType, magicPower, healthPower)
        {
        }
    }
}