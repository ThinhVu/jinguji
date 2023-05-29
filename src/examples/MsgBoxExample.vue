<template>
  <div class="fc fg-10px">
    <div class="fr ai-c fg-10px mt-3">
      <btn @click="showDefaultMsgBox">show default msgBox</btn>
      <btn @click="showMsgBoxWithCustom1">show msgBox with custom buttons, icons, compare result</btn>
      <btn @click="showMsgBoxWithCustom2">show msgBox with custom v-dom content</btn>
    </div>
  </div>
  <txt-area style="border: 1px solid red" class="mt-3" v-model="text" cols="50" rows="20"/>
  <system/>
</template>
<script setup lang="jsx">
import {ref} from 'vue'
import notification from '../components/System/notification';
import msgBox from '../components/System/msg-box';

const text = ref('')

const showDefaultMsgBox = async () => {
  // show confirm here
  const rs = await msgBox.show(
      'Confirm',
      'Are you sure you want to delete this item?',
  )
  // do some action on confirm here
  text.value += rs + '\n'
}
const showMsgBoxWithCustom1 = async () => {
  const rs = await msgBox.show(
      'Confirm',
      'Are you sure you want to delete this item?',
      msgBox.Buttons.AbortRetryIgnore,
      msgBox.Icons.Warning
  )
  if (rs === msgBox.Results.ignore) {
    text.value += 'ok\n'
  } else {
    text.value += 'cancel\n'
  }
}

const showMsgBoxWithCustom2 = async () => {
  const rs = await msgBox.show(
      'Confirm',
      () => <div class="bc:red px-2 py-2">
        <p>Some paragraph</p>,
        <div class="fr ai-c fg-10px">
          <btn>Click me</btn>
          <btn>Click me</btn>
        </div>
      </div>,
      msgBox.Buttons.YesNo,
      msgBox.Icons.Question
  )
  if (rs === msgBox.Results.yes) {
    text.value += 'yes\n'
  } else {
    text.value += 'no\n'
  }
}
</script>
