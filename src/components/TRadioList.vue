<template>
  <div class="t-radio">
    <div v-if="label" class="mb-2 fw-6 c:#1F2328" style="user-select: none">{{label}}</div>
    <div :class="[row ? 'fr fw-w' : 'fc', 'fg-8px']">
      <div v-for="option in optionsVM" :key="option._v"
           @click="emit('update:modelValue', option._v)"
           class="fr ai-c clickable">
        <input
            :name="name"
            :value="option._v"
            :checked="option._v === v"
            type="radio" class="clickable">
        <span class="ml-1 min-w-40px" style="user-select: none">
          {{ option._t }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import {watch, ref, computed} from 'vue'
import {v4} from 'uuid'

const props = defineProps({
  label: String,
  row: Boolean,
  options: Array,
  modelValue: [Object, Number, String],
  itemText: [String, Function],
  itemValue: [String, Function]
})
const emit = defineEmits(['update:modelValue'])

const name = v4()

const v = ref(props.modelValue)
watch(() => props.modelValue, newV => v.value = newV)

const isOnlyHasPrimitiveOption = computed(() => {
  for (const option of props.options) {
    if (typeof option === 'object') {
      return false
    }
  }
  return true
})
const getText = computed(() => {
  if (isOnlyHasPrimitiveOption.value)
    return option => option

  if (typeof props.itemText === 'function')
    return option => props.itemText(option)

  return option => option[props.itemText]
})
const getValue = computed(() => {
  if (isOnlyHasPrimitiveOption.value)
    return option => option

  if (typeof props.itemValue === 'function')
    return option => props.itemValue(option)

  return option => option[props.itemValue]
})
const optionsVM = computed(() => {
  const vms = []
  for (const option of props.options) {
    vms.push({
      _o: option,
      _t: getText.value(option),
      _v: getValue.value(option),
    })
  }
  return vms
})
</script>
<style scoped>
</style>
