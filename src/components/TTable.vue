<template>
  <table><slot/></table>
</template>

<script setup>
</script>

<style scoped>
table {
  /*border: 1px solid #ddd;*/
  border-collapse: separate;
  border-spacing: unset;
  width: 100%;
  font-size: 12px;
}

th, td {
  height: 30px;
  padding: 0 8px;
  color: #1f2328;
  border: thin solid #d0d7de;;
  text-align: left;
}

th {
  background-color: #f6f8fa;
  position: sticky;
  top: 0;
  height: 48px;
}
th:first-child {
  border-radius: 6px 0 0 0;
}

th:last-child {
  border-radius: 0 6px 0 0;
}

td {
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #fff;
}

tr:last-child > td:first-child {
  border-radius: 0 0 0 6px;
}

tr:last-child > td:last-child {
  border-radius: 0 0 6px 0;
}

tr:hover > td {
  background-color: #f6f8fa;
}
</style>
