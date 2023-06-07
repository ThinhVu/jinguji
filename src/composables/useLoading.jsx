import {ref} from 'vue'

export default function useLoading() {
  const loading = ref({});
  return {
    begin: (key) => loading.value[key] = true,
    end: (key) => delete loading.value[key],
    loading: (key) => !!loading.value[key],
  }
}
