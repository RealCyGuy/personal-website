<template>
  <div>
    <h1 class="mb-5">Projects</h1>
    <h2 class="mb-3">Here's a list of some things I made.</h2>
    <Project v-for="project in projects" :project="project" />
  </div>
</template>

<script setup lang="ts">
import type { Project } from "@/types";

useHead({
  title: "Projects",
});

const { data } = await useAsyncData("projects", () =>
  queryContent<Project>("/projects/").find()
);

let projects = data.value!;
projects.sort((a, b) => {
  return b.date.localeCompare(a.date);
});
</script>
