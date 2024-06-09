<script lang="ts" setup>
</script>

<template>
  <Html :lang="'zh'">
  <Body
    class="bg-white dark:bg-slate-900 text-gray-800 antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200">
    <NuxtLayout>
      <Hearder />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </Body>

  </Html>
</template>
