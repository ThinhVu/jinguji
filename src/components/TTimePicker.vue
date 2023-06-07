<template>
  <div class="t-time-picker">
    <div v-if="label" class="mb-2 fw-6 c:#1F2328" style="user-select: none">{{ label }}</div>
    <input
        :value="v"
        type="time"
        @input="updateV"
        :placeholder="placeholder"
        style="outline: none; height: 32px; user-select: none;" class="t-time-picker-input br-1">
  </div>
</template>
<script setup>
import {ref, watch} from 'vue';

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
})
const emit = defineEmits(['update:modelValue'])

const v = ref(props.modelValue)
watch(() => props.modelValue, newV => v.value = newV)

const updateV = e => {
  const val = e.target.value;
  v.value = val
  emit('update:modelValue', val)
}
</script>

<style scoped>
.t-time-picker-input {
  padding: 8px;
  border: 1px solid #d0d7de;
  box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
}
</style>

