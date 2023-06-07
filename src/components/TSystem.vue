<script lang="jsx">
import {provide} from 'vue';
import useLayer from '../composables/useLayer';
import useDialog from '../composables/useDialog';
import useMsgBox from '../composables/useMsgBox';
import useNotification from '../composables/useNotification';
import useLoading from '../composables/useLoading';

export default {
  setup(_, {slots}) {
    const layer = useLayer()
    const dialog = useDialog(layer)
    const msgBox = useMsgBox(layer)
    const notification = useNotification()
    const loading = useLoading()

    provide('TSystem', {
      dialog,
      msgBox,
      notification,
      loading
    })

    return () => <>
      {slots.default && slots.default()}
      {dialog.render()}
      {msgBox.render()}
      {notification.render()}
    </>
  }
}




</script>
