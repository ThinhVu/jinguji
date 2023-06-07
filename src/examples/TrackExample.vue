<template>
  <div class="fc fg-4px">
    <p>Track example</p>
    <div class="fr ai-c fg-10px">
      <t-btn v-track.click.mouuseleave.mouseenter="'btn1'" @click="clickMe(1)">
        Click me 1
      </t-btn>
      <t-btn v-track.click="'btn2'" @click="clickMe(2)">
        Click me 2
      </t-btn>
      <t-btn @click="tracker.replay">
        Replay
      </t-btn>
    </div>
    <div class="grid gtc-1fr-1fr">
      <t-text multi-line cols="50" rows="20" v-model="text"/>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import {tracker} from '../directives/track';

const text = ref('')
const clickMe = (num) => text.value += `btn got hit ${num}\n`
</script>
