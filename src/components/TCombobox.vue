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
  <div class="t-combobox rel">
    <div v-if="label" class="mb-1 fs-s c:#1F2328" style="user-select: none">{{label}}</div>
    <select class="w-100" @change="emit('update:modelValue', $event.target.value)">
      <option
        v-for="option in optionsVM"
        :key="option._v"
        :value="option._v"
        :selected="option._v === v">
        {{option._t}}
      </option>
    </select>
  </div>
</template>

<style scoped>
.t-combobox > select {
  height: 32px;
  border: 1px solid #d0d7de;
  box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
  border-radius: 4px;
}
</style>