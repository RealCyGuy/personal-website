<template>
  <div class="mb-5">
    <h3 class="pt-2 mb-4" :id="title.toLowerCase().replace(' ', '_')">{{ title }}</h3>
    <div class="grid justify-evenly grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>();
</script>
