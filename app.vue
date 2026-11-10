<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  noscript: [{ innerHTML: '<link rel="stylesheet" href="/noscript.css">' }],
});

useSeoMeta({
  themeColor: "#446ada",
});

useSchemaOrg([
  definePerson({
    name: "Cyrus Yip",
    sameAs: ["https://github.com/realcyguy"],
  }),
]);
</script>
