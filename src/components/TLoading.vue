<template>
  <div v-if="isLoading">
    <slot name="loading">
      <div class="fr ai-c jc-c w-100 h-100">
        <t-spinner size="20px" class="mr-1"/>
        <span v-if="title" class="mr-1">{{title}}</span>
      </div>
    </slot>
  </div>
  <template v-else>
    <slot/>
  </template>
</template>
<script setup>
import {computed, inject} from 'vue';
const props = defineProps({ action: [String, Symbol], title: String })
const {loading} = inject('TSystem')
const isLoading = computed(() => loading.loading(props.action))
</script>
