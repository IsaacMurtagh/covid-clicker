<template>
  <span 
    v-for="i in (new Array(numIcons))"
    :key="`${i}`"
    class="absolute z-10 pointer-event-none animate__animated animate__slow animate__fadeOutUp"
    :style="`top: ${offsetPos(config.yPos)}px; left: ${offsetPos(config.xPos)}px;`"
  >
    <img 
      class="h-8 w-8 select-none"
      src="../assets/covid.png"
    />
  </span>
</template>
<script>
export default {
  props: {
    config: { type: Object, required: true }
  },

  computed: {

    numIcons() {
      return Math.min(6, this.config.score);
    }
  },

  methods: {
    offsetPos(pos) {
      const score = this.numIcons;
      const offset = Number((Math.random() * score * 4 - (score * 2)).toFixed());
      return pos + offset;
    }
  }
}
</script>