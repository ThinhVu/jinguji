<template>
  <span>{{readableMs(value)}}</span>
</template>

<script setup>
const props = defineProps({value: [Number, String]})
function readableMs(ms) {
  let remain = ms;
  const days = Math.floor(ms / 86400000);
  remain = remain - days * 86400000;
  const hours = Math.floor(remain / 3600000)
  remain = remain - hours * 3600000
  const minutes = Math.floor( remain / 60000)
  remain = remain - minutes * 60000
  const seconds = Math.floor(remain / 1000)
  return (days ? `${days}d` : '') + (hours ? `${hours}h` : '') + (minutes ? `${minutes}m` : '') + (seconds ? `${seconds}s` : '')
}
</script>
