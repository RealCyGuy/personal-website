<template>
  <div
    ref="wave"
    class="absolute w-96 h-96 radial-gradient rounded-full origin-center -mx-48 -my-48"
  ></div>
</template>

<script setup lang="ts">
import { animate } from "motion";

const wave = ref<HTMLDivElement>();
onMounted(() => {
  animate(
    wave.value!,
    { opacity: [0, 0.2], scale: [0, 1] },
    { duration: 1.5, easing: "ease-out" }
  );
  animate(wave.value!, { opacity: [0.2, 0] }, { duration: 0.5, delay: 1 });
});
</script>

<style>
.radial-gradient {
  background: radial-gradient(circle, #ffffff01, #ffffff, #e1e1e1);
}
</style>
