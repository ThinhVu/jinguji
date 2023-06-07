<template>
  <t-system>
    <div class="w-100vw h-100vh fc fg-6px px-2 py-2">
      <div class="fr ai-c fg-6px pb-2 fw-w"
           style="border-bottom: 5px solid red">
        <t-btn v-for="k in Object.keys(demos)" :key="k" @click="view = k">
          {{k}}
        </t-btn>
      </div>
      <div>
        <component :is="demos[view]"/>
      </div>
    </div>
  </t-system>
</template>

<script setup>
import {ref} from 'vue';
import DialogExample from './examples/DialogExample.vue';
import MsgBoxExample from './examples/MsgBoxExample.vue';
import NotificationExample from './examples/NotificationExample.vue';
import LoadingExample from './examples/LoadingExample.vue';
import LayoutExample from './examples/LayoutExample.vue';
import GuardExample from './examples/GuardExample.vue';
import TrackExample from './examples/TrackExample.vue';
import ButtonExample from './examples/ButtonExample.vue';
import CollapsibleSectionExample from './examples/CollapsibleSectionExample.vue';
import UncategoryExample from './examples/UncategoryExample.vue';
import TSystem from './components/TSystem.vue';

const demos = {
  DialogExample,
  MsgBoxExample,
  NotificationExample,
  LoadingExample,
  LayoutExample,
  GuardExample,
  TrackExample,
  ButtonExample,
  CollapsibleSectionExample,
  UncategoryExample
}

const view = ref(Object.keys(demos)[0])

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Sans-Serif;
}



select {
  height: 30px;
  min-width: 60px;
}

/*
Uno css failed to generate pseudo rule.
https://github.com/unocss/unocss/issues/2371
*/
.hide-scroll-bar::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari and Opera */
}
</style>
