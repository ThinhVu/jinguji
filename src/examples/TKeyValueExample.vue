<template>
  <div>
    <t-btn @click="setObj(0)">Object 1</t-btn>
    <t-btn @click="setObj(1)">Object 2</t-btn>
    <t-btn @click="setObj(2)">Object 3</t-btn>
  </div>
  <t-key-value label="User" v-model="envVar"/>
</template>
<script setup>
import {ref} from 'vue';

const envVar = ref({
  START_LOG_ON_BOOT: true,
  PORT: 3000,
  MONGO_URL: 'mongodb://127.0.0.1:27017/f13s',
})

const envVars = [
  {},
  {
    PORT: 3000,
    MONGO_URL: 'mongodb://127.0.0.1:27017/f13s',
  },
  {
    START_LOG_ON_BOOT: true,
    PORT: 3000,
  }
]

function setObj(index) {
  envVar.value = envVars[index]
}

</script>
