<template>
  <div class="t-dashboard h-100vh v-100vw">
    <t-page-header><slot name="header"/></t-page-header>
    <t-page-content>
      <div class="fr h-100 w-100">
        <div class="sidebar fc fg-8px ovf-y-s sb-h px-1 py-1">
          <slot name="sidebar-header"></slot>
          <TDashboardItem :sidebar-items="sidebarItems"/>
          <t-spacer/>
          <slot name="sidebar-footer"></slot>
        </div>
        <div class="content ovf-h">
          <SelectedComponent v-if="SelectedComponent"/>
        </div>
      </div>
    </t-page-content>
  </div>
</template>
<script setup lang="ts">
import {isEmpty} from "lodash-es";
import {onMounted, reactive, provide, watch, computed, shallowRef} from "vue";
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
  sidebarItems: [SideBarItem],
  kei: string
}
const props = defineProps<Props>();
const toggle = reactive({});

const selectedItem = shallowRef();
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

function setSelectedItemFromKei() {
  if (isEmpty(props.sidebarItems))
    return;
  selectedItem.value = findItemByKey(props.kei, props.sidebarItems) || findItemHasComponent(props.sidebarItems);
}

function findItemHasComponent(items) {
  for (const item of items) {
    if (item.component)
      return item

    if (isEmpty(item.items))
      continue

    const foundItem = findItemHasComponent(item.items);
    if (foundItem) {
      toggle[item.key] = true;
      return foundItem;
    }
  }
}

function findItemByKey(key, items) {
  if (key) {
    for (const item of items) {
      if (item.key === key)
        return item;

      if (isEmpty(item.items))
        continue

      const foundItem = findItemByKey(key, item.items);
      if (foundItem) {
        toggle[item.key] = true;
        return foundItem;
      }
    }
  }
}

onMounted(setSelectedItemFromKei)
watch(() => props.kei, setSelectedItemFromKei)

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
