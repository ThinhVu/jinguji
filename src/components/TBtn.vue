<template>
  <button :class="btnClasses"><slot/></button>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
  disable: Boolean,
  save: Boolean,
  edit: Boolean,
  delete: Boolean,
  primary: Boolean,
  secondary: Boolean,
  tertiary: Boolean,

})

const btnClasses = computed(() => ({
  disable: props.disable,
  save: props.save,
  edit: props.edit,
  delete: props.delete,
  primary: props.primary,
  secondary: props.secondary,
  tertiary: props.tertiary
}))
</script>

<style scoped>
button {
  height: 32px;
  color: #24292f;
  background-color: #f6f8fa;
  box-shadow: 0 1px 0 rgba(31,35,40,0.04), inset 0 1px 0 rgba(255,255,255,0.25);
  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color,background-color,box-shadow,border-color;

  position: relative;
  display: inline-block;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid #1f232826;
  border-radius: 6px;
  appearance: none;
}

button:hover {
  filter: brightness(90%)
}

.save {
  background-color: #25be1a;
  color: #fff;
}

.edit {
  background-color: #f8ab22;
  color: #fff;
}

.delete {
  background-color: #f8223b;
  color: #fff;
}

.primary {
  background-color: #2196f3;
  color: #fff;
}

.secondary {
  background-color: #f6f8fa;
  color: #24292f;
}

.tertiary {
  background-color: #e0e0e0;
  color: #24292f;
  border: none;
}
</style>
