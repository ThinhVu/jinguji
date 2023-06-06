import * as Components from './src/components'

export default {
  install(Vue, args) {
    Object.keys(Components).forEach(key => Vue.component(key, Components[key]))
  }
}

