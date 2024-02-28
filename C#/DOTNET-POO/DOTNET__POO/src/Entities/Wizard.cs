using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DOTNET__POO.src.Entities
{
    public class Wizard : Hero
    {
        public Wizard(string name, int level, string heroType, int magicPower, int healthPower) : 
        base(name, level, heroType, magicPower, healthPower)
        {
        }

        public override string Attack()
        {
            return this.Name + "lançou uma magia.";
        }

        public string Attack(int bonus)
        {
            if(bonus > 6)
                return this.Name + " lançou uma magia efetiva com bonus de " + bonus;
            else
                return this.Name + " lançou uma magia fraca com bonus de" + bonus;
        }
    }
}