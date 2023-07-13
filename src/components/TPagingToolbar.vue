<template>
  <div class="t-paging-toolbar">
    <template v-if="totalItems">
      <btn :disable="!canPrev" @click="firstPage">
        <t-icon>fas fa-angle-double-left@16</t-icon>
      </btn>
      <btn :disable="!canPrev" @click="prevPage">
        <t-icon>fas fa-angle-left@16</t-icon>
      </btn>
      <span class="fr ai-c fg-8px">
        <t-text class="w-40px" :model-value="page" @update:model-value="toPage($event)"/>
        <span>/ {{totalPages}}</span>
      </span>
      <btn :disable="!canGoNext" @click="nextPage">
        <t-icon>fas fa-angle-right@16</t-icon>
      </btn>
      <btn :disable="!canGoNext" @click="lastPage">
        <t-icon>fas fa-angle-double-right@16</t-icon>
      </btn>
    </template>
    <template v-else>
      Empty
    </template>
  </div>
</template>
<script setup>
import {round} from 'lodash-es';
import {computed} from 'vue';
import Btn from './TBtn.vue';

const props = defineProps({
  page: Number,
  totalItems: Number,
  itemsPerPage: Number,
})
const emit = defineEmits(['update:page'])

const totalPages = computed(() => {
  let p = round(props.totalItems / props.itemsPerPage)
  if (props.totalItems % props.itemsPerPage !== 0)
    p += 1
  return p
})

const canPrev = computed(() => props.page > 1)
const firstPage = () => emit('update:page', 1);
const prevPage = () => emit('update:page', Math.max(0, props.page - 1));

const canGoNext = computed(() => props.page < totalPages.value)
const nextPage = () => emit('update:page', props.page + 1);
const lastPage = () => emit('update:page', totalPages.value);

const toPage = (page) => {
  page = +page
  if (page < 1) {
    page = 1
  } else if (page > totalPages.value) {
    page = totalPages.value
  }
  emit('update:page', page);
}
</script>
