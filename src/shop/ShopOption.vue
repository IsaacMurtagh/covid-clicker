<template>
  <div class="shadow rounded-2xl bg-gray-100 p-4 flex items-center space-x-4">
      <img class="w-16" :src="item.image" />
    <div class="flex flex-col flex-grow">
      <div class="">{{ item.label }} (LVL: {{ item.level }})</div>
      <div class="text-gray-500 text-sm">
        {{ item.description}}
     </div>
    </div>
    <button 
      class="btn-primary"
      :disabled="!item.canPurchase"
      @click="item.purchase"
    >{{ item.cost }}</button>
  </div>
</template>
<script>
export default {
  props: {
    item: { type: Object, required: true },
  },
}
</script>