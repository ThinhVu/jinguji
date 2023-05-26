import {computed, h} from 'vue';

export default function (initialClass) {
  return {
    inheritAttrs: false,
    setup(props, ctx) {
      const attrsClasses = computed(() => [...Object.keys(ctx.attrs), initialClass]);
      return () => h('div', {'class': attrsClasses.value}, ctx.slots && ctx.slots.default())
    }
  }
}
