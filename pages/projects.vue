<template>
  <div>
    <h1>Projects</h1>
    <div v-for="project in data">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
    </div>
    <p>{{ data }}</p>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Projects"
});

const { data } = await useAsyncData('projects', () => queryContent('/projects/').find())
</script>
