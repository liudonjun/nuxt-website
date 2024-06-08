<template>
  <header class="bg-gray-800 text-white">
    <div class="container mx-auto flex justify-between items-center p-4">
      <div class="text-xl font-bold">
        <NuxtLink to="/">Nuxt-demo</NuxtLink>
      </div>
      <nav class="hidden md:flex space-x-4">
        <NuxtLink to="/" class="hover:text-gray-400">首页</NuxtLink>
        <NuxtLink to="/about" class="hover:text-gray-400">关于</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-gray-400">联系</NuxtLink>
      </nav>
      <button @click="toggleMenu" class="md:hidden text-2xl">
        &#9776;
      </button>
    </div>
    <transition name="menu-slide">
      <nav v-if="isOpen" class="md:hidden bg-gray-700">
        <NuxtLink to="/" class="block p-4 hover:bg-gray-600">首页</NuxtLink>
        <NuxtLink to="/about" class="block p-4 hover:bg-gray-600">关于</NuxtLink>
        <NuxtLink to="/contact" class="block p-4 hover:bg-gray-600">联系</NuxtLink>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
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
  max-height: 10rem; /* 根据内容调整 */
}
</style>
