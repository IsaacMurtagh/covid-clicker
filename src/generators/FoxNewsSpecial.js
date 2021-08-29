export default class FoxNewsSpecial {
  constructor() {
    this.type = 'generator';
  }

  static get spread() {
    return 2000;
  }

  static get image() {
    return 'news.png';
  }

  static get label() {
    return 'Fox News Special';
  }

  static get cost() {
    return 88000;
  }

  get cost() {
    return FoxNewsSpecial.cost;
  }

  get spread() {
    return FoxNewsSpecial.spread;
  }
}