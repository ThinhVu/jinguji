<template>
  <table><slot/></table>
</template>

<script setup>
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: unset;
  width: 100%;
  font-size: 12px;
}

:deep(th) {
  padding: 0 8px;
  color: #1f2328;
  border: thin solid #d0d7de;;
  text-align: left;
  background-color: #f6f8fa;
  position: sticky;
  top: 0;
  height: 48px;
}

:deep(th:first-child) {
  border-radius: 6px 0 0 0;
}

:deep(th:last-child) {
  border-radius: 0 6px 0 0;
}

:deep(td) {
  height: 36px;
  padding: 8px;
  color: #1f2328;
  border: thin solid #d0d7de;;
  background-color: #fff;
  text-align: left;
}

:deep(tr:last-child > td:first-child) {
  border-radius: 0 0 0 6px;
}

:deep(tr:last-child > td:last-child) {
  border-radius: 0 0 6px 0;
}

:deep(tr:hover > td) {
  background-color: #f6f8fa;
}
</style>
