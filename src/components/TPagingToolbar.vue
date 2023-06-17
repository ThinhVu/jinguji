<template>
  <template v-if="totalItems">
    <div>Total: {{totalItems}}</div>
    <btn :disabled="!canPrev" @click="firstPage">|&lt;</btn>
    <btn :disabled="!canPrev" @click="prevPage">&lt;</btn>
    <span>{{page}} / {{totalPages}}</span>
    <btn :disabled="!canGoNext" @click="nextPage">&gt;</btn>
    <btn :disabled="!canGoNext" @click="lastPage">&gt;|</btn>
  </template>
  <template v-else>
    Empty
  </template>
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

const totalPages = computed(() => round(props.totalItems / props.itemsPerPage + 0.5, 0))

const canPrev = computed(() => props.page > 1)
const firstPage = () => emit('update:page', 1);
const prevPage = () => emit('update:page', Math.max(0, props.page - 1));

const canGoNext = computed(() => props.page < totalPages.value)
const nextPage = () => emit('update:page', props.page + 1);
const lastPage = () => emit('update:page', totalPages.value);
</script>
