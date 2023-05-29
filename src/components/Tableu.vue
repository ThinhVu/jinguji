<template>
  <table><slot/></table>
</template>

<script setup>
</script>

<style scoped>
table {
  /*border: 1px solid #ddd;*/
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
}

th, td {
  background-color: #1a1a22;
  height: 30px;
  padding: 0 16px;
  color: #ddd;
  border-bottom: thin solid hsla(0, 0%, 100%, .12);
  text-align: left;
}

tr:hover > td {
  background-color: #252531;
}

th {
  position: sticky;
  top: 0;
  color: #aaa;
  height: 48px;
}
</style>
