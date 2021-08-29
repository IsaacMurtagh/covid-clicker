export default class AntiMasker {
  constructor() {
    this.type = 'generator';
  }

  static get spread() {
    return 1;
  }

  static get image() {
    return 'anti-mask.png';
  }

  static get label() {
    return 'Anti Masker';
  }

  static get cost() {
    return 50;
  }

  get cost() {
    return AntiMasker.cost;
  }

  get spread() {
    return AntiMasker.spread;
  }
}