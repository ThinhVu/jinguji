<template>
  <div class="t-password">
    <div class="mb-1 fs-s c:#1F2328" style="user-select: none">{{ label }}</div>
    <input
        :value="v"
        @input="updateV"
        type="password"
        :placeholder="pwdPlaceHolder"
        style="outline: none; height: 32px; user-select: none;" class="text-input br-1">
  </div>
</template>
<script setup>
import {debounce} from 'lodash-es';
import {ref, computed, watch} from 'vue';

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  debounceMs: Number,
})
const emit = defineEmits(['update:modelValue'])
const emitModelValue = computed(() => debounce(v => emit('update:modelValue', v), props.debounceMs || 0))
const plh = '************************************'
const pwdPlaceHolder = computed(() => plh.substr(0, props.placeholder ? props.placeholder.length: 0))

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
  box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
  width: 100%;
}
</style>
