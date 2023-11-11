<template>
  <div>
    <h1 class="text-5xl font-black">
      <span class="hello">Hello</span>
      <span id="words"
        ><span>, </span><span>I </span><span>am </span>
        <span
          class="title bg-gradient-to-r from-[#9762eb] to-[#e49ef1] inline-block text-transparent bg-clip-text"
        >
          Cyrus Yip</span
        ><span>.</span>
      </span>
    </h1>
    <div
      id="content"
      class="text-xl sm:text-2xl lg:text-3xl flex flex-col mt-10 gap-8"
    >
      <span
        >I was born at a very, very young age. In fact, I was one of the
        youngest living things during that time.</span
      >
      <div>
        <span
          >Here are 4 random selections out of {{ projects.length }}
          <SimpleLink to="/projects">projects</SimpleLink> I've created.</span
        >
        <div
          class="text-sm sm:text-base lg:text-lg grid 2xl:grid-cols-2 gap-2 mt-2"
        >
          <div
            v-for="project in projects.slice(0, 4)"
            class="flex flex-col px-3 py-2 gap-1"
          >
            <span>
              <SimpleLink
                :to="'/projects#' + project.title"
                class="font-bold"
                >{{ project.title }}</SimpleLink
              >
              made with
              <span
                v-for="(tag, index) in project.tags.sort((a, b) =>
                  a.localeCompare(b)
                )"
              >
                <span>
                  {{ tag.replace(" ", "&nbsp;") }}
                </span>
                <span
                  v-if="
                    index < project.tags.length - 1 && project.tags.length > 2
                  "
                  >,
                </span>
                <span v-if="index == project.tags.length - 2"> and </span>
              </span>
              in {{ new Date(project.date).getUTCFullYear() }}.
            </span>
            <span class="opacity-90">{{ project.description }}</span>
          </div>
        </div>
      </div>
      <span
        >You can also reach me and view my other stuff in my
        <SimpleLink to="/social">social links</SimpleLink>. Also,
        <SimpleLink to="/square">square</SimpleLink>?</span
      >
      <span
        >Feel free to
        <span class="inline-block overflow-clip">
          <NuxtLink
            class="relative bg-gradient-to-br from-[#9762eb] to-[#e49ef1] text-slate-900 hover:text-opacity-80 hover:text-white focus:text-opacity-80 focus:text-white px-3 py-1.5 sm:px-6 sm:py-3 rounded-[40px] inline-block z-10 font-bold duration-500 hover:rounded-none focus:rounded-none transition-all"
            to="contact"
            >contact me</NuxtLink
          ></span
        >. (I even made it a button!)</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { timeline, stagger, spring } from "motion";

import type { Project } from "@/types";

useServerSeoMeta({
  description:
    "Cyrus Yip's personal website. I made this website with Nuxt 3 👍.",
});

const { data } = await useAsyncData("projects", () =>
  queryContent<Project>("/projects/").find()
);

let projects = data.value!.sort(() => 0.5 - Math.random());
const m = useState("mounted", () => false);

onMounted(() => {
  if (m.value) return;
  m.value = true;

  timeline([
    [".hello", { color: ["white", "inherit"] }, { duration: 1.5, delay: 0.8 }],
    [
      "#words span",
      { opacity: [0, 1] },
      { duration: 0.8, delay: stagger(0.15), at: "-0.5" },
    ],
    [".title", { color: ["inherit", "transparent"] }, { duration: 3 }],
    [
      "#content>span, #content>div>span, #content>div>div>div",
      { opacity: [0, 1], x: [-40, 0] },
      { duration: 1.5, delay: stagger(0.2), easing: spring(), at: "<" },
    ],
    [
      "nav ol a",
      { y: [-100, 0] },
      { duration: 1, delay: stagger(0.1), at: "-1" },
    ],
    [
      "nav>a, nav button",
      { opacity: [0, 1] },
      { duration: 1, delay: stagger(0.5), at: "<" },
    ],
    ["footer", { opacity: [0, 1] }, { at: "-0.2" }],
  ]);
});
</script>
