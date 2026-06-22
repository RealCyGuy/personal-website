<template>
  <div>
    <div class="relative overflow-clip [clip-path:inset(0)]">
      <div
        class="w-full h-svh fixed left-0 top-0 ml-auto flex z-10 pointer-events-none"
      >
        <div class="h-full w-full md:w-2/3 md:translate-x-1/2">
          <canvas
            id="visual-canvas"
            class="h-full w-full relative opacity-0"
          ></canvas>
        </div>
      </div>
      <section class="h-svh flex flex-col justify-end w-full">
        <div class="left-0 bottom-0 w-full z-20">
          <div class="flex justify-between md:text-4xl px-5">
            <span>Develop</span>
            <span>Design</span>
            <span>Word 3</span>
          </div>
          <div
            class="text-9xl md:text-[10rem] lg:text-[12rem] leading-none whitespace-nowrap overflow-x-clip"
          >
            <div class="name-container">
              <div class="names flex">
                <h1 class="px-5 lg:px-10" ref="first">Cyrus Yip</h1>
                <span
                  class="px-5 lg:px-10"
                  aria-hidden="true"
                  v-for="index in 10"
                  :key="index"
                  >Cyrus Yip</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-16 sm:py-24 md:py-32 auto-mx mr-10">
        <Split
          text="I was born at a very, very young age. In fact, I was one of the youngest living things during that time."
          class="intro-text text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] flex-1 max-w-screen-2xl leading-none gap-x-4 md:gap-x-6 lg:gap-x-10"
        />
      </section>
      <section
        class="skills auto-mx flex flex-wrap gap-y-4 justify-between pb-24 text-sm sm:text-base lg:text-lg"
      >
        <div
          class="w-full sm:w-[45%] md:w-[40%] flex flex-col gap-y-4 lg:gap-5"
        >
          <SkillSection title="Web development">
            <SkillLink to="https://nuxt.com">Nuxt</SkillLink>,
            <SkillLink to="https://vuejs.org">Vue.js</SkillLink>,
            <SkillLink to="https://gsap.com">GSAP</SkillLink>,
            <SkillLink to="https://tailwindcss.com">Tailwind CSS</SkillLink>,
            <SkillLink to="https://en.wikipedia.org/wiki/HTML">HTML</SkillLink>,
            <SkillLink to="https://en.wikipedia.org/wiki/CSS">CSS</SkillLink>,
            <SkillLink to="https://en.wikipedia.org/wiki/JavaScript"
              >JavaScript</SkillLink
            >,
            <SkillLink to="https://www.typescriptlang.org/"
              >TypeScript</SkillLink
            >
          </SkillSection>
          <SkillSection title="Bot development">
            <SkillLink to="https://www.python.org">Python</SkillLink>,
            <SkillLink to="https://discordpy.readthedocs.io/en/stable/"
              >discord.py</SkillLink
            >, <SkillLink to="https://pycord.dev/">pycord</SkillLink>,
            <SkillLink to="https://www.mongodb.com">MongoDB</SkillLink>,
            <SkillLink to="https://github.com/tesseract-ocr/tesseract"
              >Tesseract OCR</SkillLink
            >
          </SkillSection>
          <SkillSection title="Game development">
            <SkillLink to="https://godotengine.org">Godot</SkillLink>,
            <SkillLink
              to="https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html"
              >GDScript</SkillLink
            >, <SkillLink to="https://unity.com">Unity</SkillLink>,
            <SkillLink to="https://aseprite.org">Aseprite</SkillLink>
          </SkillSection>
          <SkillSection title="Script development">
            <SkillLink to="https://www.rust-lang.org">Rust</SkillLink>,
            <SkillLink to="https://www.autohotkey.com">AutoHotkey</SkillLink>
          </SkillSection>
        </div>
        <div
          class="w-full sm:w-[45%] md:w-[40%] flex flex-col gap-y-4 lg:gap-5"
        >
          <SkillSection title="Automation">
            <SkillLink to="https://www.git-scm.com">Git</SkillLink>,
            <SkillLink to="https://github.com/features/actions"
              >GitHub Actions</SkillLink
            >
          </SkillSection>
          <SkillSection title="Web design">
            <SkillLink to="https://figma.com">Figma</SkillLink>
          </SkillSection>
          <SkillSection title="Media editing">
            <SkillLink
              to="https://www.blackmagicdesign.com/ca/products/davinciresolve"
              >DaVinci Resolve</SkillLink
            >,
            <SkillLink to="https://tenacityaudio.org">Tenacity</SkillLink>
          </SkillSection>
          <SkillSection title="Open-source contribution">
            <SkillLink
              to="https://github.com/modmail-dev/Modmail/issues?q=author%3Arealcyguy+is%3Ap"
              >modmail-dev/Modmail</SkillLink
            >,
            <SkillLink
              to="https://github.com/monkeytypegame/monkeytype/issues?q=author%3Arealcyguy+is%3Apr"
              >monkeytypegame/monkeytype</SkillLink
            >,
            <SkillLink
              to="https://github.com/search?q=author%3Arealcyguy++-owner%3Arealcyguy+&type=pullrequests"
              >more</SkillLink
            >!
          </SkillSection>
        </div>
      </section>
    </div>
    <section class="relative bg-blue-950 bg-opacity-20 py-20">
      <div class="mb-12 lg:mb-20 auto-mx">
        <Split
          text="Here are four random selections of projects I've created."
          class="projects-text text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] flex-1 max-w-screen-2xl leading-none gap-x-4 md:gap-x-6 lg:gap-x-10"
        />
      </div>
      <div class="auto-mx pb-10">
        <div
          class="text-sm sm:text-base lg:text-lg grid 2xl:grid-cols-2 gap-2 my-5 md:my-10"
        >
          <div
            v-for="project in projects!.slice(0, 4)"
            class="flex flex-col py-2 gap-1"
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
                  a.localeCompare(b),
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
        <SimpleLink to="/projects" class="text-lg md:text-2xl"
          >View all {{ projects!.length }} projects.</SimpleLink
        >
      </div>
    </section>
    <section class="h-[150vh] end-section">
      <div class="min-h-screen flex justify-center items-center sticky top-0">
        <div class="auto-mx">
          <Split
            text="Why do people choose to sleep? I think... It is because they're afraid to awaken from the dream."
            class="end-text text-3xl flex-1 max-w-screen-2xl leading-none gap-x-2"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  description:
    "Cyrus Yip's personal website. I am a developer, designer, and word 3.",
});

