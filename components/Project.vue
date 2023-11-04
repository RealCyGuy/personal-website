<template>
  <div
    class="flex sm:gap-3 mb-1 rounded bg-white bg-opacity-0 sm:hover:bg-opacity-5 duration-200 ease-out sm:px-5 py-3 flex-col sm:flex-row"
    :id="project.title"
  >
    <span class="opacity-90">
      {{ new Date(project.date).getUTCFullYear() }}
    </span>
    <div class="flex justify-between flex-col flex-1">
      <div class="flex justify-between flex-col sm:flex-row mb-1 sm:mb-0">
        <span class="font-bold">
          {{ project.title }}
        </span>
        <span class="sm:max-w-[50%] sm:text-right break-keep">
          <span
            v-for="(tag, index) in project.tags.sort((a, b) =>
              a.localeCompare(b)
            )"
          >
            <span class="opacity-95 hover:opacity-100 duration-50">
              {{ tag.replace(" ", "&nbsp;") }}
            </span>
            <span v-if="index < project.tags.length - 1">&nbsp;&middot; </span>
          </span>
        </span>
      </div>
      <div class="flex justify-between flex-col sm:flex-row sm:items-end">
        <span class="opacity-90">
          <ContentRenderer :value="description" class="prose" />
        </span>
        <div class="flex gap-1 text-lg -translate-x-1 sm:translate-x-0">
          <NuxtLink
            v-for="link in links"
            :to="link.url"
            class="hover:text-pink-300 pl-2"
            target="_blank"
            :aria-label="link.label"
            :title="link.label"
          >
            <Icon :name="link.icon" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from "@/types";
import { transformContent } from "@nuxt/content/transformers";

const props = defineProps<{
  project: Project;
}>();

const description = await transformContent(
  "content:dummy.md",
  props.project.description
);

let links: { label: string; icon: string; url: string }[] = [];
for (const key in props.project.links) {
  switch (key) {
    case "website":
      links.push({
        label: "Link to " + props.project.title,
        icon: "ph:globe-light",
        url: props.project.links[key]!,
      });
      break;
    case "github":
      links.push({
        label: "Link to GitHub",
        icon: "grommet-icons:github",
        url: "https://github.com/" + props.project.links[key],
      });
      break;
    case "github2":
      links.push({
        label: "Link to 2nd GitHub",
        icon: "grommet-icons:github",
        url: "https://github.com/" + props.project.links[key],
      });
      break;
    case "discord":
      links.push({
        label: "Link to Discord server",
        icon: "ic:baseline-discord",
        url: props.project.links[key]!,
      });
      break;
    case "pypi":
      links.push({
        label: "Link to PyPI",
        icon: "simple-icons:pypi",
        url: "https://pypi.org/project/" + props.project.links[key],
      });
      break;
    case "npm":
      links.push({
        label: "Link to npm",
        icon: "mdi:npm-variant",
        url: "https://www.npmjs.com/package/" + props.project.links[key],
      });
      break;
  }
}
</script>
