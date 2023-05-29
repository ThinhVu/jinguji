<template>
  <div class="fr ai-c fg-10px mt-3">
    <btn @click="showDialogWithPredefinedComponent">show Dialog With Predefined Component</btn>
    <btn @click="showDialogWithSetupFnComponent">Show Dialog With Setup Fn Component</btn>
    <btn @click="showDialogWithDataBinding">show Dialog With Data Binding</btn>
  </div>
  <txt-area style="border: 1px solid red" class="mt-3" v-model="text" cols="50" rows="20"/>
  <system/>
</template>
<script setup lang="jsx">
import {ref} from 'vue'
import dialog from '../components/System/dialog';

const text = ref('')

const showDialogWithPredefinedComponent = async () => {
  // note: this component can be import from other files
  // it's a recommended way.
  // I write in here just for simplicity
  const predefinedComponent = {
    setup(props, {emit}) {
      return () => <div class="br-10px min-w-400px mx-a px-2 py-2 bc:#ddd">
        <p class="fw-700">Dialog title</p>
        <p class="my-2">Some content</p>
        <div class="fr ai-c jc-fe fg-10px">
          <btn onClick={() => emit('close')}>Cancel</btn>
          <btn onClick={() => emit('close', {anyData: 'can be return'})}>OK</btn>
        </div>
      </div>
    }
  }
  const rs = await dialog.show(predefinedComponent)
  if (rs) {
    text.value += 'dialog close with data: ' + JSON.stringify(rs) + '\n'
  } else {
    text.value += 'dialog close by cancel\n'
  }
}

const showDialogWithSetupFnComponent = async () => {
  const setupFn = (_, {emit}) => {
    return () => <div class="br-10px min-w-400px mx-a px-2 py-2 bc:#ddd">
      <p class="fw-700">Dialog title</p>
      <p class="my-2">Some content</p>
      <div class="fr ai-c jc-fe fg-10px">
        <btn onClick={() => emit('close')}>Cancel</btn>
        <btn onClick={() => emit('close', {anyData: 'can be return'})}>OK</btn>
      </div>
    </div>
  }
  const rs = await dialog.show(setupFn)
  if (rs) {
    text.value += 'dialog close with data: ' + JSON.stringify(rs) + '\n'
  } else {
    text.value += 'dialog close by cancel\n'
  }
}

const showDialogWithDataBinding = async () => {
  // should move to sfc, i just wrote this component at this place for demo
  const customerInfoDialog = {
    props: { customer: Object },
    setup(props, {emit}) {
      return () => <div class="br-10px min-w-400px mx-a px-2 py-2 bc:#ddd">
        <p class="fw-700">Customer info</p>
        <p class="my-2">Name: {props.customer.name}</p>
        <p class="my-2">Name: {props.customer.age}</p>
        <p class="my-2">Name: {props.customer.gender}</p>
        <div class="fr ai-c jc-fe fg-10px">
          <btn onClick={() => emit('close')}>Close</btn>
          <btn onClick={() => emit('close', {anyData: props.customer})}>OK</btn>
        </div>
      </div>
    }
  }
  const rs = await dialog.show({
    component: customerInfoDialog,
    data: { customer: { name: 'Josh', age: 40, gender: 'male' } }
  })
  if (rs) {
    text.value += 'dialog close with data: ' + JSON.stringify(rs) + '\n'
  } else {
    text.value += 'dialog close by cancel\n'
  }
}
</script>
