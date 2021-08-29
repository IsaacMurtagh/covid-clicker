export default class LockDownProtest {
  constructor() {
    this.type = 'generator';
  }

  static get image() {
    return 'protest.png';
  }

  static get spread() {
    return 10;
  }

  static get label() {
    return 'Lock Down Protest';
  }

  static get cost() {
    return 300;
  }

  get cost() {
    return LockDownProtest.cost;
  }

  get spread() {
    return LockDownProtest.spread;
  }
}