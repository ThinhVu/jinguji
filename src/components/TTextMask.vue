<template>
  <div class="t-text-mask rel">
    <input type="text" v-mask="config" :value="display" @input="onInput" :placeholder="placeholder"
           style="outline: none; height: 32px; user-select: none;" class="t-text-input single-line br-1"/>
    <div v-if="display && !label" class="abs bc:#fff c:#888" style="top: -0.7em; left: 4px; padding-left: 4px; padding-right: 4px; font-size: small">
      {{placeholder}}
    </div>
  </div>
</template>

<script setup>
import {ref, watch, computed} from 'vue';
import vMask from '../directives/mask'
import tokens from '../composables/tokens'
import masker from '../composables/masker'

// credit: https://github.com/vuejs-tips/vue-the-mask/
const props = defineProps({
  modelValue: [String, Number],
  label: String,
  placeholder: String,
  mask: {
    type: [String, Array],
    required: true
  },
  masked: { // by default emits the value unformatted, change to true to format with the mask
    type: Boolean,
    default: false // raw
  },
  tokens: {
    type: Object,
    default: () => tokens
  }
})
const emit = defineEmits(['update:modelValue'])

const lastValue = ref('')
const display = ref(props.modelValue)
watch(() => props.modelValue, newValue => {
  if (newValue !== lastValue.value) {
    display.value = newValue
  }
})
watch(() => props.masked, () => {
  refresh(display.value)
})
const config = computed(() => {
  return {
    mask: props.mask,
    tokens: props.tokens,
    masked: props.masked
  }
})
function onInput(e) {
  if (e.isTrusted) return // ignore native event
  refresh(e.target.value)
}
function refresh (value) {
  display.value = value
  const nextValue = masker(value, props.mask, props.masked, props.tokens)
  if (nextValue !== lastValue.value) {
    lastValue.value = nextValue
    emit('update:modelValue', nextValue)
  }
}
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
