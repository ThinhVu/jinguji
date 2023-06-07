<template>
  <div class="fc fg-10px">
    <div class="fr ai-c fw-w fg-10px mt-3">
      <t-btn @click="showDefaultMsgBox">show default msgBox</t-btn>
      <t-btn @click="showMsgBoxWithCustom1">show msgBox with custom buttons, icons, compare result</t-btn>
      <t-btn @click="showMsgBoxWithCustom2">show msgBox with custom v-dom content</t-btn>
    </div>
  </div>
  <t-text multi-line v-model="text" cols="50" rows="20" style="border: 1px solid red" class="mt-3" />
</template>
<script setup lang="jsx">
import {ref, inject} from 'vue'

const {msgBox} = inject('TSystem')
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
      msgBox.Buttons.YesNoCancel,
      msgBox.Icons.Error
  )
  text.value += `${rs}\n`
}
const showMsgBoxWithCustom2 = async () => {
  const rs = await msgBox.show(
      'Confirm',
      () => <div class="bc:#ded px-2 py-2">
        <p>Some paragraph</p>,
        <div class="fr ai-c fg-10px">
          <t-btn>Click me</t-btn>
          <t-btn>Click me</t-btn>
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
