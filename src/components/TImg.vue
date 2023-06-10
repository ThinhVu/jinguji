<template>
  <span>
    <img draggable="false" v-show="imgState === 'loaded'" :style="mediaStyle" ref="image" @click="emit('click')"/>
    <t-pulse-block v-if="imgState === 'loading'" :style="mediaStyle"/>
    <div v-if="imgState === 'error'" class="fc ai-c jc-c ta-c bc:#ddd" :style="{...mediaStyle, border: '1px solid #aaa'}">
      <t-icon class="mb-2">fas fa-image@40px</t-icon>
      <p style="font-size: 12px">Failed to load</p>
    </div>
  </span>
</template>

<script setup>
import {ref, computed, watch, onMounted} from 'vue';

const props = defineProps({
  src: String,
  style: [String, Object],
})
const emit = defineEmits(['click'])

const image = ref()
const mediaStyle = computed(() => {
  return {
    height: `100%`,
    maxWidth: `100%`,
    objectFit: 'cover',
    ...props.style
  }
})
const imgState = ref()
const changeImgSrc = src => {
  image.value.src = src;
  imgState.value = 'loading';
}
watch(() => props.src, changeImgSrc);
onMounted(() => {
  image.value.onload = () => imgState.value = 'loaded';
  image.value.onerror = () => imgState.value = 'error';
  changeImgSrc(props.src)
})
</script>
