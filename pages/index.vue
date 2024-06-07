<template>
  <div>index :{{ count }}
    <el-button>button</el-button>
    <ElButton type="success">button</ElButton>
    <LazyElButton type="warning">lazy button</LazyElButton>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../store/index'

const store = useCounterStore()

const count = computed(() => {
  return store.count
})
console.log('store', store);

</script>