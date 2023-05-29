export const eventSources = []

window.__dev = {
  eventSources,
  replay: () => {
    eventSources.forEach(es => {
      const el = document.querySelector(`[data-track-id="${es.value}"]`)
      switch (es.ev) {
        case 'click':
          el.click()
          break
        default:
          console.log('not supported', es.ev)
      }
    })
  }
}

export default function (app) {
  app.directive('track', (...args) => {
    const [el, binding, vNode] = args
    const {modifiers, value} = binding
    console.log(vNode)
    for (const ev of Object.keys(modifiers)) {
      el.setAttribute('data-track-id', value)
      el.addEventListener(ev, (e) => eventSources.push({at: Date.now(), ev, value}))
    }
  })
}
