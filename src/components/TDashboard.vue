<template>
  <div class="t-dashboard h-100vh v-100vw">
    <t-page-header><slot name="header"/></t-page-header>
    <t-page-content>
      <div class="fr h-100 w-100">
        <div class="sidebar fc fg-4px ovf-y-s sb-h px-1 py-1">
          <slot name="sidebar-header"></slot>
          <div v-for="(item, i) in sidebarItems" :key="item.title"
               class="sidebar-item fr ai-c px-2 py-1 clickable"
               :class="selectedSidebarItemIdx === i && 'sidebar-item--selected'"
               @click="selectSidebarItem(i)">
            <t-icon class="item-icon">{{ item.icon }}</t-icon>
            <span class="item-text">{{ item.title }}</span>
          </div>
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
import {ref, computed} from "vue";
interface ISideBarItem {
  title: string;
  icon: string;
  component: any
}
interface Props {
  sidebarItems: [ISideBarItem]
}
const props = defineProps<Props>()
const selectedSidebarItemIdx = ref(0)
const SelectedComponent = computed(() => props.sidebarItems[selectedSidebarItemIdx.value].component)

function selectSidebarItem(i) {
  selectedSidebarItemIdx.value = i
}
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

.item-icon {
  margin-right: 0.5em;
}

.item-text {
  display: initial;
}

.content {
  width: calc(100% - 200px);
}

.sidebar-item {
  color: #1f2328;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  background-color: transparent;
}

.sidebar-item--selected {
  color: #0b0d0e;
  background-color: #a7b1bb3d;
}

.sidebar-item:hover {
  background-color: #d0d7de52;
}
</style>
