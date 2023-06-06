<template>
  <div class="text">
    <div class="mb-2 fw-6 c:#1F2328">{{label}}</div>
    <textarea
        v-if="multiLine"
        :value="v" @input="updateV"
        :placeholder="placeholder"
        style="border: none; resize: none; outline: none; background: transparent"
        :cols="cols" :rows="rows" class="text-input"/>
    <input
        v-else
        :value="v"
        @input="updateV"
        :placeholder="placeholder"
        style="outline: none; height: 32px;" class="text-input br-1">
  </div>
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
  label: String,
  placeholder: String,
  debounceMs: Number,
  multiLine: Boolean,
  cols: [Number, String],
  rows: [Number, String],
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
.text-input {
  padding: 8px;
  border: 1px solid #d0d7de;
  box-shadow: inset 0 1px 0 rgba(208,215,222,0.2);
  width: 100%;
}
</style>
