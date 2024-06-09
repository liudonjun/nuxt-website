<script setup>
// const workbox = await window.$workbox;
// if (workbox) {
//   workbox.addEventListener('installed', (event) => {
//     console.log('workbox installed', workbox, event);
//     // If we don't do this we'll be displaying the notification after the initial installation, which isn't perferred.
//     if (event.isUpdate) {
//       // whatever logic you want to use to notify the user that they need to refresh the page.
//     }
//   });
// }
</script>

<template>
  <div>
    <slot />
  </div>
</template>
