<template>
  <div>index :{{ count }}
    <el-button>button</el-button>
    <ElButton type="success">button</ElButton>
    <LazyElButton type="warning">lazy button</LazyElButton>

    <ul>
      <!-- <van-button type="primary">button</van-button>
      <VanButton type="success">button</VanButton>
      <LazyVanButton type="default">lazy button</LazyVanButton> -->
      <li>
        <NuxtLink to="/">home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/posts/1">Post 1</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/posts/2">Post 2</NuxtLink>
      </li>
    </ul>
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