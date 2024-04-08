<script setup>
import TTable from "../components/TTable.vue";
import TPagingToolbar from "../components/TPagingToolbar.vue";
import {reactive} from "vue";

const paging = reactive({
  page: 1,
  itemsPerPage: 10,
  totalItems: 300
})
</script>

<template>
  <div class="fc fg-8px">
    <t-table>
      <thead>
      <tr>
        <th>header 1</th>
        <th>header 2</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>item 1</td>
        <td>item 2</td>
      </tr>
      <tr>
        <td>item 3</td>
        <td>item 4</td>
      </tr>
      </tbody>
    </t-table>
    <t-paging-toolbar class="fr ai-c jc-fs fg-8px" v-bind="paging" @update:page="paging.page = $event"></t-paging-toolbar>
  </div>
</template>

<style scoped>

</style>