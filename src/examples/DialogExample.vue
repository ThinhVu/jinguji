<template>
  <div class="fr ai-c fw-w fg-10px mt-3">
    <t-btn @click="showDialogWithPredefinedComponent">show Dialog With Predefined Component</t-btn>
    <t-btn @click="showDialogWithSetupFnComponent">Show Dialog With Setup Fn Component</t-btn>
    <t-btn @click="showDialogWithDataBinding">show Dialog With Data Binding</t-btn>
    <t-btn @click="showDialogWithTBaseDialog">show Dialog With TBaseDialog</t-btn>
  </div>
  <t-text multi-line v-model="text" cols="50" rows="20"
          style="border: 1px solid red" class="mt-3"/>
</template>
<script setup lang="jsx">
import {ref, inject} from 'vue'

const {dialog} = inject('TSystem')

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
          <t-btn onClick={() => emit('close')}>Cancel</t-btn>
          <t-btn onClick={() => emit('close', {anyData: 'can be return'})}>OK</t-btn>
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
        <t-btn onClick={() => emit('close')}>Cancel</t-btn>
        <t-btn onClick={() => emit('close', {anyData: 'can be return'})}>OK</t-btn>
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
          <t-btn onClick={() => emit('close')}>Close</t-btn>
          <t-btn onClick={() => emit('close', {anyData: props.customer})}>OK</t-btn>
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

const showDialogWithTBaseDialog = async () => {
  // note: this component can be import from other files
  // it's a recommended way.
  // I write in here just for simplicity
  const predefinedComponent = {
    setup(props, {emit}) {
      return () => <t-base-dialog
          title="Edit repository details" class="min-w-640px"
          v-slots={{
            body: () => <>
              <t-text label="Description"></t-text>
              <t-text label="Website"></t-text>
              <t-text label="Topics"></t-text>
              <div>Include in the home page</div>
              <p>
                <input class="mr-1" type="checkbox"></input>
                Releases
              </p>
              <p>
                <input class="mr-1" type="checkbox"></input>
                Packages
              </p>
              <p>
                <input class="mr-1" type="checkbox"></input>
                Environments
              </p>
            </>,
            footer: () => <>
              <t-btn onClick={() => emit('close')}>Cancel</t-btn>
              <t-btn save onClick={() => emit('close', {anyData: 'can be return'})}>Save changes</t-btn>
            </>
          }}/>
    }
  }
  const rs = await dialog.show(predefinedComponent)
  if (rs) {
    text.value += 'dialog close with data: ' + JSON.stringify(rs) + '\n'
  } else {
    text.value += 'dialog close by cancel\n'
  }
}
</script>
