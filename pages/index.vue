<template>
  <div>
    <span class="text-xl sm:text-2xl">Hello, I am</span>
    <h1>Cyrus Yip</h1>
    <div class="mt-10 mb-14 flex justify-between flex-wrap gap-y-5">
      <p class="text-xl sm:text-2xl">Here is a spinning square:</p>
      <div class="flex-1 px-8">
        <div
          class="bg-pink-400 w-1/6 min-w-[5rem] max-w-[8rem] aspect-square m-5 animate-spin-slow mx-auto cursor-pointer relative overflow-hidden [-webkit-tap-highlight-color:transparent]"
          @click="click"
          :style="`filter: hue-rotate(${degrees}deg)`"
        >
          <div
            class="animate-spin-slow-reverse w-full h-full"
            ref="wave_container"
          >
            <Wave
              v-for="wave in waves"
              :style="`left: ${wave[0]}px; top: ${wave[1]}px`"
              :key="wave[2]"
            ></Wave>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const degrees = ref(0);
const waves = ref<[number, number, number][]>([]);
const wave_container = ref<HTMLDivElement>();
let clicks = 0;

function click(event: MouseEvent) {
  degrees.value++;
  if (degrees.value >= 360) {
    degrees.value = 0;
  }
  if (!wave_container.value) {
    return;
  }
  const rect = wave_container.value.getBoundingClientRect();
  waves.value.push([
    event.clientX - rect.left,
    event.clientY - rect.top,
    clicks++,
  ]);
  setTimeout(() => {
    waves.value.shift();
  }, 3000);
}
</script>
