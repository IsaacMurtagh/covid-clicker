<template>
  <div class="shadow rounded-2xl bg-gray-100 p-4 flex items-center space-x-4">
    <div class="">
      <img class="h-14 w-14" :src="getImgUrl(model.image)" />
    </div>
    <div class="flex-grow">
      <h3>{{ model.label }}</h3>
      <button 
        @click="$emit('purchase', new model())"
        class="btn-primary"
        :disabled="!canAfford"
      >Cost: {{ model.cost }}</button>
    </div>
    <div class="text-blue-700">
      x{{ model.multiplier }} more infectious
    </div>
  </div>
</template>
<script>
export default {
  props: {
    model: { type: Function, required: true },
    score: { type: Number, required: true}
  },

  computed: {
    canAfford() {
      return this.score >= this.model.cost;
    }
  },

  methods: {
    getImgUrl(image) {
      return require(`../assets/${image}`)
    }
  }
}
</script>