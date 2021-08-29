<template>
  <div class="bg-gray-300">
    <div class="flex text-gray-900 text-2xl select-none">
      <div 
        class="flex-auto flex justify-center p-4 border-r"
        :class="{ 'border-b hover:bg-gray-300 bg-gray-200 cursor-pointer': !shopMode, }"
        @click="shopMode = true"
      >
        Shop
      </div>
      <div 
        class="flex-auto flex justify-center p-4"
        :class="{ 'border-b hover:bg-gray-300 bg-gray-200 cursor-pointer': shopMode, }"
        @click="shopMode = false"  
      >
        Upgrages
      </div>
    </div>
    <div 
      v-if="shopMode"
      class="px-2 py-4 space-y-2"
    >
      <generator-option
        v-for="(generator, i) in generators"
        :key="`generator-${i}`"
        :model="generator"
        :score="score"
        @purchase="(newGenerator) => $emit('purchase', newGenerator)"
      />
    </div>
    <div 
      v-else
      class="px-2 py-4 space-y-2"
    >
      <upgrade-option
        v-for="(upgrade, i) in upgrades"
        :key="`upgrade-${i}`"
        :model="upgrade"
        :score="score"
        @purchase="(newUpgrade) => $emit('purchase', newUpgrade)"
      />
    </div>
  </div>
</template>
<script>
import generators from '../generators';
import upgrades from '../upgrades';

import GeneratorOption from './GeneratorOption.vue';
import UpgradeOption from './UpgradeOption.vue';
export default {
  components: {
    UpgradeOption,
    GeneratorOption,
  },

  props: {
    score: { type: Number, required: true}
  },

  data() {
    return {
      generators,
      upgrades,
      shopMode: true
    }
  }
}
</script>