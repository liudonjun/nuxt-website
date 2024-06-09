<template>
  <header class="bg-gray-800 text-white">
    <div class="container mx-auto flex justify-between items-center p-4">
      <div class="text-xl font-bold">
        <NuxtLink to="/">Nuxt</NuxtLink>
      </div>
      <div class="flex item-center">
        <nav class="hidden md:flex space-x-4 mr-5">
          <NuxtLink to="/" class="hover:text-gray-400">{{ t('home') }}</NuxtLink>
          <NuxtLink to="/about" class="hover:text-gray-400">{{ t('about') }}</NuxtLink>
          <NuxtLink to="/services" class="hover:text-gray-400">{{ t('services') }}</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-gray-400">{{ t('contact') }}</NuxtLink>
        </nav>

        <div class="flex items-center ">
          <button @click="toggleMenu" class="md:hidden text-2xl mr-4">
            &#9776;
          </button>
          <select @change="changeLocale" class="bg-gray-800 border-none text-white outline-none">
            <option value="cn">中文</option>
            <option value="en">English</option>
          </select>

          <UButton square variant="ghost" color="black"
            :icon="$colorMode.preference === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun'"
            @click="toggleColorMode" />
        </div>
      </div>

    </div>
    <transition name="menu-slide">
      <nav v-if="isOpen" class="md:hidden bg-gray-700 relative z-0">
        <NuxtLink to="/" class="block p-4 hover:bg-gray-600">{{ t('home') }}</NuxtLink>
        <NuxtLink to="/about" class="block p-4 hover:bg-gray-600">{{ t('about') }}</NuxtLink>
        <NuxtLink to="/services" class="block p-4 hover:bg-gray-600">{{ t('services') }}</NuxtLink>
        <NuxtLink to="/contact" class="block p-4 hover:bg-gray-600">{{ t('contact') }}</NuxtLink>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const isOpen = ref(false);
const { t, locale } = useI18n();

const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const changeLocale = (event) => {
  locale.value = event.target.value;
};
</script>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  max-height: 0;
}

.menu-slide-enter-to,
.menu-slide-leave-from {
  max-height: 14rem;
  /* 根据内容调整 */
}
</style>
