<template>
  <div class="bg-gray-300 h-full overflow-auto">
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
    <div class="p-4 flex flex-col h-full flex-grow space-y-2">
      <shop-option 
        v-for="upgrade in world.upgrades"
        :key="upgrade.name"
        :item="upgrade"
        :world="world"
      />
    </div>
  </div>
</template>
<script>
import ShopOption from './ShopOption';
export default {
  components: {
    ShopOption
  },

  props: {
    world: { type: Object, required: true}
  },

  data() {
    return {
      shopMode: true
    }
  }
}
</script>