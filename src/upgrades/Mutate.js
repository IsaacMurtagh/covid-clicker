export default class Mutate {
  constructor() {
    this.type = 'upgrade';
  }

  static get multiplier() {
    return 2;
  }

  static get image() {
    return 'mutate-virus.png';
  }

  static get label() {
    return 'Mutate Virus';
  }

  static get cost() {
    return 900000;
  }

  get cost() {
    return Mutate.cost;
  }

  get multiplier() {
    return Mutate.multiplier;
  }
}