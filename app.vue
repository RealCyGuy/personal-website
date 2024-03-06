<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useServerSeoMeta({
  ogSiteName: "Cyrus Yip",
  themeColor: "#f472b6",
});

useSchemaOrg([
  definePerson({
    name: "Cyrus Yip",
    sameAs: ["https://github.com/realcyguy"],
  }),
]);
</script>
