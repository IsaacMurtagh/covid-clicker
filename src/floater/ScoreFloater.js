import { shallowRef } from 'vue';
import ScoreFloat from './ScoreFloat.vue';

export default class ScoreFloater {
  constructor(props) {
    this.component = shallowRef(ScoreFloat);
    this.xPos = props.xPos;
    this.yPos = props.yPos;
    this.content = props.content;
  }

  static fromEvent({ event, score }) {
    return new ScoreFloater({
      content: `+${score}`,
      xPos: event.x - 20,
      yPos: event.y - 20,
    })
  }

  get config() {
    return {
      xPos: this.xPos,
      yPos: this.yPos,
      content: this.content,
    }
  }
}