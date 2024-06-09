<script lang="ts" setup>
const locale = useState<string>('locale.i18n')

console.log('locale', locale);

</script>

<template>
  <Html :lang="locale">

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
