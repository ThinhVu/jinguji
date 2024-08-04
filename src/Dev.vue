<template>
  <t-system>
    <t-dashboard :sidebar-items="sideBarItems"/>
  </t-system>
</template>

<script setup lang="ts">
import DialogExample from './examples/DialogExample.vue';
import MsgBoxExample from './examples/MsgBoxExample.vue';
import NotificationExample from './examples/NotificationExample.vue';
import LoadingExample from './examples/LoadingExample.vue';
import LayoutExample from './examples/LayoutExample.vue';
import GuardExample from './examples/GuardExample.vue';
import TrackExample from './examples/TrackExample.vue';
import ButtonExample from './examples/ButtonExample.vue';
import CollapsibleSectionExample from './examples/CollapsibleSectionExample.vue';
import UncategoryExample from './examples/UncategoryExample.vue';
import TKeyValueExample from './examples/TKeyValueExample.vue';
import InputExample from './examples/InputExample.vue';
import TableExample from './examples/TableExample.vue';
import TSystem from './components/TSystem.vue';
import TDashboard from "./components/TDashboard.vue";

const sideBarItems = [
  {
    title: 'System Components',
    key: 'sc',
    items: [
      {title: 'Dialog', key: 'dialog', component: DialogExample},
      {title: 'Message box', key: 'msgBOx', component: MsgBoxExample},
      {title: 'Notification', key: 'notification', component: NotificationExample},
      {title: 'Loading', key: 'loading', component: LoadingExample}
    ]
  },
  {
    title: 'UI util components',
    key: 'uuc',
    items: [
      {title: 'Layout', key: 'layout', component: LayoutExample},
      {title: 'Guard', key: 'guard', component: GuardExample},
      {title: 'Tracking', key: 'tracking', component: TrackExample},
    ]
  },
  {
    title: 'Basic Components',
    key: 'bc',
    items: [
      {title: 'Inputs', key: 'input', component: InputExample},
      {title: 'Buttons', key: 'buttons', component: ButtonExample},
      {title: 'Table', key: 'table', component: TableExample},
      {title: 'Collapse/Expand', key: 'ce', component: CollapsibleSectionExample}
    ]
  },
  {
    title: 'Advance Components',
    key: 'ac',
    items: [
      {title: 'KeyValue', key: 'kv', component: TKeyValueExample},
      {title: 'Uncategory', key: 'uncategories', component: UncategoryExample}
    ]
  }
]

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Sans-Serif;
}



select {
  height: 30px;
  min-width: 60px;
}

/*
Uno css failed to generate pseudo rule.
https://github.com/unocss/unocss/issues/2371
*/
.hide-scroll-bar::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari and Opera */
}
</style>
