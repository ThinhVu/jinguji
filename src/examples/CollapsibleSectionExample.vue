<template>
  <t-collapsible-section title="Some-title">
    <ul>
      <li v-for="i in [1, 2, 3, 4]" :key="i">{{i}}</li>
    </ul>
  </t-collapsible-section>

  <t-collapsible-section title="Hello" caret-position="right">
    <ul>
      <li v-for="i in [1, 2, 3, 4]" :key="i">{{i}}</li>
    </ul>
  </t-collapsible-section>

  <t-collapsible-section title="Hi mom" caret-position="right" show-content>
    <ul>
      <li v-for="i in [1, 2, 3, 4]" :key="i">{{i}}</li>
    </ul>
  </t-collapsible-section>
</template>
