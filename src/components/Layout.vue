<template>
  <div :class="attrsClasses">
    <slot></slot>
  </div>
</template>
<script setup>
import {computed, useAttrs} from 'vue'
const attrs = useAttrs()
const attrsClasses = computed(() => Object.keys(attrs));
</script>
