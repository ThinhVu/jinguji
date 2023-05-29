<template>
  <span class="clickable">
    <icon v-for="i in _.range(1, max + 1)"
          style="margin-left: 5px"
          :color="i <= modelValue ? '#fab23d': 'gray'"
          @click="$emit('update:modelValue', i)">fa fa-star@20</icon>
  </span>
</template>
<script setup>
import _ from 'lodash';
import Icon from './Icon.vue';

const props = defineProps({
  max: {
    type: Number,
    default: 5
  },
  modelValue: Number
})
const emit = defineEmits(['update:modelValue'])
</script>
