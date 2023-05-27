<script lang="jsx">
export default {
  props: {
    silent: Boolean,
    handleError: Function // TODO: handle error
  },
  setup(props, {slots}) {
    return () => {
      try {
        return slots.default()
      } catch (e) {
        return props.silent
            ? null
            : <div style="padding: 10px; background: red;">
                {e.stack.split('\n').map(line => <p>{line}</p>)}
              </div>
      }
    }
  }
}
</script>
