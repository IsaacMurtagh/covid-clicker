import upgrades from './upgrades';

export default class World {

  constructor() {
    this.cases = 1000;
    this.totalCases = 1000;
    this.cured = 0;
    this.totalCured = 0;
    this.day = 0;
    this.clickValue = 1;
    this.r0 = 0.1;
    this.paused = false;
    this.upgrades = upgrades.map(Upgrade => new Upgrade(this));
  }

  cureCases() {
    const amount = Math.min(this.clickValue, this.cases);
    this.cured += amount;
    this.totalCured += amount;
    this.cases -= amount;
  }

  addCases(amount) {
    this.cases += amount;
    this.totalCases += amount;
  }

  addCures(amount) {
    this.cured += amount;
    this.totalCured += amount;
  }

  spread() {
    const r0 = this.paused ? 0 : this.r0;
    const newCases = Math.floor(this.cases * r0);
    this.addCases(newCases);
    this.day++;
    return newCases;
  }

  consumeEvent(event) {
    this.r0 += event.r0;
    this.addCures(event.cured);
    this.addCases(event.cases);
  }
}