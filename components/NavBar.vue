<template>
  <nav class="flex justify-between px-5 py-8 text-lg sticky w-full top-0 bg-slate-900 overflow-hidden md:px-10"
    :class="[scrollY > 50 ? '-translate-y-full duration-500' : 'duration-200']">
    <NuxtLink to="/" class="px-3 hover-underline">
      <span class="animated-underline block">Cyrus Yip</span>
    </NuxtLink>
    <ol
      class="flex fixed h-screen w-screen left-0 top-0 flex-col bg-slate-900 md:bg-transparent md:flex-row md:h-auto md:w-auto md:static md:flex md:opacity-100 md:visible justify-center list-[decimal-leading-zero] list-inside marker:text-pink-400 text-pink-500 duration-500 items-center"
      :class="[toggled ? '' : 'invisible opacity-0 top-[-100%]']">
      <NuxtLink to="/" class="px-3 hover:text-pink-400 mb-10 md:mb-0">
        <li class="animated-underline duration-50">About</li>
      </NuxtLink>
      <NuxtLink to="/projects" class="px-3 hover:text-pink-400 mb-10 md:mb-0">
        <li class="animated-underline duration-50">Projects</li>
      </NuxtLink>
      <NuxtLink to="/social" class="px-3 hover:text-pink-400 mb-10 md:mb-0">
        <li class="animated-underline duration-50">Social</li>
      </NuxtLink>
      <NuxtLink to="/contact" class="px-3 hover:text-pink-400">
        <li class="animated-underline duration-50">Contact</li>
      </NuxtLink>
    </ol>
    <button class="md:hidden z-10 w-8 -inline-block relative group" @click="toggle" aria-label="Menu"
      :aria-expanded="toggled">
      <div class="w-full h-1 bg-pink-500 group-hover:bg-pink-400 absolute duration-500 top-0 rounded group-aria-expanded:top-1/2 group-aria-expanded:rotate-45 group-aria-expanded:-translate-y-1/2 group-aria-expanded rotate-[540deg]"></div>
      <div class="w-full h-1 bg-pink-500 group-hover:bg-pink-400 absolute duration-500 top-1/2 -translate-y-1/2 rounded group-aria-expanded:w-0 rotate-[540deg] group-aria-expanded:rotate-0 left-1/2 -translate-x-1/2 group-aria-expanded:opacity-0"></div>
      <div class="w-full h-1 bg-pink-500 group-hover:bg-pink-400 absolute duration-500 top-full -translate-y-full rounded group-aria-expanded:top-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:-translate-y-1/2 rotate-[540deg]"></div>
    </button>
  </nav>
</template>

<style scoped>
.animated-underline {
  @apply relative overflow-hidden;
}

.animated-underline::after {
  @apply absolute bottom-0 left-1/2 opacity-0 rounded duration-500 ease-in bg-pink-400 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-500 h-[0.12em] w-full;
  content: "";
  transform: translateX(-150%);
}

a:hover .animated-underline::after,
ol a:focus .animated-underline::after,
ol .router-link-active .animated-underline::after {
  @apply opacity-100 ease-out;
  transform: translateX(-50%);
}
</style>

<script setup lang="ts">
import { animate, stagger } from "motion";

const toggled = ref(false);

function toggle() {
  toggled.value = !toggled.value;
  document.body.classList.toggle("fixed");
  document.body.classList.toggle("overflow-y-scroll");
}

const scrollY = ref(0);
onMounted(() => {
  animate("nav ol a", { y: [-100, 0] }, { duration: 1, delay: stagger(0.1) });
  animate("nav>a, nav button", { opacity: [0, 1] }, { duration: 1, delay: stagger(0.5) });
  // document.body.classList.add("md:static", "md:overflow-y-auto");
  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY;
  });
});

const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    toggled.value = false;
    document.body.classList.remove("fixed");
    document.body.classList.toggle("overflow-y-scroll");
  }
);
</script>
