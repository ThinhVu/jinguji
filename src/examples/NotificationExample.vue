<template>
  <div class="fr ai-c fw-w fg-10px mt-3">
    <t-btn @click="showNotificationAutoCloseInAFewSeconds">Show notification auto close in few seconds</t-btn>
    <t-btn @click="showNotificationNeverClose">Show notification never close</t-btn>
    <t-btn @click="showNotificationSuccess">Show success</t-btn>
    <t-btn @click="showNotificationInfo">Show info</t-btn>
    <t-btn @click="showNotificationWarning">Show warning</t-btn>
    <t-btn @click="showNotificationError">Show error</t-btn>
  </div>
  <t-system/>
</template>
<script setup lang="jsx">
import notification from '../components/services/notification';

const showNotificationAutoCloseInAFewSeconds = () => notification.success('Oops! I\'ll disappear soon')
const showNotificationNeverClose = () => notification.success('Oops! I\'m immortal', {duration: 0})
const showNotificationSuccess = () => notification.success('lorem ispum')
const showNotificationInfo = () => notification.info('lorem ispum')
const showNotificationWarning = () => notification.warn('lorem ispum')
const showNotificationError = () => notification.err('lorem ispum')
</script>
