<template>
  <div class="fc fg-4px">
    <div class="fr ai-c fw-w fg-4px">
      <t-btn @click="clickMe">normal</t-btn>
    </div>
    <div class="fr ai-c fw-w fg-4px">
      <t-btn primary @click="clickMe">primary</t-btn>
      <t-btn secondary @click="clickMe">secondary</t-btn>
      <t-btn tertiary @click="clickMe">tertiary</t-btn>
    </div>
    <div class="fr ai-c fw-w fg-4px">
      <t-btn save @click="clickMe">save</t-btn>
      <t-btn edit @click="clickMe">edit</t-btn>
      <t-btn delete @click="clickMe">delete</t-btn>
    </div>
    <hr>
    <div class="fr ai-c fw-w fg-4px">
      <t-btn disable @click="clickMe">disable normal</t-btn>
    </div>
    <div class="fr ai-c fw-w fg-4px">
      <t-btn disable primary @click="clickMe">disable primary</t-btn>
      <t-btn disable secondary @click="clickMe">disable secondary</t-btn>
      <t-btn disable tertiary @click="clickMe">disable tertiary</t-btn>
    </div>
    <div class="fr ai-c fw-w fg-4px">
      <t-btn disable save @click="clickMe">disable save</t-btn>
      <t-btn disable edit @click="clickMe">disable edit</t-btn>
      <t-btn disable delete @click="clickMe">disable delete</t-btn>
    </div>
  </div>
</template>

<script setup>
const clickMe = () => console.log('click me')
</script>
