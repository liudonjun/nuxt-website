<template>
  <div>323</div>
</template>

<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)


onMounted(async () => {
  const { data, pending, error, refresh } = await useFetch('https://api.nuxt.com/modules/api/modules',)

  console.log('onMounted', data, pending, error, refresh);
})
</script>