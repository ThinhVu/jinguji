<template>
  <div class="t-text rel">
    <div v-if="label" class="mb-1 fs-s c:#1F2328" style="user-select: none">{{label}}</div>
    <textarea
        v-if="multiLine"
        :value="v"
        @input="updateV"
        @keydown="handleKeyDown"
        :placeholder="placeholder"
        style="outline: none; user-select: none;"
        :cols="cols" :rows="rows" class="t-text-input br-1"/>
    <input
        v-else
        :value="v"
        @input="updateV"
        @keydown="handleKeyDown"
        :placeholder="placeholder"
        style="outline: none; height: 32px; user-select: none;" class="t-text-input single-line br-1">
    <div v-if="v && !label" class="abs bc:#fff c:#888" style="top: -0.7em; left: 4px; padding-left: 4px; padding-right: 4px; font-size: small">
      {{placeholder}}
    </div>
  </div>
</template>

<script setup>
import {debounce} from 'lodash-es';
import {ref, computed, watch} from 'vue';

const props = defineProps({
  modelValue: [String, Boolean, Number],
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
const emit = defineEmits(['update:modelValue', 'enter'])
const emitModelValue = computed(() => debounce(v => emit('update:modelValue', v), props.debounceMs || 0))

const v = ref(props.modelValue)
watch(() => props.modelValue, newV => v.value = newV)

const updateV = e => {
  const val = e.target.value;
  v.value = val
  emitModelValue.value(val)
}

const ENTER_DEBOUNCE_MS = 300
const handleKeyDown = debounce((e) => {
  if (e.key === 'Enter') {
    emit('enter', v.value)
  }
}, ENTER_DEBOUNCE_MS)
</script>

<style scoped>
.t-text-input {
  padding: 8px;
  border: 1px solid #d0d7de;
  box-shadow: inset 0 1px 0 rgba(208,215,222,0.2);
}

.single-line {
  width: 100%;
}
</style>
