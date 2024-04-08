<template>
  <t-icon>fas fa-times@40:#000</t-icon>
  <t-emojis/>
  <t-img src="https://picsum.photos/200/300" style="width: 200px; height: 300px"/>
  <t-img src="https://picsum.photos21/200/300" style="width: 200px; height: 300px"/>
  <t-pulse-block class="h-30px"></t-pulse-block>
  <div class="fr ai-c fg-10px">
    <t-rating/>
    <t-time-format/>
    <t-time-span :value="times" :interval="1000"/>
    <t-readable-ms :value="998031232"/>
    <t-spinner/>
  </div>
  <t-progress :value="50"/>

  <t-label-mask mask="+1 (###) ###-####" model-value="2345678901"/>

</template>
<script setup>
import dayjs from 'dayjs'
import {onMounted, reactive} from 'vue';
import TProgress from '../components/TProgress.vue';
import TTable from '../components/TTable.vue';
import TLabelMask from '../components/TLabelMask.vue';
import TPagingToolbar from '../components/TPagingToolbar.vue';

const times = dayjs().subtract(80, 'minute').toDate()


onMounted(() => {

})
</script>
