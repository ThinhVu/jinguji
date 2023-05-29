<template>
  <div>
    <p>Track example</p>
    <button v-track.click.mouuseleave.mouseenter="'btn1'" @click="clickMe(1)">
      Click me 1
    </button>
    <button v-track.click="'btn2'" @click="clickMe(2)">
      Click me 2
    </button>
  </div>
</template>
<script setup>
const clickMe = (num) => {
  console.log('btn got hit', num)
}
</script>
