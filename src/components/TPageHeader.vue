<template>
  <div class="fr ai-c jc-sb px-6px h-50px" style="background-color: rgba(0,0,0,0.2); color: #fff">
    <slot></slot>
    <div class="f1"></div>
    <h3>{{title}}</h3>
  </div>
</template>
<script setup>
defineProps({title: String})
</script>
