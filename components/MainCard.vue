<script setup>
const { t } = useI18n()
</script>

<template>
  <div>
    <section class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center mb-8">
      <h1 class="text-3xl font-bold mb-4">{{ t('welcome') }}</h1>
      <p class="text-lg text-gray-700 dark:text-white mb-4">{{ t('heroDescription') }}</p>
      <UButton class="btn-primary">{{ t('getStarted') }}</UButton>
    </section>

    <!-- Services Section 1 -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">{{ t('service1') }}</h2>
        <p class="text-gray-700 dark:text-white mb-4">{{ t('service1Description') }}</p>
        <UButton class="btn-primary">{{ t('learnMore') }}</UButton>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">{{ t('service2') }}</h2>
        <p class="text-gray-700 dark:text-white mb-4">{{ t('service2Description') }}</p>
        <UButton class="btn-primary">{{ t('learnMore') }}</UButton>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">{{ t('service3') }}</h2>
        <p class="text-gray-700 dark:text-white mb-4">{{ t('service3Description') }}</p>
        <UButton class="btn-primary">{{ t('learnMore') }}</UButton>
      </div>
    </section>

    <!-- Services Section 2 -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">{{ t('service1') }}</h2>
        <p class="text-gray-700 dark:text-white mb-4">{{ t('service1Description') }}</p>
        <UButton class="btn-primary">{{ t('learnMore') }}</UButton>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">{{ t('service2') }}</h2>
        <p class="text-gray-700 dark:text-white mb-4">{{ t('service2Description') }}</p>
        <UButton class="btn-primary">{{ t('learnMore') }}</UButton>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">{{ t('service3') }}</h2>
        <p class="text-gray-700 dark:text-white mb-4">{{ t('service3Description') }}</p>
        <UButton class="btn-primary">{{ t('learnMore') }}</UButton>
      </div>
    </section>

    <!-- Latest News Section -->
    <section>
      <h2 class="text-2xl font-bold mb-4">{{ t('latestNews') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">{{ t('news1Title') }}</h3>
          <p class="text-gray-700 dark:text-white mb-4">{{ t('news1Summary') }}</p>
          <UButton class="btn-primary">{{ t('readMore') }}</UButton>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">{{ t('news2Title') }}</h3>
          <p class="text-gray-700 dark:text-white mb-4">{{ t('news2Summary') }}</p>
          <UButton class="btn-primary">{{ t('readMore') }}</UButton>
        </div>
      </div>
    </section>
  </div>
</template>