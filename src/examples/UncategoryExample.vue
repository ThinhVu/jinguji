<template>
  <icon>fas fa-times@40:#000</icon>
  <emojis/>
  <imgx src="https://picsum.photos/200/300" style="width: 200px; height: 300px"></imgx>
  <pulse-block class="w-50 h-50px"></pulse-block>
  <rating/>
  <time-format/>
  <time-span :value="times"/>
  <br/>
  <readable-ms :value="98031232"/>
</template>
<script setup>
import dayjs from 'dayjs'
import TimeSpan from '../components/TimeSpan.vue';
import ReadableTime from '../components/ReadableMs.vue';
import ReadableMs from '../components/ReadableMs.vue';

const times = dayjs().subtract(80, 'minute').toDate()
</script>
