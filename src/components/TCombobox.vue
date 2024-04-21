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