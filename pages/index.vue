<script setup lang="ts">
import { getHello } from '@/service'
import { useCounterStore } from '../store/index'
import { useI18n } from 'vue-i18n';

const { message } = await getHello()

console.log('Fetch Result:', message);

const store = useCounterStore()

const count = computed(() => {
  return store.count
})

useSeoMeta({
  title: 'nuxt',
  ogTitle: 'The Nuxt Blog',
  description: 'TThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt Blog',
  ogDescription: 'The Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt Blog',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <main class="bg-white dark:bg-slate-900 my-0 mx-auto p-4 relative z-20">
    <TopCard />
    <MainCard />
  </main>
</template>
