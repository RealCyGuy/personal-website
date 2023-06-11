<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Cyrus Yip` : "Cyrus Yip";
  },
});

useServerSeoMeta({
  ogSiteName: "Cyrus Yip",
  themeColor: "#f472b6",
});

useSchemaOrg([
  defineWebSite({
    name: "Cyrus Yip",
  }),
  defineWebPage(),
  definePerson({
    name: "Cyrus Yip",
    sameAs: ["https://github.com/realcyguy"],
  }),
]);
</script>
