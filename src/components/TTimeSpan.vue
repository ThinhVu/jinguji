<template>
  <span>{{diff}}</span>
</template>

<script setup>
import dayjs from 'dayjs';
import {computed} from 'vue';
import useMoment from '../composables/useMoment';
const props = defineProps({
  value: [Date, String],
  interval: Number
})
const now = useMoment(props.interval || 60000 /*1 minute*/)
const diff = computed(() => timeDiff(props.value, dayjs(now.value)))

function timeDiff(start, end) {
  const diffs = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
  }
  for (const diffUnit of Object.keys(diffs)) {
    const diff = end.diff(start, diffUnit)
    if (diff > 0) {
      diffs[diffUnit] = diff
      end = end.subtract(diff, diffUnit)
    }
  }
  let diffStr = ''
  if (diffs.year > 0) diffStr += `${diffs.year}y`
  if (diffs.month > 0) diffStr += `${diffs.month}M`
  if (diffs.day > 0) diffStr += `${diffs.day}h`
  if (diffs.hour > 0) diffStr += `${diffs.hour}h`
  if (diffs.minute > 0) diffStr += `${diffs.minute < 10 ? `0${diffs.minute}` : diffs.minute }m`
  if (diffs.second > 0) diffStr += `${diffs.second < 10 ? `0${diffs.second}` : diffs.second }s`
  return diffStr
}
</script>
