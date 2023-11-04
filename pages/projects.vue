<template>
  <div>
    <h1 class="title mb-5">Projects</h1>
    <h2 class="mb-3">Here's a list of some things I made.</h2>
    <Project v-for="project in projects" :project="project" />
  </div>
</template>

<script setup lang="ts">
import type { Project } from "@/types";

useHead({
  title: "Projects",
});

useServerSeoMeta({
  description:
    "An extensive list of projects that Cyrus Yip has made. Showcasing his skills in web design, bot development, and more.",
});

const { data } = await useAsyncData("projects", () =>
  queryContent<Project>("/projects/").find()
);

let projects = data.value!;
projects.sort((a, b) => {
  return b.date.localeCompare(a.date);
});
</script>
