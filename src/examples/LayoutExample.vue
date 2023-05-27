<template>
  <div>
    <h3>Layout example</h3>
    <!-- extend -->
    <ex px-2 py-2>
      <!-- flex row -->
      <ex fr ai-c fg-1 mb-2>
        <button>1</button>
        <button>2</button>
        <icon>fas fa-times@20:red</icon>
      </ex>

      <!-- flex row -->
      <fr ai-c fg-1>
        <button>1</button>
        <button>2</button>
        <icon>fas fa-times@20:#2f23f2</icon>
      </fr>

      <!-- flex col -->
      <fc mt-2 px-2 fg-1>
        <button>1</button>
        <button>2</button>
        <icon>fas fa-times@20</icon>
      </fc>
    </ex>
  </div>
</template>
