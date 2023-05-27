### Vue-ui-lib

This repo show some concepts which boost your Vue productivity. Production not ready.

### Examples

```jsx
// Layout
<!-- tailwind class layout -->
<div class="row-flex align-items-center justify-items-center gap-px">
  <button>1</button>
  <button>2</button>
</div>

<!-- tailwind directive layout -->
<div v-row-flex v-align-items-center v-justify-items-center v-gap-px>
  <button>1</button>
  <button>2</button>
</div>

<!-- vue-ui-lib attribute layout -->
<fr ai-c jc-c fg-1>
  <button>1</button>
  <button>2</button>
</fr>

```

```jsx
// icon 
<!-- vuetify icon -->
<v-icon
    icon="fas fa-times"
    size="20px"
    color="#2f23f2">
</v-icon>

<!-- vue-ui-lib icon -->
<icon>fas fa-times@20:#2f23f2</icon>
```

```vue
// guard
// see more at GuardExample
const items = [
  {_id: 1, name: 'Item 1', tax: [13, 13]},
  {_id: 1, name: 'Item 2', tax: [13, 13]},
  {_id: 1, name: 'Item 3'},  
]

// access item.tax[0] of "Item 3" throw an exception
// entire element got blanked.
<div v-for="item in items" :key="item._id">
  {{item._id}} -- {{item.name}} -- {{item.tax[0]}}
</div>

// item 1 & item 2 rendered
<guard v-for="item in items" :key="item._id" silent>
  {{item._id}} -- {{item.name}} -- {{item.tax[0]}}
</guard>
```
