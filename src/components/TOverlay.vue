<template>
  <div class="w-100vw fr ai-c fix top-0 left-0 bc:#1f232880" :style="{zIndex}" style="height: var(--vh, 100vh)" @click="handleOnClick">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({zIndex: Number, raiseEvent: Boolean})
const emit = defineEmits(['click'])

const handleOnClick = (e) => {
  if (props.raiseEvent) {
    emit('click', e);
  } else {
    e.preventDefault();
    e.stopPropagation();
  }
}

const updateVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh * 100}px`);
};

onMounted(() => {
  updateVh();
  window.addEventListener('resize', updateVh);
});

</script>
