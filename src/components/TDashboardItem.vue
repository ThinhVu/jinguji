<script setup lang="ts">
import {inject} from "vue";
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
const props = defineProps<Props>()
const {
  isSelected,
  isToggled,
  onItemClicked
} = inject('DashboardCtx')
function handleClick(e, item) {
  e.preventDefault()
  e.stopPropagation()
  onItemClicked(item)
}
</script>

<template>
  <div v-for="item in sidebarItems"
       :key="item.key"
       style="user-select: none"
       @click="e => handleClick(e, item)">
    <template v-if="item.items">
      <div class="sidebar-item fr ai-c px-2 py-2 clickable"
           :class="isSelected(item) && 'sidebar-item--selected'"
      >
        <t-icon v-if="item.icon" class="item-icon">{{ item.icon }}</t-icon>
        <span class="item-text">{{ item.title }}</span>
        <t-spacer/>
        <t-icon v-if="isToggled(item)">fas fa-chevron-up@12px</t-icon>
        <t-icon v-else>fas fa-chevron-down@12px</t-icon>
      </div>
      <div v-if="isToggled(item)" class="fc fg-4px ml-4">
        <TDashboardItem :sidebar-items="item.items"/>
      </div>
    </template>
    <div v-else
         class="sidebar-item fr ai-c px-2 py-1 clickable"
         :class="isSelected(item) && 'sidebar-item--selected'">
      <t-icon v-if="item.icon" class="item-icon">{{ item.icon }}</t-icon>
      <span class="item-text">{{ item.title }}</span>
    </div>
  </div>
</template>

<style scoped>
.item-icon {
  margin-right: 0.5em;
}

.item-text {
  display: initial;
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
  background-color: rgba(185, 191, 197, 0.32);
}
</style>