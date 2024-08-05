<script setup>
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

const {v, optionsVM} = useSelectable(props)

</script>

<template>
  <div v-if="label" class="mb-1 fs-s c:#1F2328" style="user-select: none">{{label}}</div>
  <select @change="emit('update:modelValue', $event.target.value)">
    <option
      v-for="option in optionsVM"
      :key="option._v"
      :value="option._v"
      :selected="option._v === v">
      {{option._t}}
    </option>
  </select>
</template>

<style scoped>

</style>