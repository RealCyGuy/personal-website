<template>
  <div class="bg-slate-900 text-pink-400 min-h-screen overflow-x-hidden">
    <div :style="[mounted ? '' : 'display: none']">
      <NavBar />
      <div class="mx-12 md:mx-20 mt-8 md:mt-16 eoverflow-x-hidden">
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});
</script>

<style>
.page-enter-active,
.page-leave-active,
.page-enter-active h1,
.page-leave-active h1 {
  @apply duration-500;
}

.page-enter-from,
.page-leave-to {
  @apply opacity-0;
}

.page-enter-from h1 {
  @apply -translate-x-full;
}

.page-leave-to h1 {
  @apply translate-x-full;
}
</style>
