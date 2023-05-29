// https://www.w3schools.com/tags/ref_eventattributes.asp
export const WINDOWS_EVENTS = [
  /* WINDOWS */
  'afterprint', 'beforeprint', 'beforeunload', 'error', 'hashchange', 'load', 'message',
  'offline', 'online', 'pagehide', 'pageshow', 'popstate', 'resize', 'storage', 'unload',
  /* FORM */
  'blur', 'change', 'contextmenu', 'focus', 'input', 'invalid', 'reset', 'search', 'select', 'submit',
  /* KBD */
  'keydown', 'keypress', 'keyup',
  /* MOUSE */
  'click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'wheel',
  /* TOUCH */
  'touchstart', 'touchmove', 'touchend', 'touchcancel',
  /* DRAG */
  'drag', 'dragend', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop', 'scroll',
  /* CLIPBOARD */
  'copy', 'cut', 'paste'
]
export const IGNORE_EVENT_MAP = {}
for (const ev of WINDOWS_EVENTS) {
  IGNORE_EVENT_MAP['on' + ev[0].toUpperCase() + ev.substring(1)] = 1
}
