<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: 'service',
  ogTitle: 'The Nuxt Blog',
  description: 'TThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt Blog',
  ogDescription: 'The Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt Blog',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="max-w-7xl mx-auto p-8 relative z-20 bg-white dark:bg-slate-900">
    <h1 class="text-3xl font-bold mb-4">{{ t('ourServices') }}</h1>
    <p class="text-lg mb-4">{{ t('serviceDescription') }}</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Service Items -->
      <div class="border border-gray-300 rounded-lg p-4">
        <h2 class="text-xl font-semibold">{{ t('service1') }}</h2>
        <p>{{ t('service1Description') }}</p>
      </div>
      <div class="border border-gray-300 rounded-lg p-4">
        <h2 class="text-xl font-semibold">{{ t('service2') }}</h2>
        <p>{{ t('service2Description') }}</p>
      </div>
      <div class="border border-gray-300 rounded-lg p-4">
        <h2 class="text-xl font-semibold">{{ t('service3') }}</h2>
        <p>{{ t('service3Description') }}</p>
      </div>

      <!-- Additional Services -->
      <h2 class="text-2xl font-bold col-span-full mt-8">{{ t('additionalServices') }}</h2>
      <div class="border border-gray-300 rounded-lg p-4 col-span-full">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Additional Service Item -->
          <div class="border border-gray-300 rounded-lg p-4">
            <h3 class="text-lg font-semibold">{{ t('additionalService1') }}</h3>
            <p>{{ t('additionalService1Description') }}</p>
          </div>
          <!-- Additional Service Item -->
          <div class="border border-gray-300 rounded-lg p-4">
            <h3 class="text-lg font-semibold">{{ t('additionalService2') }}</h3>
            <p>{{ t('additionalService2Description') }}</p>
          </div>
          <!-- Add more additional service items as needed -->
        </div>
      </div>
    </div>
  </div>
</template>
