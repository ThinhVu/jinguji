<template>
  <button :class="btnClasses"><slot/></button>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({disable: Boolean})

const btnClasses = computed(() => ({disable: props.disable}))
</script>

<style scoped>
button {
  color: #24292f;
  background-color: #f6f8fa;
  box-shadow: 0 1px 0 rgba(31,35,40,0.04), inset 0 1px 0 rgba(255,255,255,0.25);
  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color,background-color,box-shadow,border-color;

  position: relative;
  display: inline-block;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid #1f232826;
  border-radius: 6px;
  appearance: none;
}

button:hover {
  background-color: #f3f4f6;
}
</style>
