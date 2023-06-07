export const tracker = (function () {
  let eventSources = []
  let threshold = 100;
  let active = true;
  let onThreshold;

  return {
    setOnThreshold(handler) {
      onThreshold = handler
    },
    getThreshold() {
      return threshold
    },
    setThreshold(v) {
      threshold = v
    },
    on() {
      active = true
    },
    off() {
      active = false
    },
    add(ev) {
      if (active) eventSources.push(ev)
      if (eventSources.length >= threshold) {
        onThreshold && onThreshold(eventSources)
        eventSources = []
      }
    },
    replay() {
      active = false;
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
      active = true;
    }
  }
})()

export default function (app) {
  app.directive('track', (...args) => {
    const [el, binding, vNode] = args
    if (el.__TRACK__) return;
    el.__TRACK__ = true;
    const {modifiers, value} = binding
    for (const ev of Object.keys(modifiers)) {
      el.setAttribute('data-track-id', value)
      el.addEventListener(ev, (e) => tracker.add({at: Date.now(), ev, value}))
    }
  })
}
