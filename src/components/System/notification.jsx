import { ref } from 'vue';
import {v4} from 'uuid';
import _ from 'lodash';

const notifyState = ref({})

function showNotify(content, options) {
  let {color, duration, position, prepend, title} = options
  color = color || '#fff'
  duration = duration == undefined ? 2000 : duration
  position = position || {top: true, right: true}

  const notifyId = v4()
  const notify = {
    content: content || 'Saved',
    color: color,
    show: true,
    duration,
    position,
    prepend,
    title
  }
  notifyState.value[notifyId] = notify

  const off = () => delete notifyState.value[notifyId]
  if (duration > 0)
    setTimeout(off, duration)
  else
    notify.off = off
}
export function info(content, options) {
  if (!options)
    options = {}
  options.title = 'Info'
  options.color = '#c7d8f1'
  options.prepend = () => <icon class="mr-2" color="#3072d1">fas fa-info-circle@20</icon>
  showNotify(content, options)
}
export function warn(content, options) {
  if (!options)
    options = {}
  options.color = '#fff3cd'
  options.title = 'Warning'
  options.prepend = () => <icon class="mr-2" color="#dc8717">fas fa-exclamation-triangle@20</icon>
  showNotify(content, options)
}
export function success(content, options) {
  if (!options) options = {}
  options.color = '#d8f6d2'
  options.title = 'Success'
  options.prepend = () => <icon class="mr-2" color="#47d130">fas fa-check@20</icon>
  showNotify(content, options)
}
export function err(e, options) {
  if (!options)
    options = {}
  options.title = 'Error'
  options.color = '#f6cfd3'
  options.prepend = () => <icon class="mr-2" color="#ee717c">fas fa-times-circle@20</icon>
  showNotify(getErrorMsg(e), options)
}
function getErrorMsg(e) {
  let errorContent
  if (typeof(e) === 'string')
    errorContent = e
  else if (e.response) // axios error
    errorContent = _.get(e.response, 'data.message', e.message)
  else
    errorContent = e.message
  return errorContent
}

export function render() {
  const marginTop = i => ({marginTop: ((i * 80) + 10 + 'px'), marginRight: '10px'})
  return <>
    {Object.values(notifyState.value).map((notify, i) =>
        <div class="fix fr ai-c jc-c px-2 py-2 br-1 top-0 right-0" style={[marginTop(i), {backgroundColor: notify.color}]}>
          <div class="fr ai-fs">
            {notify.prepend && notify.prepend()}
            <div class="f1 max-w-360px">
              {notify.title && <p class="fr ai-c c:#444 fw-700">
                <span>{notify.title}</span>
              </p>}
              <p class="c:#444">{notify.content}</p>
            </div>
            {notify.off && <icon class="ml-2" onClick={notify.off}>fas fa-times@20:#444</icon>}
          </div>
        </div>)}
  </>
}

export default {
  info,
  err,
  warn,
  success,
  render
}
