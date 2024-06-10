<script lang="ts" setup>

const switchLocalePath = useSwitchLocalePath()

const availableLocales = {
  cn: {
    name: 'Chinese',
    iso: 'cn',
    flag: 'soft-ice-cream',
  },
  en: {
    name: 'English',
    iso: 'en',
    flag: 'soft-ice-cream',
  },
}

const { locale } = useI18n()

const local = computed(() => {
  return locale.value
})
</script>

<template>
  <div class="w-40">
    <NuxtLink v-for="lang in availableLocales" :key="lang.iso" :to="switchLocalePath(lang.iso)"
      class="flex w-full text-gray-400 cursor-pointer items-center mt-2 justify-between py-2 px-3" :class="{
        'text-white bg-gray-400 dark:bg-gray-500/50':
          local === lang.iso,
        'hover:bg-gray-200 dark:hover:bg-gray-700/30':
          local !== lang.iso,
      }">
      <span class="truncate">
        {{ lang.name }}
      </span>
      <span class="flex items-center justify-center text-sm">
        <UIcon :name="lang.flag" class="text-base" />
      </span>
    </NuxtLink>
  </div>
</template>
