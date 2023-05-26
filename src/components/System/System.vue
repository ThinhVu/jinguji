<script lang="jsx">
import dialogApi from './dialog'
import msgBoxApi from './msg-box'
import notificationApi from './notification'
import Icon from '../Icon.vue'
import Overlay from '../Layer/Overlay.vue'

export default {
  components: {Icon, Overlay},
  setup() {
    return () => <>
      {dialogApi.render()}
      {msgBoxApi.render()}
      {notificationApi.render()}
    </>
  }
}
</script>
