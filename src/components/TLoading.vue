<template>
  <span v-if="title && isLoading" class="mr-1">{{title}}</span>
  <t-spinner v-if="isLoading" size="20px"/>
  <template v-else>
    <slot/>
  </template>
</template>
<script setup>
import {computed} from 'vue';
import loading from './services/loading';
import TSpinner from './TSpinner.vue';
const props = defineProps({ action: String, title: String })
const isLoading = computed(() => loading.loading(props.action))
</script>
