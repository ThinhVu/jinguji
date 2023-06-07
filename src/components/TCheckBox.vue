<template>
  <div class="t-checkbox clickable h-32px fr ai-c">
    <input type="checkbox" :checked="v" @input="updateV" class="mr-1 clickale">
    <span @click="updateV()" style="user-select: none">{{label}}</span>
  </div>
</template>
<script setup>
import {ref, watch} from 'vue';

const props = defineProps({
  modelValue: Boolean,
  label: String
})
const emit = defineEmits(['update:modelValue'])
const v = ref(props.modelValue)
watch(() => props.modelValue, newV => v.value = newV)

const updateV = e => {
  let val;
  if (e) {
    e.stopPropagation()
    val = e.target.checked;
  } else {
    val = !v.value
  }
  v.value = val
  emit('update:modelValue', val)
}
</script>
