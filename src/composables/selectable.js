import {computed, ref, watch} from "vue";

export default function useSelectable(props) {
  const v = ref(props.modelValue)
  watch(() => props.modelValue, newV => v.value = newV)

  const isOnlyHasPrimitiveOption = computed(() => {
    for (const option of props.options) {
      if (typeof option === 'object') {
        return false
      }
    }
    return true
  })
  const getText = computed(() => {
    if (isOnlyHasPrimitiveOption.value)
      return option => option

    if (typeof props.itemText === 'function')
      return option => props.itemText(option)

    return option => option[props.itemText]
  })
  const getValue = computed(() => {
    if (isOnlyHasPrimitiveOption.value)
      return option => option

    if (typeof props.itemValue === 'function')
      return option => props.itemValue(option)

    return option => option[props.itemValue]
  })
  const optionsVM = computed(() => {
    const vms = []
    for (const option of props.options) {
      vms.push({
        _o: option,
        _t: getText.value(option),
        _v: getValue.value(option),
      })
    }
    return vms
  })

  return {
    v,
    optionsVM
  }
}