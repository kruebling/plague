export class Population {
  constructor(population, alive, infected, dead) {
    this.population = 7574652620;
    this.alive = alive;
    this.infected = 1;
    this.dead = dead;
    this.spread = 1;
  }

  gameOver() {
    if (this.population <= 0){
      clearInterval();
      return true;
      }
    return false;
  }

  setGrowth() {
    setInterval(() => {
      this.setSpread();
      this.setDead();
      this.population = parseInt((this.population * 1.00000000031288564) - this.dead);
    }, 1000);
  }

  setSpread() {
    this.infected = Math.floor(((this.infected * this.spread) + 1));
  }

  setDead() {
    this.dead = Math.ceil(this.infected * 0.8);
  }

  setSpreadUp() {
    this.spread = parseFloat(this.spread + 0.1);
  }

  setSpreadDown() {
    this.spread = (this.spread - (0.1)).toFixed(2);
  }
}
