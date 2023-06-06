<template>
  <div class="fc fg-1 bc:#fff mx-a">
    <div class="fr fw-w fg-1">
      <span
          v-for="(emojiK, v) in emojis"
          :key="emojiK"
          @click="emit('emoji', v)"
          class="clickable emj px-1 py-1">
        {{emojiK}}
      </span>
    </div>
    <div class="fr jc-fe">
      <t-btn @click="emit('close')">Close</t-btn>
    </div>
  </div>
</template>

<script setup>
import emojis from '../assets/json/emoji'
const emit = defineEmits(['close'])
</script>

<style scoped>
.emj:hover {
  background: #ccc;
}
</style>
