<template>
  <h3>Guard example</h3>
  <div>
    <p>1. Without guard (entire v-for got blanked)</p>
    <!-- add Guard at this place to prevent entire GuardExample got blanked -->
    <t-guard>
      <div v-for="item in items" :key="item._id">
        <p>ID: {{ item._id }} -- {{ item.name }} -- {{ item.tax[0] }}</p>
      </div>
    </t-guard>
    <hr class="my-2"/>

    <p>2. With guard silent error (only item with exception is not rendered)</p>
    <div>
      <t-guard v-for="item in items" :key="item._id" silent>
        <p>ID: {{ item._id }} -- {{ item.name }} -- {{ item.tax[0] }}</p>
      </t-guard>
    </div>
    <hr class="my-2"/>

    <p>3. With guard verbose error (only item with exception is not rendered)</p>
    <div>
      <t-guard v-for="item in items" :key="item._id">
        <p>ID: {{ item._id }} -- {{ item.name }} -- {{ item.tax[0] }}</p>
      </t-guard>
    </div>
  </div>
</template>
<script setup>
const items = [
  {_id: 1, name: 'Item 1', tax: [13, 13]},
  {_id: 2, name: 'Item 2'}, // tax missing
  {_id: 3, name: 'Item 3', tax: [13, 13]}
]
</script>
