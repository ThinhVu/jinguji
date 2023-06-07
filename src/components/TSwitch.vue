<template>
  <div class="t-switch fr ai-c clickable">
    <span @click="toggle" :style="switchStyle">
      <div :style="thumbStyle" class="t-thumb"/>
    </span>
    <span class="ml-2" style="user-select: none" @click="toggle">{{label}}</span>
  </div>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({ label: String, modelValue: Boolean })
const emit = defineEmits(['update:modelValue'])
const toggle = () => emit('update:modelValue', !props.modelValue)

const switchStyle = computed(() => {
  const style = {
    width: '40px',
    height: '22px',
    borderRadius: '22px',
  }
  return props.modelValue ? {
    ...style,
    background: '#b0cfff',
  } : {
    ...style,
    background: '#878787',
  }
})
const thumbStyle = computed(() => {
  const style = {
    height: '18px',
    width: '18px',
    borderRadius: '18px',
    marginTop: '2px',
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
  }
  return props.modelValue ? {
    ...style,
    marginLeft: '19px',
    background: '#1271FF',
  } : {
    ...style,
    marginLeft: '2px',
    background: '#fff',
  }
})
</script>

<style scoped>
.t-thumb {
  transition:
    margin-left 0.25s ease-in-out,
    background 0.25s ease-in-out;
}
</style>