const m = useState("mounted", () => false);
const { data } = await useAsyncData("projects", () => {
  return queryCollection("projects").all();
});

const { data: projects } = await useAsyncData("randomprojects", () =>
  Promise.resolve(data.value!.sort(() => 0.5 - Math.random())),
);

const { $gsap, $ScrollTrigger } = useNuxtApp();
let animationFrameId: number | null = null;
let removeCanvasEvents: (() => void) | null = null;
let observer: IntersectionObserver | null = null;
let resizeTimer: NodeJS.Timeout | null = null;
const first = ref<HTMLElement | null>(null);

function setup() {
  $gsap.killTweensOf(".names");

  $gsap.fromTo(
    ".names",
    { x: 0 },
    {
      x: -first.value!.clientWidth,
      ease: "none",
      duration: 6,
      repeat: -1,
    },
  );
}

onMounted(() => {
  handleAnimation();

  const tl = $gsap.timeline({
    defaults: { ease: "power3.out" },
  });
  tl.from(".names span", {
    y: "50%",
    stagger: 0.3,
    duration: 0.5,
    ease: "power1.in",
  });

  $gsap.to(".names", {
    x: -first.value!.clientWidth,
    ease: "none",
    duration: 6,
    repeat: -1,
  });

  const handleGsapResize = () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setup();
    }, 100);
  };
  window.addEventListener("resize", handleGsapResize);

  $gsap.to(".name-container", {
    x: "-50%",
    scrollTrigger: {
      trigger: ".names",
      start: "bottom bottom",
      end: "top top",
      scrub: true,
    },
  });

  $gsap.from(".intro-text span", {
    y: "50%",
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".intro-text",
      start: "top bottom",
      end: "bottom 80%",
      scrub: true,
    },
  });

  $gsap.from(".projects-text span", {
    y: "50%",
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".projects-text",
      start: "top bottom",
      end: "bottom 80%",
      scrub: true,
    },
  });

  $gsap.from(".end-text span", {
    y: "50%",
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".end-section",
      start: "top 50%",
      end: "bottom 80%",
      scrub: true,
    },
  });

  $gsap.utils.toArray(".skills>div>div>div").forEach((el) => {
    $gsap.from(el as HTMLElement, {
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: el as HTMLElement,
        start: "top bottom",
      },
    });
  });

  const canvas = document.getElementById("visual-canvas")! as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;

  let width = canvas.clientWidth;
  let height = canvas.clientHeight;

  // Set initial canvas resolution
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Math Setup: regular icosahedron
  const phi = (1 + Math.sqrt(5)) / 2;
  const baseVertices: [number, number, number][] = [
    [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
    [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
    [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
  ];

  baseVertices.forEach(v => {
    const len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    v[0] /= len;
    v[1] /= len;
    v[2] /= len;
  });

  const baseFaces = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
  ];

  function subdivide(vertices: [number, number, number][], faces: number[][]): { vertices: [number, number, number][], faces: number[][] } {
    const newVertices = [...vertices];
    const newFaces: number[][] = [];
    const midpointCache = new Map<string, number>();

    function getMidpoint(p1Idx: number, p2Idx: number): number {
      const key = p1Idx < p2Idx ? `${p1Idx}_${p2Idx}` : `${p2Idx}_${p1Idx}`;
      if (midpointCache.has(key)) return midpointCache.get(key)!;

      const p1 = vertices[p1Idx];
      const p2 = vertices[p2Idx];
      let mx = p1[0] + p2[0];
      let my = p1[1] + p2[1];
      let mz = p1[2] + p2[2];
      const len = Math.sqrt(mx * mx + my * my + mz * mz);
      mx /= len;
      my /= len;
      mz /= len;

      newVertices.push([mx, my, mz]);
      const idx = newVertices.length - 1;
      midpointCache.set(key, idx);
      return idx;
    }

    for (const face of faces) {
      const a = face[0];
      const b = face[1];
      const c = face[2];

      const ab = getMidpoint(a, b);
      const bc = getMidpoint(b, c);
      const ca = getMidpoint(c, a);

      newFaces.push([a, ab, ca]);
      newFaces.push([b, bc, ab]);
      newFaces.push([c, ca, bc]);
      newFaces.push([ab, bc, ca]);
    }

    return { vertices: newVertices, faces: newFaces };
  }

  const subdivided = subdivide(baseVertices, baseFaces);
  const geoVertices = subdivided.vertices;
  const geoFaces = subdivided.faces;

  const numVertices = geoVertices.length;
  const morphedRotated = new Float32Array(numVertices * 3);
  const projected = new Float32Array(numVertices * 2);

  interface FaceData {
    indices: number[];
    centerZ: number;
    centerX: number;
    centerY: number;
    normal: { x: number; y: number; z: number };
  }
  const facesData: FaceData[] = geoFaces.map((f) => ({
    indices: f,
    centerZ: 0,
    centerX: 0,
    centerY: 0,
    normal: { x: 0, y: 0, z: 0 },
  }));

  // State
  let time = 0;
  let windowMouseX = 0;
  let windowMouseY = 0;
  let isMouseOver = false;
  let hasInteracted = false;

  let tiltX = 0;
  let tiltY = 0;
  let autoAngleX = 0;
  let autoAngleY = 0;

  let currentLx = 0;
  let currentLy = 0;
  let currentLz = -3.0;

  const onMouseMove = (e: MouseEvent) => {
    windowMouseX = e.clientX - window.innerWidth / 2;
    windowMouseY = e.clientY - window.innerHeight / 2;
    isMouseOver = true;
    hasInteracted = true;
  };

  const onMouseLeave = () => {
    isMouseOver = false;
  };

  const onTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      windowMouseX = e.touches[0].clientX - window.innerWidth / 2;
      windowMouseY = e.touches[0].clientY - window.innerHeight / 2;
      isMouseOver = true;
      hasInteracted = true;
    }
  };

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseleave", onMouseLeave);
  window.addEventListener("touchmove", onTouchMove, { passive: true });
  window.addEventListener("touchend", onMouseLeave);

  removeCanvasEvents = () => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseleave", onMouseLeave);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onMouseLeave);
    window.removeEventListener("resize", handleGsapResize);
  };

  const handleResize = () => {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const d = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * d;
    canvas.height = height * d;
    ctx.setTransform(d, 0, 0, d, 0, 0);
  };

  window.addEventListener("resize", handleResize);
  const originalRemoveEvents = removeCanvasEvents;
  removeCanvasEvents = () => {
    originalRemoveEvents();
    window.removeEventListener("resize", handleResize);
  };

  let isCanvasVisible = true;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isCanvasVisible = entry.isIntersecting;
        if (isCanvasVisible && !animationFrameId) {
          tick();
        }
      });
    },
    { threshold: 0 }
  );
  observer.observe(canvas);

  // Vertex morphing function (low amplitude to prevent excessive deformation while keeping facets alive)
  function getMorphingVertex(v: [number, number, number], t: number): [number, number, number] {
    const x = v[0], y = v[1], z = v[2];
    const scale = 1.0 + 
      0.025 * Math.sin(2.2 * x + 1.6 * y + 1.0 * t) +
      0.020 * Math.cos(1.8 * z - 1.2 * x + 1.2 * t) +
      0.015 * Math.sin(2.8 * y + 2.0 * z + 1.7 * t);
    return [x * scale, y * scale, z * scale];
  }

  // Animation Loop
  function tick() {
    if (!isCanvasVisible) {
      animationFrameId = null;
      return;
    }

    time += 0.005;

    // Smooth tilt interpolation (dampened for smoother, less sensitive response)
    const targetTiltX = isMouseOver ? -(windowMouseY / (window.innerHeight / 2)) * 0.20 : 0;
    const targetTiltY = isMouseOver ? (windowMouseX / (window.innerWidth / 2)) * 0.20 : 0;
    tiltX += (targetTiltX - tiltX) * 0.04;
    tiltY += (targetTiltY - tiltY) * 0.04;

    autoAngleX += 0.0015;
    autoAngleY += 0.0035;

    const currentAngleX = autoAngleX + tiltX;
    const currentAngleY = autoAngleY + tiltY;

    // Rotation matrices
    const cosX = Math.cos(currentAngleX), sinX = Math.sin(currentAngleX);
    const cosY = Math.cos(currentAngleY), sinY = Math.sin(currentAngleY);

    // Compute morphed and rotated vertices
    for (let i = 0; i < numVertices; i++) {
      const mv = getMorphingVertex(geoVertices[i], time);

      // Rotate Y
      const x1 = mv[0] * cosY + mv[2] * sinY;
      const y1 = mv[1];
      const z1 = -mv[0] * sinY + mv[2] * cosY;

      // Rotate X
      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      const idx = i * 3;
      morphedRotated[idx] = x2;
      morphedRotated[idx + 1] = y2;
      morphedRotated[idx + 2] = z2;
    }

    // Dynamic base radius based on screen size
    const baseRadius = Math.min(width, height) * 0.36;
    const D = 4.0; // Camera distance

    // Project vertices
    for (let i = 0; i < numVertices; i++) {
      const mrIdx = i * 3;
      const mrX = morphedRotated[mrIdx];
      const mrY = morphedRotated[mrIdx + 1];
      const mrZ = morphedRotated[mrIdx + 2];
      const px = (mrX * baseRadius * D) / (D + mrZ) + width / 2;
      const py = (mrY * baseRadius * D) / (D + mrZ) + height / 2;
      
      const pIdx = i * 2;
      projected[pIdx] = px;
      projected[pIdx + 1] = py;
    }

    // Compute faces data
    for (let i = 0; i < facesData.length; i++) {
      const face = facesData[i];
      const f = face.indices;
      
      const r1Idx = f[0] * 3;
      const r2Idx = f[1] * 3;
      const r3Idx = f[2] * 3;

      const r1X = morphedRotated[r1Idx], r1Y = morphedRotated[r1Idx + 1], r1Z = morphedRotated[r1Idx + 2];
      const r2X = morphedRotated[r2Idx], r2Y = morphedRotated[r2Idx + 1], r2Z = morphedRotated[r2Idx + 2];
      const r3X = morphedRotated[r3Idx], r3Y = morphedRotated[r3Idx + 1], r3Z = morphedRotated[r3Idx + 2];

      const cx = (r1X + r2X + r3X) / 3;
      const cy = (r1Y + r2Y + r3Y) / 3;
      const cz = (r1Z + r2Z + r3Z) / 3;

      const ux = r2X - r1X, uy = r2Y - r1Y, uz = r2Z - r1Z;
      const vx = r3X - r1X, vy = r3Y - r1Y, vz = r3Z - r1Z;

      let nx = uy * vz - uz * vy;
      let ny = uz * vx - ux * vz;
      let nz = ux * vy - uy * vx;

      const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
      if (len > 0) { nx /= len; ny /= len; nz /= len; }

      const dot = nx * cx + ny * cy + nz * cz;
      if (dot < 0) { nx = -nx; ny = -ny; nz = -nz; }

      face.centerX = cx;
      face.centerY = cy;
      face.centerZ = cz;
      face.normal.x = nx;
      face.normal.y = ny;
      face.normal.z = nz;
    }

    // Sort faces descending by depth Z (largest Z first = furthest back)
    facesData.sort((a, b) => b.centerZ - a.centerZ);

    // Light source setup (relative to viewer space)
    let targetLx = 0;
    let targetLy = 0;
    let targetLz = -3.0;

    if (isMouseOver) {
      targetLx = (windowMouseX / (window.innerWidth / 2)) * 1.6;
      targetLy = (windowMouseY / (window.innerHeight / 2)) * 1.6;
      targetLz = -3.5;
    } else if (!hasInteracted) {
      targetLx = 2.0 * Math.sin(time * 0.7);
      targetLy = 2.0 * Math.cos(time * 0.7);
      targetLz = -3.0;
    } else {
      targetLx = currentLx;
      targetLy = currentLy;
      targetLz = currentLz;
    }

    currentLx += (targetLx - currentLx) * 0.08;
    currentLy += (targetLy - currentLy) * 0.08;
    currentLz += (targetLz - currentLz) * 0.08;

    // Clear Canvas
    ctx.clearRect(0, 0, width, height);

    // Render loop
    for (let i = 0; i < facesData.length; i++) {
      const face = facesData[i];
      const n = face.normal;

      // Vector from center to light
      let dx = currentLx - face.centerX;
      let dy = currentLy - face.centerY;
      let dz = currentLz - face.centerZ;
      const dlen = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dlen > 0) { dx /= dlen; dy /= dlen; dz /= dlen; }

      let diffuse = n.x * dx + n.y * dy + n.z * dz;
      diffuse = Math.max(0, diffuse);

      // Specular highlight: view dir is (0,0,-1)
      let hx = dx;
      let hy = dy;
      let hz = dz - 1.0;
      const hlen = Math.sqrt(hx * hx + hy * hy + hz * hz);
      if (hlen > 0) { hx /= hlen; hy /= hlen; hz /= hlen; }

      let specular = n.x * hx + n.y * hy + n.z * hz;
      specular = Math.max(0, specular);
      specular = Math.pow(specular, 16);

      const totalLight = 0.18 + 0.82 * diffuse;

      // Color mapping
      let r, g, b;
      if (totalLight < 0.5) {
        const t = totalLight / 0.5;
        r = 7 + t * (68 - 7);
        g = 14 + t * (106 - 14);
        b = 28 + t * (218 - 28);
      } else {
        const t = (totalLight - 0.5) / 0.5;
        r = 68 + t * (130 - 68);
        g = 106 + t * (162 - 106);
        b = 218 + t * (255 - 218);
      }

      // Add specular white glow
      r = Math.min(255, r + specular * 170);
      g = Math.min(255, g + specular * 170);
      b = Math.min(255, b + specular * 240);

      // Draw face
      const fIdx = face.indices;
      const p1Idx = fIdx[0] * 2;
      const p2Idx = fIdx[1] * 2;
      const p3Idx = fIdx[2] * 2;

      ctx.beginPath();
      ctx.moveTo(projected[p1Idx], projected[p1Idx + 1]);
      ctx.lineTo(projected[p2Idx], projected[p2Idx + 1]);
      ctx.lineTo(projected[p3Idx], projected[p3Idx + 1]);
      ctx.closePath();

      // 0.86 opacity so we see back-faces glowing inside
      ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, 0.86)`;
      ctx.fill();

      // Draw edge lines
      ctx.strokeStyle = `rgba(130, 162, 255, ${0.12 + specular * 0.4})`;
      ctx.lineWidth = 0.55;
      ctx.stroke();
    }

    animationFrameId = requestAnimationFrame(tick);
  }

  // Start loop
  tick();

  let mm = $gsap.matchMedia();
  mm.add({ big: "(min-width: 768px)" }, (context) => {
    $gsap.to("#visual-canvas", {
      x: context!.conditions!.big ? "-25%" : "0%",
      scrollTrigger: {
        trigger: ".intro-text",
        start: "bottom 60%",
        end: "bottom 20%",
        scrub: 0.5,
      },
    });
  });
  $gsap.to("#visual-canvas", {
    scale: 0.5,
    scrollTrigger: {
      trigger: ".intro-text",
      start: "top 50%",
      end: "bottom 50%",
      scrub: true,
    },
  });
  $gsap.to(canvas, { opacity: 1, duration: 0.5, delay: 0.5 }).then(() => {
    $gsap.to("#visual-canvas", {
      opacity: 0.8,
      scrollTrigger: {
        trigger: ".names",
        start: "bottom bottom",
        end: "top top",
        scrub: true,
      },
    });
  });

  if (m.value) return;
  m.value = true;
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  if (removeCanvasEvents) {
    removeCanvasEvents();
  }
  if (observer) {
    observer.disconnect();
  }
});
</script>
