<template>
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto grid grid-cols-1 gap-8 px-4 sm:px-6 lg:px-8 md:grid-cols-3">
      <!-- Logo and About Section -->
      <div>
        <h2 class="text-xl font-bold mb-4">{{ t('logo') }}</h2>
        <p class="text-gray-400">{{ t('aboutDescription') }}</p>
      </div>
      <!-- Navigation Links -->
      <div>
        <h2 class="text-xl font-bold mb-4">{{ t('quickLinks') }}</h2>
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/" class="hover:text-gray-400">{{ t('home') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="hover:text-gray-400">{{ t('about') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services" class="hover:text-gray-400">{{ t('services') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:text-gray-400">{{ t('contact') }}</NuxtLink>
          </li>
        </ul>
      </div>
      <!-- Contact and Social Links -->
      <div>
        <h2 class="text-xl font-bold mb-4">{{ t('contactUs') }}</h2>
        <p class="text-gray-400 mb-2">{{ t('email') }}: liudongjun@ldjun.cn</p>
        <p class="text-gray-400 mb-2">{{ t('phone') }}: +123 456 7890</p>
        <div class="flex space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="hover:text-gray-400">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="hover:text-gray-400">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="hover:text-gray-400">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="hover:text-gray-400">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="text-center text-gray-500 text-sm mt-6">
      &copy; 2024 {{ t('logo') }}. {{ t('allRightsReserved') }}.
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<style scoped>
/* Add FontAwesome CDN for social media icons if needed */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>
