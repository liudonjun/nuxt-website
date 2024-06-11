<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: 'contact',
  ogTitle: 'The Nuxt Blog',
  description: 'TThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt Blog',
  ogDescription: 'The Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt BlogThe Nuxt Blog',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="max-w-7xl mx-auto p-8 bg-white dark:bg-slate-900 relative z-20">
    <h1 class="text-3xl font-bold mb-4">{{ t('contactUs') }}</h1>
    <p class="text-lg mb-4">{{ t('contactDescription') }}</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Contact Information -->
      <div class="border border-gray-300 rounded-lg p-4">
        <h2 class="text-xl font-semibold">{{ t('address') }}</h2>
        <p>{{ t('companyName') }}</p>
        <p>{{ t('streetAddress') }}</p>
        <p>{{ t('city') }}, {{ t('state') }} {{ t('zipCode') }}</p>
        <p>{{ t('country') }}</p>
      </div>
      <div class="border border-gray-300 rounded-lg p-4">
        <h2 class="text-xl font-semibold">{{ t('phone') }}</h2>
        <p>{{ t('phoneNumber') }}</p>
      </div>
      <div class="border border-gray-300 rounded-lg p-4">
        <h2 class="text-xl font-semibold">{{ t('email') }}</h2>
        <p>{{ t('emailAddress') }}</p>
      </div>

      <!-- Additional Contacts -->
      <h2 class="text-2xl font-bold col-span-full mt-8">{{ t('additionalContacts') }}</h2>
      <div class="border border-gray-300 rounded-lg p-4 col-span-full">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Contact Item -->
          <div class="border border-gray-300 rounded-lg p-4">
            <h3 class="text-lg font-semibold">John Doe</h3>
            <p>Phone: 123-456-7890</p>
            <p>Email: john@example.com</p>
          </div>
          <!-- Contact Item -->
          <div class="border border-gray-300 rounded-lg p-4">
            <h3 class="text-lg font-semibold">Jane Smith</h3>
            <p>Phone: 987-654-3210</p>
            <p>Email: jane@example.com</p>
          </div>
          <!-- Add more contact items as needed -->
        </div>
      </div>
    </div>
  </div>
</template>
