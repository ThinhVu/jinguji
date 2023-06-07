<script setup>
import {inject, ref} from 'vue';

const {loading} = inject('TSystem')

const LOAD_ACTIONS = {
  LOAD_CUSTOMERS: Symbol('load_customers'),
  LOAD_PRODUCTS: Symbol('load_products'),
}

const products = ref([])
const customers = ref([])

function loadProducts() {
  loading.begin(LOAD_ACTIONS.LOAD_PRODUCTS)
  setTimeout(() => {
    products.value = [
      {_id: 1, name: 'iPhone 14 Mini', price: 700},
      {_id: 2, name: 'iPhone 14', price: 800},
      {_id: 3, name: 'iPhone 14 Pro', price: 900},
      {_id: 4, name: 'iPhone 14 Pro Max', price: 1000},
    ]
    loading.end(LOAD_ACTIONS.LOAD_PRODUCTS)
  }, 2000)
}

function loadCustomers() {
  loading.begin(LOAD_ACTIONS.LOAD_CUSTOMERS)
  setTimeout(() => {
    customers.value = [
      {_id: 1, name: 'Timothy', age: 24, gender: 'Male'},
      {_id: 2, name: 'Alice', age: 18, gender: 'Undetermined'},
      {_id: 3, name: 'Emily', age: 32, gender: 'Female'},
    ]
    loading.end(LOAD_ACTIONS.LOAD_CUSTOMERS)
  }, 4000)
}

function loadData() {
  loadCustomers()
  loadProducts()
}
</script>


<template>
  <t-btn @click="loadData">Load data</t-btn>

  <hr class="my-2"/>

  <div>
    <t-loading
        :action="LOAD_ACTIONS.LOAD_PRODUCTS"
        title="Loading products...">
      <div v-for="product in products" :key="product._id"
           class="px-2 py-2"
           style="border: 1px solid #ddd">
        <p>Name: {{ product.name }}</p>
        <p>Price: {{ product.price }}</p>
      </div>
    </t-loading>
  </div>

  <hr class="my-2"/>

  <div>
    <t-loading :action="LOAD_ACTIONS.LOAD_CUSTOMERS">
      <template #loading>
        <div v-for="i in [1, 2, 3]" :key="i" class="grid gtc-70px-1fr ai-c fg-4px px-2 py-2">
          <span>Name: </span> <t-pulse-block class="h-24px w-120px"/>
          <span>Age: </span> <t-pulse-block class="h-24px w-20px"/>
          <span>Gender:</span> <t-pulse-block class="h-24px w-100px"/>
        </div>
      </template>
      <div v-for="customer in customers" :key="customer._id"
           class="grid gtc-70px-1fr ai-c fg-4px px-2 py-2"
           style="border: 1px solid #ddd">
        <span>Name: </span> <span>{{customer.name}}</span>
        <span>Age: </span> <span>{{customer.age}}</span>
        <span>Gender:</span> <span>{{customer.gender}}</span>
      </div>
    </t-loading>
  </div>
</template>
