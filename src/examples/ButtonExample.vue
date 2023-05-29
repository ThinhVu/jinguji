<template>
  <div class="fr ai-c fw-w fg-10px">
    <btn disable @click="clickMe">Disabled</btn>
    <btn @click="clickMe">Normal</btn>
  </div>
</template>

<script setup>
const clickMe = () => console.log('click me')
</script>

<style scoped>
</style>
