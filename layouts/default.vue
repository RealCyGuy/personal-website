<template>
  <div class="bg-slate-900 text-pink-400 min-h-screen">
    <div :style="[mounted ? '' : 'display: none']">
      <NavBar />
      <div class="mx-12 md:mx-20">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});
</script>
