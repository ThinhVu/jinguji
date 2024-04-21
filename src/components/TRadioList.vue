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
import {v4} from 'uuid'
import useSelectable from "../composables/selectable";

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

const {v, optionsVM} = useSelectable(props)
</script>