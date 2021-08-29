<template>
  <span 
    class="absolute z-10 pointer-event-none animate__animated animate__slow animate__fadeOutUp"
    :style="`top: ${config.yPos}px; left: ${config.xPos}px;`"
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
}
</script>