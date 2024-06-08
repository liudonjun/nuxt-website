<script setup lang="ts">
import { getHello } from '@/service'
import { useCounterStore } from '../store/index'

const title = ref({})

const getConfig = async () => {
  const { data: respone } = await getHello()
  console.log('onMounted', respone);
  title.value = respone.value
}



const store = useCounterStore()

const count = computed(() => {
  return store.count
})
console.log('store', count);

const { t, locale } = useI18n()

console.log(t, locale);


onMounted(async () => {
  getConfig()
})
</script>

<template>
  <main class="container mx-auto p-4 relative z-1">
    <!-- Hero Section -->
    <section class="bg-gray-100 p-8 rounded-lg shadow-md text-center mb-8">
      <h1 class="text-3xl font-bold mb-4">{{ t('welcome') }} {{ title?.message }} {{ t('welcome') }}</h1>
      <p class="text-lg text-gray-700 mb-4">{{ t('heroDescription') }}</p>
      <button class="bg-blue-500 text-white px-4 py-2 rounded">{{ t('getStarted') }}</button>
    </section>

    <!-- Services Section 1 -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">{{ t('service1') }}</h2>
        <p class="text-gray-700 mb-4">{{ t('service1Description') }}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">{{ t('learnMore') }}</button>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">{{ t('service2') }}</h2>
        <p class="text-gray-700 mb-4">{{ t('service2Description') }}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">{{ t('learnMore') }}</button>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">{{ t('service3') }}</h2>
        <p class="text-gray-700 mb-4">{{ t('service3Description') }}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">{{ t('learnMore') }}</button>
      </div>
    </section>
    <!-- Services Section 2 -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">{{ t('service1') }}</h2>
        <p class="text-gray-700 mb-4">{{ t('service1Description') }}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">{{ t('learnMore') }}</button>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">{{ t('service2') }}</h2>
        <p class="text-gray-700 mb-4">{{ t('service2Description') }}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">{{ t('learnMore') }}</button>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">{{ t('service3') }}</h2>
        <p class="text-gray-700 mb-4">{{ t('service3Description') }}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">{{ t('learnMore') }}</button>
      </div>
    </section>
    <!-- Latest News Section -->
    <section>
      <h2 class="text-2xl font-bold mb-4">{{ t('latestNews') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">{{ t('news1Title') }}</h3>
          <p class="text-gray-700 mb-4">{{ t('news1Summary') }}</p>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">{{ t('readMore') }}</button>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">{{ t('news2Title') }}</h3>
          <p class="text-gray-700 mb-4">{{ t('news2Summary') }}</p>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">{{ t('readMore') }}</button>
        </div>
      </div>
    </section>
  </main>
</template>