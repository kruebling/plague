export class Population {
  constructor(population, alive, infected, dead) {
    this.population = 7574652620;
    this.alive = alive;
    this.infected = 1;
    this.dead = dead;
  }

  gameOver() {
    if (this.population === 0){
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
    this.infected = Math.ceil(((this.infected * 1.4) + 1));
  }

  setDead() {
    this.dead = this.infected * 0.8;
  }
}
