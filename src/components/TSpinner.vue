<template>
  <div class="spinner" :style="styles"></div>
</template>
<script setup>
import {computed} from 'vue';

const props = defineProps({
  color: String,
  size: [String, Number],
  thickness: String
})

const styles = computed(() => ({
  'border-top-color': props.color || '#0058e6',
  'border-right-color': props.color || '#0058e6',
  'width': props.size || '20px',
  'height': props.size || '20px',
  'border-width': props.thickness || '3px'
}))
</script>
<style scoped>
.spinner {
  display: inline-block;
  border-style: solid;
  border-radius: 50%;
  border-bottom-color: transparent;
  border-left-color: transparent;
  animation: 0.45s animation-spin linear infinite;
}

@keyframes animation-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
