<template>
  <p>&lt;collapsible-section title="Some-title"&gt;...&lt;collapsible-section&gt;</p>
  <collapsible-section title="Some-title">
    <ul>
      <li v-for="i in [1, 2, 3, 4]" :key="i">{{i}}</li>
    </ul>
  </collapsible-section>

  <p>&lt;collapsible-section title="Hello" caret-position="right"&gt;...&lt;collapsible-section&gt;</p>
  <collapsible-section title="Hello" caret-position="right">
    <ul>
      <li v-for="i in [1, 2, 3, 4]" :key="i">{{i}}</li>
    </ul>
  </collapsible-section>

  <p>&lt;collapsible-section title="Hi mom" caret-position="right" show-content&gt;...&lt;collapsible-section&gt;</p>
  <collapsible-section title="Hi mom" caret-position="right" show-content>
    <ul>
      <li v-for="i in [1, 2, 3, 4]" :key="i">{{i}}</li>
    </ul>
  </collapsible-section>
</template>

<script setup>
</script>

<style scoped>
</style>
