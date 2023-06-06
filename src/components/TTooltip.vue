<template>
  <div class="tooltip">
    <slot></slot>
    <span class="tooltip-text">
      {{content}}
      <slot name="content"></slot>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  content: String
})
</script>

<style scoped>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: #e0e0e0;
  color: #424242;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip .tooltip-text::after {
  content: " ";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #e0e0e0 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltip-text {
  visibility: visible;
}
</style>
