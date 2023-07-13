<template>
  <t-icon>fas fa-times@40:#000</t-icon>
  <t-emojis/>
  <t-img src="https://picsum.photos/200/300" style="width: 200px; height: 300px"/>
  <t-img src="https://picsum.photos21/200/300" style="width: 200px; height: 300px"/>
  <t-pulse-block class="h-30px"></t-pulse-block>
  <div class="fr ai-c fg-10px">
    <t-rating/>
    <t-time-format/>
    <t-time-span :value="times" :interval="1000"/>
    <t-readable-ms :value="998031232"/>
    <t-spinner/>
  </div>
  <t-progress :value="50"/>
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
    </tbody>
  </t-table>
  <t-label-mask mask="+1 (###) ###-####" model-value="2345678901"/>
  <t-paging-toolbar class="fr ai-c jc-fs fg-8px" v-bind="paging" @update:page="paging.page = $event"></t-paging-toolbar>
</template>
<script setup>
import dayjs from 'dayjs'
import {onMounted, reactive} from 'vue';
import TProgress from '../components/TProgress.vue';
import TTable from '../components/TTable.vue';
import TLabelMask from '../components/TLabelMask.vue';
import TPagingToolbar from '../components/TPagingToolbar.vue';

const times = dayjs().subtract(80, 'minute').toDate()

const paging = reactive({
  page: 1,
  itemsPerPage: 10,
  totalItems: 300
})

onMounted(() => {

})
</script>
