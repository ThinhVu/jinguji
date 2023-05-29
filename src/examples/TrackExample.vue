<template>
  <div>
    <p>Track example</p>
    <div class="fr ai-c fg-10px">
      <btn v-track.click.mouuseleave.mouseenter="'btn1'" @click="clickMe(1)">
        Click me 1
      </btn>
      <btn v-track.click="'btn2'" @click="clickMe(2)">
        Click me 2
      </btn>
      <btn @click="replay">
        Replay
      </btn>
    </div>
    <txt-area cols="50" rows="50" v-model="text"/>
  </div>
</template>
<script setup>
import {ref} from 'vue';

const text = ref('')
/*replay bug*/
const clickMe = (num) => text.value += `btn got hit ${num}\n`
const replay = () => window.__dev.replay()
</script>
