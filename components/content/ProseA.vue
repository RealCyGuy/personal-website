<template>
  <NuxtLink :href="href" :target="target" class="underline hover:opacity-80">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  href: string;
  target?: string;
}>();
</script>
