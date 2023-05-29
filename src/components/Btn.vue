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
  background: #1f252f;
  color: #eee;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 0.5em 1em;
  box-shadow: 2px 2px 4px 0 rgba(0,0,0,.4);
}
</style>
