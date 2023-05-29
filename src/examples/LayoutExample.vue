<template>
  <div>

    <p>fr ai-c fg-10px mb-2</p>
    <div class="fr ai-c fg-10px mb-2" @click="clickMe">
      <btn @click="clickMe(1)">1</btn>
      <btn @click="clickMe(2)">2</btn>
      <icon>fas fa-times@20:red</icon>
    </div>

    <!-- region hide -->
    <p>fc ai-c fg-10px mb-2</p>
    <div class="fc ai-c fg-10px mb-2">
      <btn>1</btn>
      <btn>2</btn>
      <icon>fas fa-times@20:red</icon>
    </div>

    <p>grid gtc-1fr-2fr-50px ai-c fg-10px mb-2</p>
    <div class="grid gtc-100px-3fr-1fr-50px ai-c fg-10px mb-2">
      <btn>1</btn>
      <btn>2</btn>
      <btn>3</btn>
      <icon>fas fa-times@20:red</icon>
    </div>
    <!-- endregion -->
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
