export default class ToiletPaperOutage {
  constructor() {
    this.type = 'generator';
  }

  static get image() {
    return 'toilet-paper.png';
  }

  static get spread() {
    return 50;
  }

  static get label() {
    return 'TP Outage';
  }

  static get cost() {
    return 1100;
  }

  get cost() {
    return ToiletPaperOutage.cost;
  }

  get spread() {
    return ToiletPaperOutage.spread;
  }
}