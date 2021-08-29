<template>
  <component 
    v-for="(float, i) in floats"
    :key="`float-${i}`"
    :is="float.component"
    :config="float.config"
  />
</template>
<script>

export default {
  props: {
    floats: { type: Array, required: true},
  },
}
</script>
