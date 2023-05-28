<template>
  <div>
    <h3>Layout example</h3>
    <layout fr ai-c fg-10px mb-2 v-if="show">
      Hide
    </layout>

    <layout v-for="i in [1,2]" :key="i">
      {{i}}
    </layout>

    <layout fr ai-c fg-10px mb-2>
      <button>1</button>
      <button>2</button>
      <icon>fas fa-times@20:red</icon>
    </layout>

    <layout fc ai-c fg-10px mb-2>
      <button>1</button>
      <button>2</button>
      <icon>fas fa-times@20:red</icon>
    </layout>

    <layout grid gtc-1fr-2fr-50px ai-c fg-10px mb-2>
      <button>1</button>
      <button>2</button>
      <icon>fas fa-times@20:red</icon>
    </layout>
  </div>
</template>
<script setup>
import {ref} from 'vue'
const show = ref(false)
</script>
