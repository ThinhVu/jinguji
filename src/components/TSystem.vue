<script lang="jsx">
import dialogService from './services/dialog'
import msgBoxService from './services/msg-box'
import notificationService from './services/notification'
import TIcon from './TIcon.vue'
import TBtn from './TBtn.vue';
import TOverlay from './TOverlay.vue'

export default {
  components: {TBtn, TIcon, TOverlay},
  setup() {
    return () => <>
      {dialogService.render()}
      {msgBoxService.render()}
      {notificationService.render()}
    </>
  }
}
</script>
