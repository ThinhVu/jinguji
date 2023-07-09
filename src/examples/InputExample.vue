<template>
  <div :style="{backgroundColor: bc}">
    <t-switch v-model="darkMode" label="Dark mode"/>

    <hr class="my-2"/>

    <div class="fc fg-32px px-2 py-2">
      <t-text v-model="username" label="Username" placeholder="enter your username"/>
      <t-text v-model="username" placeholder="enter your username"/>
      <t-password v-model="password" label="Password" placeholder="qweqwqweqwesd"/>
      <t-check-box v-model="rememberPwd" label="Remember password"/>
      <t-text-mask mask="+1 (###) ###-####" v-model="USphoneNr" placeholder="US phone number mask"/>
      <t-text-mask mask="##/##/####" v-model="USphoneNr" placeholder="date"/>
      <t-radio-list
          label="Work hours per day"
          :options="workHoursPerDayOptions"
          v-model="workHoursPerDay" row/>
      <t-radio-list
          label="Subscription option"
          :options="subscriptionOptions"
          v-model="subscription"
          item-text="text"
          item-value="value"/>
      <t-date-picker/>
      <t-time-picker/>
    </div>
  </div>
</template>
<script setup>
import {ref, computed} from 'vue'
import TTextMask from '../components/TTextMask.vue';

const darkMode = ref(false)
const bc = computed(() => darkMode.value ? '#444' : '#fff')

const username = ref('')
const password = ref('')
const rememberPwd = ref(false)

const USphoneNr = ref('2345678901')

const workHoursPerDay = ref(1)
const workHoursPerDayOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const subscription = ref()
const subscriptionOptions = [
  {text: 'Weekly', value: 'w'},
  {text: 'Monthly', value: 'm'},
  {text: 'Annually', value: 'y'},
]
</script>
<style scoped>
</style>
