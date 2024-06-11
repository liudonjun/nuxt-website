<script setup lang="ts">
const { t } = useI18n();
useSeoMeta({
  title: 'about',
  ogTitle: 'The Nuxt Blog',
  description: 'TThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt Blog',
  ogDescription: 'The Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt Blog',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <div class="max-w-800 mx-auto text-center p-8 relative z-20 bg-white dark:bg-slate-900">
    <h1 class="text-3xl font-bold mb-4">{{ t('aboutUs') }}</h1>
    <p class="text-lg mb-4">{{ t('aboutDescription') }}</p>
    <p class="text-lg">{{ t('aboutContact') }}</p>
  </div>
</template>