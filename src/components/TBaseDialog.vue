<template>
  <div class="t-base-dialog br-8px mx-a bc:#fff">
    <div class="fr ai-c jc-sb fg-8px btlr-8px btrr-8px px-4 py-4 bc:#f6f8fa"
         style="border-bottom: 0.1rem solid #d0d7de">
      <span class="fs-14px fw-7">{{title}}</span>
      <t-icon v-if="showCloseIcon" class="clickable" @click="emit('close')">fas fa-times@20px</t-icon>
    </div>
    <div class="fc fg-16px px-4 py-4" :style="bodyMaxHeight ? { maxHeight: bodyMaxHeight, overflowY: 'scroll' } : {}">
      <slot name="body"/>
    </div>
    <div class="fr ai-c jc-fe fg-4px px-4 py-4" style="border-top: 0.1rem solid #d0d7de">
      <slot name="footer"/>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  bodyMaxHeight: String,
  showCloseIcon: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['close'])
</script>

<style scoped>
.t-base-dialog {
  border: 1px solid #d0d7de;
  box-shadow: 0 1px 2px rgba(31,35,40,0.1), inset 0 2px 2px rgba(255,255,255,0.1);
}
</style>
