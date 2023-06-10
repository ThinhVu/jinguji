<template>
  <div class="backoffice h-100vh v-100vw">
    <t-page-header>
      <slot name="header"/>
    </t-page-header>
    <t-page-content>
      <div class="fr h-100 w-100">
        <div class="fc ovf-y-s hide-scroll-bar sidebar px-1 py-1">
          <slot name="sidebar-header"></slot>
          <div v-for="(item, i) in sidebarItems"
               class="fr ai-c px-2 py-1 clickable sidebar-item"
               :class="selectedSidebarItemIdx === i && 'sidebar-item--selected'"
               @click="selectSidebarItem(i)">
            <t-icon class="item-icon">{{ item.icon }}</t-icon>
            <span class="item-text">{{ item.title }}</span>
          </div>
          <t-spacer/>
          <slot name="sidebar-footer"></slot>
        </div>
        <div class="ovf-h content">
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
.backoffice {
  background-color: #fff;
}

.sidebar {
  width: 56px;
  min-width: 56px;
  border-right: 1px solid #d8dee4;
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

.content {
  width: calc(100% - 56px);
}

.item-icon {
  margin-right: 0;
}

.item-text {
  display: none;
}

@media screen and (min-width: 1024px) {
  .sidebar {
    width: 200px;
    min-width: 200px;
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
}
</style>
