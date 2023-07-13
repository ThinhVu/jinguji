<template>
  <span>{{display}}</span>
</template>
<script setup>
import {computed} from 'vue';
import tokens from '../composables/tokens'
import masker from '../composables/masker'
const props = defineProps({
  modelValue: [String, Number],
  mask: {
    type: [String, Array],
    required: true
  },
  tokens: {
    type: Object,
    default: () => tokens
  }
})
const display = computed(() => masker(props.modelValue, props.mask, true, tokens))
</script>
