<template>
  <div class="t-progress br-1" :style="{height, width, backgroundColor: '#eee'}">
    <div class="br-1" :style="{width: `${value}%`, height: '100%', backgroundColor: color}"></div>
  </div>
</template>
<script setup>
const props = defineProps({
  height: {
    type: String,
    default: '8px'
  },
  width: {
    type: String,
    default: '100%'
  },
  value: Number,
  color: {
    type: String,
    default: '#2196f3'
  }
})
</script>
