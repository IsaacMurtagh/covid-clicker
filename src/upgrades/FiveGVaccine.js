export default class Mutate {
  constructor() {
    this.type = 'upgrade';
  }

  static get multiplier() {
    return 25;
  }

  static get image() {
    return '5g.png';
  }

  static get label() {
    return 'Vaccine contains 5G';
  }

  static get cost() {
    return 80081500;
  }

  get cost() {
    return Mutate.cost;
  }

  get multiplier() {
    return Mutate.multiplier;
  }
}