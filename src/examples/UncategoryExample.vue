<template>
  <t-icon>fas fa-times@40:#000</t-icon>
  <t-emojis/>
  <t-img src="https://picsum.photos/200/300" style="width: 200px; height: 300px"/>
  <t-pulse-block class="h-30px"></t-pulse-block>
  <div class="fr ai-c fg-10px">
    <t-rating/>
    <t-time-format/>
    <t-time-span :value="times" :interval="1000"/>
    <t-readable-ms :value="998031232"/>
    <t-spinner/>
  </div>
  <t-progress :value="50"/>
</template>
<script setup>
import dayjs from 'dayjs'
import {onMounted} from 'vue';
import TProgress from '../components/TProgress.vue';

const times = dayjs().subtract(80, 'minute').toDate()


onMounted(() => {

})
</script>
