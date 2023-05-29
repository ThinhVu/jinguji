<template>
  <div>
    <h3>Layout example</h3>
    <p>1. Layout with directive v-if</p>
    <layout fr ai-c fg-10px mb-2 v-if="show">
      Hide
    </layout>

    <p>2. Layout with directive v-for</p>
    <layout v-for="i in [1,2]" :key="i">
      Item {{i}}
    </layout>

    <p>3. Layout with event handle</p>
    <layout fr ai-c fg-10px mb-2 @click="clickMe">
      <button @click="clickMe(1)">1</button>
      <button @click="clickMe(2)">2</button>
      <icon>fas fa-times@20:red</icon>
    </layout>

    <Abc @click="clickMe('abc')"></Abc>
    <!-- region hide -->
    <p>4. Layout flex column</p>
    <layout fc ai-c fg-10px mb-2>
      <button>1</button>
      <button>2</button>
      <icon>fas fa-times@20:red</icon>
    </layout>

    <p>5. Layout grid</p>
    <layout grid gtc-1fr-2fr-50px ai-c fg-10px mb-2>
      <button>1</button>
      <button>2</button>
      <icon>fas fa-times@20:red</icon>
    </layout>
    <!-- endregion -->
  </div>
</template>
<script setup lang="jsx">
const Abc = {
  setup() {
    return () => <layout>ABC</layout>
  }
}

import {ref} from 'vue'
const show = ref(false)
const clickMe = (x) => console.log('click hit', x)

const fn = () => console.log('hey there')


</script>
