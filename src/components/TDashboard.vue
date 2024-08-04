<template>
  <div class="t-dashboard h-100vh v-100vw">
    <t-page-header><slot name="header"/></t-page-header>
    <t-page-content>
      <div class="fr h-100 w-100">
        <div class="sidebar fc fg-4px ovf-y-s sb-h px-1 py-1">
          <slot name="sidebar-header"></slot>
          <TDashboardItem :sidebar-items="sidebarItems"/>
          <t-spacer/>
          <slot name="sidebar-footer"></slot>
        </div>
        <div class="content ovf-h">
          <SelectedComponent/>
        </div>
      </div>
    </t-page-content>
  </div>
</template>
<script setup lang="ts">
import {ref, reactive, provide, computed} from "vue";
import TSpacer from "./TSpacer.vue";
import TDashboardItem from "./TDashboardItem.vue";
type SideBarItem = {
  title: string;
  icon?: string;
  items?: Array<SideBarItem>;
  key?: string;
  component?: any;
}
interface Props {
  sidebarItems: [SideBarItem]
}
const props = defineProps<Props>();
const toggle = reactive({});

const selectedItem = ref();
const SelectedComponent = computed(() => selectedItem.value?.component)

function isSelected(item) {
  return selectedItem.value?.key === item.key
}
function isToggled(item) {
  return toggle[item.key]
}

function onItemClicked(item) {
  console.log('onClick', item)
  if (item.items) {
    console.log('toggle', item.key)
    toggle[item.key] = !toggle[item.key]
  } else {
    console.log('show component w key', item.key)
    selectedItem.value = item
  }
}

provide('DashboardCtx', {
  isSelected,
  isToggled,
  onItemClicked
})
</script>
<style scoped>
.t-dashboard {
  background-color: #fff;
}

.sidebar {
  width: 200px;
  min-width: 200px;
  border-right: 1px solid #ddd;
}

.content {
  width: calc(100% - 200px);
}
</style>
