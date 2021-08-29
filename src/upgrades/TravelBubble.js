export default class Mutate {
  constructor() {
    this.type = 'upgrade';
  }

  static get multiplier() {
    return 0.1;
  }

  static get image() {
    return 'travel.png';
  }

  static get label() {
    return 'Travel Bubble';
  }

  static get cost() {
    return 21000;
  }

  get cost() {
    return Mutate.cost;
  }

  get multiplier() {
    return Mutate.multiplier;
  }
}