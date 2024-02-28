using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DOTNET__POO.src.Entities
{
    public class Hero
    {
        public Hero(string name, int level, string heroType, int magicPower, int healthPower)
        {
            this.Name = name;
            this.Level = level;
            this.HeroType = heroType;
            this.MagicPower = magicPower;
            this.HealthPower = healthPower;
        }

        public string Name { get; set; }
        public int Level { get; set; }
        public string HeroType { get; set; }
        public int MagicPower { get; set; }
        public int HealthPower { get; set; }

        public override string ToString()
        {
            return @"Name: " + this.Name + "\n -Level: " + this.Level + "\n -Type: " + this.HeroType 
            + "\n -MP: " + this.MagicPower + "\n -HP: " + this.HealthPower;
        }

        public virtual string Attack()
        {
            return this.Name + "atacou com sua espada";
        }
    }
}