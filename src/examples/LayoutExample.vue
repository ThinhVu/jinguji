<template>
  <div>
    <div class="fr ai-c fg-8px mb-2" @click="clickMe">
      <t-btn @click="clickMe(1)">1</t-btn>
      <t-btn @click="clickMe(2)">2</t-btn>
      <t-icon>fas fa-times@20:red</t-icon>
    </div>

    <div class="fc ai-c fg-10px mb-2">
      <t-btn>1</t-btn>
      <t-btn>2</t-btn>
      <t-icon>fas fa-times@20:red</t-icon>
    </div>

    <div class="grid gtc-100px-40px-1fr-1fr-50px ai-c fg-10px mb-2">
      <t-btn>1</t-btn>
      <t-btn>2</t-btn>
      <t-btn>3</t-btn>
      <t-btn>3</t-btn>
      <t-icon>fas fa-times@20:red</t-icon>
    </div>
  </div>
</template>
<script setup lang="jsx">
import {ref} from 'vue'
const show = ref(false)
const clickMe = (x) => console.log('click hit', x)
</script>

<style scoped>
* {
  outline: 1px solid red;
}
</style>
