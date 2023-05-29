<template>
  <input :value="v" :placeholder="placeholder" @input="updateV" style="outline: none">
</template>

<script setup>
import _ from 'lodash';
import {ref, computed, watch} from 'vue';

const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  debounceMs: Number
})
const emit = defineEmits(['update:modelValue'])

const v = ref(props.modelValue)
watch(() => props.modelValue, newV => v.value = newV)

const emitModelValue = computed(() => _.debounce(v => emit('update:modelValue', v), props.debounceMs || 0))

const updateV = e => {
  const val = e.target.value;
  v.value = val
  emitModelValue.value(val)
}
</script>

<style scoped>
input {
  height: 30px;
  padding: 0.5em;
}
</style>
