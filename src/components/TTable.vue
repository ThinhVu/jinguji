<template>
  <div class="t-table ovf-y-s sb-h">
    <table><slot/></table>
  </div>
</template>

<script setup>
</script>

<style scoped>
.t-table {
  border-radius: 6px;
  border: thin solid #d0d7de;
}

table {
  border-collapse: collapse;
  border-spacing: unset;
  width: 100%;
  font-size: 12px;
}

:deep(th) {
  padding: 0 8px;
  color: #1f2328;
  border-left: 1px solid #d0d7de;
  border-bottom: 1px solid #d0d7de;
  /* border: thin solid #d0d7de; */
  text-align: left;
  background-color: #f6f8fa;
  position: sticky;
  top: 0;
  height: 48px;
}

:deep(td) {
  height: 36px;
  padding: 8px;
  color: #1f2328;
  border-left: 1px solid #d0d7de;
  border-bottom: 1px solid #d0d7de;
  /* border: thin solid #d0d7de; */
  background-color: #fff;
  text-align: left;
}

:deep(th:first-child) {
  border-left: none !important;
}

:deep(td:first-child) {
  border-left: none !important;
}

:deep(tr:last-child > td) {
  border-bottom: none !important;
}

:deep(tr:hover > td) {
  background-color: #f6f8fa;
}
</style>
