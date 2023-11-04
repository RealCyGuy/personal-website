<template>
  <div
    class="bg-slate-900 text-pink-400 min-h-screen overflow-x-hidden selection:bg-pink-400 selection:bg-opacity-40"
  >
    <div
      :style="[mounted ? '' : 'display: none']"
      class="min-h-screen flex flex-col"
    >
      <NavBar />
      <div class="mx-8 sm:mx-12 md:mx-20 mt-8 md:mt-16 flex-1">
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const mounted = ref(false);
const m = useState("mounted", () => false);
const route = useRoute();
onMounted(() => {
  mounted.value = true;
  if (route.name != "index") {
    m.value = true;
  }
});
</script>

<style>
.page-enter-active,
.page-leave-active,
.page-enter-active .title,
.page-leave-active .title {
  @apply duration-500 ease-in-out;
}

.page-enter-from,
.page-leave-to {
  @apply opacity-0;
}

.page-enter-from .title {
  @apply -translate-x-32;
}

.page-leave-to .title {
  @apply translate-x-64;
}
</style>
