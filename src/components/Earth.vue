<template>
  <div class="relative">
    <div
      id="earth"
      ref="earth"
      class="pointer-events-none"
    >
      <img
        class="h-full w-full select-none"
        src="../assets/earth.png"
      />
    </div>
    <div
      @click="handleClick"
      class="absolute top-0 cursor-pointer rounded-full z-20 h-full w-full"
    />
  </div>
</template>
<script>

export default {

  methods: {
    handleClick(event) {
      window.earth = this.$refs.earth;
      this.$emit('earth-click', event);
    }
  }
}
</script>