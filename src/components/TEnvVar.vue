<template>
  <div>
    <div class="fr ai-c fg-4px fs-s c:#1F2328">
      <span>{{label}}</span>
      <t-btn
          primary @click="addKV"
          class="fr ai-c jc-c clickable bc:#2196f3 c:#fff"
          style="border-radius: 100px">
        +
      </t-btn>
    </div>
    <div v-if="hasProps" class="grid gtc-1fr-1fr-50px gg-4px mt-1">
      <template v-for="(v, k) in iModelValue" :key="k">
        <t-text :model-value="k" @update:modelValue="updateKey(k, $event)" :debounce-ms="500" placeholder="Key"/>
        <t-text :model-value="v" @update:modelValue="updateValue(k, $event)" :debounce-ms="500" placeholder="Value"/>
        <t-btn delete @click="removeKV(k)">
          <t-icon>fas fa-trash@16px:#fff</t-icon>
        </t-btn>
      </template>
    </div>
  </div>
</template>
<script setup>
import {ref, computed, watch, toRaw} from 'vue';
const props = defineProps({
  label: String,
  modelValue: Object
})
const emit = defineEmits(['update:modelValue'])

const iModelValue = ref(props.modelValue || {})
watch(() => props.modelValue, v => iModelValue.value = v || {})
const hasProps = computed(() => Object.keys(props.modelValue).length)

function addKV() {
  iModelValue.value[''] = ''
  updateModelValue()
}
function removeKV(k) {
  delete iModelValue.value[k]
  updateModelValue()
}
function updateKey(oldKey, newKey) {
  // numeric field doesn't keep the order of keys
  const newObj = {}
  for (const kvp of Object.entries(iModelValue.value)) {
    const [k, v] = kvp
    newObj[k !== oldKey ? k : newKey] = v
  }
  emit('update:modelValue', newObj)
}
function updateValue(k, newValue) {
  iModelValue.value[k] = newValue
  updateModelValue()
}
function updateModelValue() {
  emit('update:modelValue', toRaw(iModelValue.value))
}
</script>
