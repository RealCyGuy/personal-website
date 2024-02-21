<template>
  <div>
    <h1 class="title mb-5">Projects</h1>
    <h2 class="mb-3">Here's a list of some things I made.</h2>
    <div class="flex gap-x-2 mb-5 flex-wrap">
      <p>Filter by status:</p>
      <div class="flex gap-1 bg-white bg-opacity-5 p-1 rounded-sm flex-wrap">
        <div>
          <input
            class="appearance-none peer focus:outline-none"
            type="checkbox"
            id="active"
            value="Active"
            v-model="filters"
          />
          <label
            class="peer-checked:bg-opacity-20 rounded px-3 py-1 bg-white bg-opacity-0 inline-flex items-center justify-center gap-2 cursor-pointer duration-500 hover:bg-opacity-10 peer-focus-visible:outline-dashed"
            for="active"
            ><div class="w-2 h-2 bg-green-400 rounded-full"></div>
            Active</label
          >
        </div>
        <div>
          <input
            class="appearance-none peer focus:outline-none"
            type="checkbox"
            id="Paused"
            value="Paused"
            v-model="filters"
          />
          <label
            class="peer-checked:bg-opacity-20 rounded px-3 py-1 bg-white bg-opacity-0 inline-flex items-center justify-center gap-2 cursor-pointer duration-500 hover:bg-opacity-10 peer-focus-visible:outline-dashed"
            for="Paused"
            ><div class="w-2 h-2 bg-gray-400 rounded-full"></div>
            Paused</label
          >
        </div>
        <div>
          <input
            class="appearance-none peer focus:outline-none"
            type="checkbox"
            id="Stopped"
            value="Stopped"
            v-model="filters"
          />
          <label
            class="peer-checked:bg-opacity-20 rounded px-3 py-1 bg-white bg-opacity-0 inline-flex items-center justify-center gap-2 cursor-pointer duration-500 hover:bg-opacity-10 peer-focus-visible:outline-dashed"
            for="Stopped"
            ><div class="w-2 h-2 bg-red-500 rounded-full"></div>
            Offline</label
          >
        </div>
      </div>
    </div>
    <div v-for="project in filteredProjects" :key="project._id">
      <Project :project="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProjectStatus } from "@/types";
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
const filters = ref([]);
const filteredProjects = computed(() => {
  if (filters.value.length === 0) {
    return projects;
  }
  const filter: ProjectStatus = ["Active", "Paused", "Stopped"].indexOf(
    filters.value[0]
  );
  return projects.filter((project) => {
    const status = project.status ?? ProjectStatus.Active;
    return status === filter;
  });
});
watch(filters, () => {
  if (filters.value.length >= 2) {
    filters.value.shift();
  }
});
</script>
