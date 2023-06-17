<template>
  <span class="clickable">
    <t-icon v-for="i in range(1, max + 1)"
          style="margin-left: 5px"
          :color="i <= iV ? '#fab23d': 'gray'"
          @click="updateV(i)">fa fa-star@20</t-icon>
  </span>
</template>
<script setup>
import {range} from 'lodash-es';
import {ref, watch} from 'vue';
import TIcon from './TIcon.vue';

const props = defineProps({
  max: {
    type: Number,
    default: 5
  },
  modelValue: Number
})

const emit = defineEmits(['update:modelValue'])
const iV = ref(props.modelValue)
watch(() => props.modelValue, v => iV.value = v)

function updateV(v) {
  iV.value = v
  emit('update:modelValue', v)
}
</script>
