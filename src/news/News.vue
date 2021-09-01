<template>
  <div class="p-2 max-h-48 md:max-h-full overflow-auto">
    <span class="text-lg md:text-2xl"><b>News</b></span>
    <ul>
      <li
        v-for="(item, i) in news"
        :key="i"
        class="text-xs md:text-sm"
        :class="item.good ? 'text-green-300': 'text-red-300'"
      >
        {{ item.description }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    news: { type: Object, required: true }
  }
}
</script>