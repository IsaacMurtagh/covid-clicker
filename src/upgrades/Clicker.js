export default class Clicker {
  constructor(world) {
    this.world = world;
    this.label = 'Cure Clicker'
    this.baseCost = 150;
    this.level = 0;
    this.image = require('@/assets/5g.png')
    this.description = 'Increase the amount of cases you cure with each click on the world!'
  }
  
  get cost() {
    if (this.level == 0) return this.baseCost;
    return Math.floor(this.baseCost * 2 ** this.level * ( 1 + this.level / 7));
  }

  get canPurchase() {
    return this.world.cured >= this.cost;
  }

  use() {
    this.world.clickValue = 2 ** this.level;
  }

  purchase() {
    if (!this.canPurchase) {
      return;
    }
    this.world.cured -= this.cost;
    this.level++;
    this.use(this.world);
  }
}