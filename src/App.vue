<template>
  <floater :floats="floats" />
  <div class="flex flex-col-reverse md:flex-row min-h-screen">
    <div class="flex flex-col w-full md:max-w-lg lg:max-w-2xl">
      <div class="flex justify-center space-x-8">
      </div>
      <div class="flex justify-center p-4">
        <earth class="select-none" @earth-click="handleEarthClick" />
      </div>
      <shop class="flex-grow" :world="world" />
    </div>

    <div class="flex flex-col flex-grow bg-gray-700 text-white space-y-2">
      <div class="flex justify-center space-x-4">
        <div>
          Community Cases: {{ world.cases }}
        </div>
        <div>
          Cases Cured: {{ world.cured }}
        </div>
        <div>
          Day: {{ world.day }}
        </div>
      </div>
      <news :news="news" />
    </div>
  </div>
</template>
<script>
import Earth from './components/Earth';
import ScoreFloater from './floater/ScoreFloater';
import Floater from './floater/Floater';
import World from './World';
import Shop from './shop/Shop';
import News from './news/News';
import easyEvents from './event/easy';
const dayInSeconds = 3000;

export default {
  name: 'App',

  components: {
    Earth,
    Floater,
    Shop,
    News
  },

  data() {
    return {
      floats: [],
      world: null,
      news: [],
      increaseCases: 0,
      floatInterval: null,
      spreadInterval: null,
      eventInterval: null,
    }
  },

  created() {
    this.world = new World();
    this.floatInterval = window.setInterval(this.destroyFloats, 5000);
    this.spreadInterval = window.setInterval(this.spread, dayInSeconds);
    this.eventInterval = window.setInterval(this.newsEvent, dayInSeconds * 1);
  },

  methods: {
    handleEarthClick(event) {
      this.world.cureCases();
      this.floats.push(ScoreFloater.fromEvent({
        event,
        score: this.world.clickValue,
      }));
    },

    destroyFloats() {
      this.floats = [
        ...this.floats.slice(this.floats.length == 30 ? 0 : 30),
      ];
    },

    spread() {
      this.increaseCases = this.world.spread();
    },

    newsEvent() {
      if (this.world.day < 100) {
        this.addEvent(easyEvents);
      }
    },

    addEvent(events) {
      const event = events[Math.floor(Math.random() * events.length)];
      this.world.consumeEvent(event);
      this.news.push(event);
    }
  }
}
</script>