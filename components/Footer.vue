<template>
  <footer class="bg-white dark:bg-gray-800 text-white border-t-2 border-slate-200 dark:border-gray-700">
    <div class="container mx-auto grid grid-cols-1 gap-8 px-4 sm:px-6 pt-5 lg:px-8 md:grid-cols-3 mb-4">
      <!-- Logo and About Section -->
      <div>
        <h2 class="text-xl font-bold mb-4 text-gray-400">Nuxt</h2>
        <p class="text-gray-400">Vue Framework</p>
        <LanguageChange />
        <!-- <select @change="changeLocale" class="bg-gray-400 text-gray-800 dark:bg-gray-400 border-none text-white outline-none mt-2">
          <option value="cn">中文</option>
          <option value="en">English</option>
        </select> -->
      </div>
      <!-- Navigation Links -->
      <div>
        <h2 class="text-xl font-bold mb-4 text-gray-400">快速链接</h2>
        <ul class="space-y-2">
          <li>
            <NuxtLink :to="localePath('/')" class="text-gray-400 hover:underline">首页</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/about')" class="text-gray-400 hover:underline">关于</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/services')" class="text-gray-400 hover:underline">服务</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/contact')" class="text-gray-400 hover:underline">联系</NuxtLink>
          </li>
        </ul>
      </div>
      <!-- Contact and Social Links -->
      <div>
        <h2 class="text-xl font-bold mb-4 text-gray-400">联系我们</h2>
        <p class="text-gray-400 mb-2">邮箱：liudongjun@ldjun.cn</p>
        <!-- <p class="text-gray-400 mb-2">电话：+123 456 7890</p> -->
        <div class="flex space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
            class="text-gray-400 dark:hover:text-green-600">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
            class="text-gray-400 dark:hover:text-green-600">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            class="text-gray-400 dark:hover:text-green-600">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            class="text-gray-400 dark:hover:text-green-600">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- <div class="text-center text-gray-500 text-sm mt-6">
      &copy; 2024 我的Logo. 版权所有。
    </div> -->
    <div
      class="flex items-center border-t-2 border-slate-200 dark:border-gray-700 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3 !py-6">
      <!--[-->
      <div class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"><!--[--><!--[--><a
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          aria-label="Nuxt on X" href="https://x.com/nuxt_js" rel="noopener noreferrer"
          target="_blank"><!--[--><!--[--><span class="i-simple-icons-x flex-shrink-0 h-5 w-5"
            aria-hidden="true"></span><!--]--><!--[--><!----><!--]--><!--[--><!----><!--]--><!--]--></a><!--]--><!--[--><a
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          aria-label="Nuxt on Discord" href="https://discord.com/invite/nuxt" rel="noopener noreferrer"
          target="_blank"><!--[--><!--[--><span class="i-simple-icons-discord flex-shrink-0 h-5 w-5"
            aria-hidden="true"></span><!--]--><!--[--><!----><!--]--><!--[--><!----><!--]--><!--]--></a><!--]--><!--[--><a
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          aria-label="Nuxt on GitHub" href="https://github.com/nuxt/nuxt" rel="noopener noreferrer"
          target="_blank"><!--[--><!--[--><span class="i-simple-icons-github flex-shrink-0 h-5 w-5"
            aria-hidden="true"></span><!--]--><!--[--><!----><!--]--><!--[--><!----><!--]--><!--]--></a><!--]--><!--]-->
      </div>
      <div class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"><!--[--><!----><!--]--></div>
      <div class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1">
        <!--[-->
        <p class="text-gray-500 dark:text-gray-400 text-sm"> Copyright © 2024 Nuxt
          <!-- <a
            href="https://github.com/nuxt/nuxt/blob/main/LICENSE" rel="noopener noreferrer" target="_blank"
            class="hover:underline"> MIT License 
          </a> -->
        </p>
        <!--]-->
      </div><!--]-->
    </div>
  </footer>
</template>

<script setup>

const { t, locale } = useI18n();

const localePath = useLocalePath();

const changeLocale = (event) => {
  locale.value = event.target.value;
};
</script>

<style scoped>
/* Add FontAwesome CDN for social media icons if needed */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>
