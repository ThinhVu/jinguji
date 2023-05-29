<template>
  <div class="fr ai-c fg-10px mt-3">
    <btn @click="showNotificationAutoCloseInAFewSeconds">Show notification auto close in few seconds</btn>
    <btn @click="showNotificationNeverClose">Show notification never close</btn>
    <btn @click="showNotificationSuccess">Show success</btn>
    <btn @click="showNotificationInfo">Show info</btn>
    <btn @click="showNotificationWarning">Show warning</btn>
    <btn @click="showNotificationError">Show error</btn>
  </div>
  <system/>
</template>
<script setup lang="jsx">
import notification from '../components/System/notification';

const showNotificationAutoCloseInAFewSeconds = () => notification.success('Oops! I\'ll disappear soon')
const showNotificationNeverClose = () => notification.success('Oops! I\'m immortal', {duration: 0})
const showNotificationSuccess = () => notification.success('lorem ispum')
const showNotificationInfo = () => notification.info('lorem ispum')
const showNotificationWarning = () => notification.warn('lorem ispum')
const showNotificationError = () => notification.err('lorem ispum')
</script>
