<template>
  <div :class="attrsClasses">
    <slot/>
  </div>
</template>
<script setup>
import {computed, useAttrs} from 'vue'
import {IGNORE_EVENT_MAP} from './Layout.helper'
const attrs = useAttrs()
const attrsClasses = computed(() => {
  const classes = []
  const attrKeys = Object.keys(attrs)
  for (const attrKey of attrKeys) {
    if (IGNORE_EVENT_MAP[attrKey])
      continue
    classes.push(attrKey)
  }
  return classes
})
</script>
