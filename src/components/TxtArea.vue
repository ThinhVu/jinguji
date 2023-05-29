<template>
  <textarea
      :value="v" @input="updateV"
      :placeholder="placeholder"
      style="border: none; resize: none; outline: none; background: transparent"
      :cols="cols" :rows="rows"/>
</template>

<script setup>
import _ from 'lodash';
import {ref, computed, watch} from 'vue';

const props = defineProps({
  modelValue: String,
  type: String,
  cols: Number,
  rows: Number,
  placeholder: String,
  debounceMs: Number
})
const emit = defineEmits(['update:modelValue'])
const emitModelValue = computed(() => _.debounce(v => emit('update:modelValue', v), props.debounceMs || 0))

const v = ref(props.modelValue)
watch(() => props.modelValue, newV => v.value = newV)

const updateV = e => {
  const val = e.target.value;
  v.value = val
  emitModelValue.value(val)
}
</script>

<style scoped>
input {padding: 0.5em;}
</style>
