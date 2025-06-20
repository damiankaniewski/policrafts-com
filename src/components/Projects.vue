<template>
  <section id="projects">
    <h2>Realizacje</h2>
    <div class="container">
      <!-- Klasyczne, klikalne -->
      <motion.a
        v-for="(project, index) in normalProjects"
        :key="project.id"
        :href="project.link"
        target="_blank"
        :class="`item-${project.id}`"
        class="project-item"
        :initial="{ opacity: 0 }"
        :inView="{ opacity: 1 }"
        :transition="{ duration: 1, ease: 'easeInOut', delay: 0.1 * index }"
        :inViewOptions="{ margin: '-20px' }"
      >
        <img :src="project.image" :alt="project.alt" class="item-img" />
        <img
          v-if="project.logo"
          :src="project.logo"
          :alt="`${project.name} Logo`"
          class="item-logo"
        />
        <div v-if="project.title" class="item-title">{{ project.title }}</div>
        <!-- ⬅️ -->
      </motion.a>
      <div
        v-for="project in compareProjects"
        :key="project.id"
        :class="[
          'project-item',
          'compare-wrapper',
          `item-${project.id}`,
          { active: activeId === project.id },
        ]"
        @click="toggleActive(project.id)"
      >
        <img :src="project.image" :alt="project.alt" class="image image-1" />
        <img
          :src="project.image2"
          :alt="`${project.name} Porównanie`"
          class="image image-2"
        />
        <img :src="clickIcon" alt="Kliknij, aby porównać" class="click-icon" />
        <div v-if="project.title" class="item-title">{{ project.title }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { motion } from "motion-v";

import domy_pod_krakowem_render from "@/assets/images/domy_pod_krakowem_render.webp";
import domy_pod_krakowem_render_gora from "@/assets/images/domy_pod_krakowem_render_gora.webp";
import domy_pod_krakowem_logo from "@/assets/images/domy_pod_krakowem_logo.webp";
import brzozowa from "@/assets/images/brzozowa.webp";
import brzozowa_logo from "@/assets/images/brzozowa_logo.webp";
import sadowa_render from "@/assets/images/sadowa_render.webp";
import sadowa_logo from "@/assets/images/sadowa_logo.webp";
import pulaskiego from "@/assets/images/pulaskiego.webp";
import pulaskiego_logo from "@/assets/images/pulaskiego_logo.webp";
import generator_logo from "@/assets/images/generator_logo.webp";
import omd_render from "@/assets/images/OMD_render.webp";
import domy_w_stokach from "@/assets/images/domy_w_stokach.webp";
import dragon_folie from "@/assets/images/dragon_folie.webp";
import dragon_folie_logo from "@/assets/images/dragon_folie_logo.webp";
import realizacja31 from "@/assets/images/3-1.jpg";
import realizacja32 from "@/assets/images/3-2.jpg";
import realizacja61 from "@/assets/images/6-1.jpg";
import realizacja62 from "@/assets/images/6-2.jpg";
import realizacja141 from "@/assets/images/14-1.jpg";
import realizacja112 from "@/assets/images/14-2.jpg";
import { computed } from "vue";
import { ref } from "vue";
import clickIcon from "@/assets/images/clickicon.png";

const activeId = ref(null);

function toggleActive(id) {
  activeId.value = id;
  setTimeout(() => {
    if (activeId.value === id) {
      activeId.value = null;
    }
  }, 3000); // reset po 2s
}
const normalProjects = computed(() =>
  projects.filter((p) => p.type !== "compare")
);

const compareProjects = computed(() =>
  projects.filter((p) => p.type === "compare")
);

const projects = [
  {
    id: "a",
    name: "Domy pod Krakowem",
    link: "https://www.domypodkrakowem.com.pl",
    image: domy_pod_krakowem_render,
    logo: domy_pod_krakowem_logo,
    alt: "Domy pod Krakowem",
  },
  {
    id: "b",
    name: "Domy przy Brzozowej",
    link: "https://www.domyzakrzow.pl",
    image: brzozowa,
    logo: brzozowa_logo,
    alt: "Domy przy Brzozowej",
  },
  {
    id: "c",
    name: "Sadowa 20",
    link: "https://www.sadowa20.pl",
    image: sadowa_render,
    logo: sadowa_logo,
    alt: "Sadowa 20",
  },
  {
    id: "d",
    name: "Generator Deweloper",
    link: "https://www.generator-deweloper.com",
    image: domy_pod_krakowem_render_gora,
    logo: generator_logo,
    alt: "Generator Deweloper",
  },
  {
    id: "f",
    name: "Pułaskiego 32",
    link: "https://www.pulaskiego32.pl",
    image: pulaskiego,
    logo: pulaskiego_logo,
    alt: "Pułaskiego 32",
  },
  {
    id: "e",
    name: "Dragon Folie",
    //link: "https://www.dragonfolie.com",
    image: dragon_folie,
    logo: dragon_folie_logo,
    alt: "Dragon Folie",
    title: "Praca w toku",
  },

  {
    id: "h",
    name: "Domy w Stokach",
    //link: "https://www.domywstokach.pl",
    image: domy_w_stokach,
    //logo: brzozowa_logo,
    alt: "Domy w Stokach",
    title: "Praca w toku",
  },
  {
    id: "i",
    name: "OMD Budownictwo",
    //link: "https://www.omd-budownictwo.com",
    image: omd_render,
    //logo: brzozowa_logo,
    alt: "OMD",
    title: "Praca w toku",
  },
  //grafiki
  {
    id: "j",
    name: "Realizacja graficzna 3",
    image: realizacja31,
    image2: realizacja32,
    alt: "Realizacja graficzna 3",
    type: "compare",
    title: "Wizualizacja budynku handlowo-usługowego",
  },
  {
    id: "k",
    name: "Realizacja graficzna 6",
    image: realizacja61,
    image2: realizacja62,
    alt: "Realizacja graficzna 6",
    type: "compare",
    title: "Wizualizacja budynku handlowo-usługowego",
  },
  {
    id: "g",
    name: "Realizacja graficzna 14",
    image: realizacja141,
    image2: realizacja112,
    alt: "Realizacja graficzna 14",
    type: "compare",
    title: "Wizualizacja budynku handlowo-usługowego",
  },
];
</script>

<script>
export default {
  name: "ProjectsSection",
};
</script>

<style scoped lang="scss">
section {
  padding: 16px;
  scroll-margin-top: 100px;
  .compare-wrapper {
    cursor: pointer;

    .image {
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity 1s ease-in-out;
    }

    .image-1 {
      z-index: 1;
    }

    .image-2 {
      z-index: 2;
      opacity: 1;
    }

    &.active {
      .image-2 {
        opacity: 0;
      }
    }

    .click-icon {
      position: absolute;
      bottom: 8px;
      right: 8px;
      width: 5rem;
      z-index: 10;
      opacity: 0.8;
      transition: opacity 0.3s;
    }

    &:hover {
      .click-icon {
        opacity: 1;
      }
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    height: 150vh;

    grid-template-areas:
      "a b c"
      "a b c"
      "a b c"
      "e b d"
      "e f d"
      "e f d"
      "i f h"
      "i f h"
      "i g h"
      "j g k"
      "j g k"
      "j g k";
  }

  @media (max-width: 1024px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "a b"
        "c d"
        "e f"
        "g h"
        "i j"
        "k .";
      height: 100% !important;
    }
    .image {
      width: 100%;
    }

    .project-item {
      aspect-ratio: 16 / 9;
    }
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-areas:
        "a"
        "b"
        "c"
        "d"
        "e"
        "f"
        "g"
        "h"
        "i"
        "j"
        "k";
      height: 100% !important;
    }

    .image {
      width: 100%;
    }
    .item-logo {
      width: auto !important;
      height: 40% !important;
    }
    .project-item {
      aspect-ratio: 16 / 9;
    }
    .item-title {
      font-size: 1rem;
    }
  }

  .project-item {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    background: #d1d1d1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    flex-direction: column;
    transition: transform 0.3s;

    &:hover {
      .item-img {
        transform: scale(1.1);
      }

      .item-logo {
        transform: translate(-50%, -50%) scale(0.9);
      }
    }
  }

  .item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s;
    position: absolute;
  }

  .item-logo {
    width: 40%;
    height: auto;
    z-index: 20;
    position: absolute;
    top: 50%;
    left: 50%;
    transition: all 0.3s;
    transform: translate(-50%, -50%);
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.75));
  }

  // Grid area styling
  .item-a {
    grid-area: a;
  }
  .item-b {
    grid-area: b;
  }
  .item-c {
    grid-area: c;
  }
  .item-d {
    grid-area: d;
  }
  .item-e {
    grid-area: e;
  }
  .item-f {
    grid-area: f;
  }
  .item-g {
    grid-area: g;
  }
  .item-h {
    grid-area: h;
  }
  .item-i {
    grid-area: i;
  }
  .item-j {
    grid-area: j;
  }
  .item-k {
    grid-area: k;
  }
}
.item-title {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 1));
  font-size: 1.2rem;
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  z-index: 30;
  pointer-events: none;
  text-align: center;
  max-width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

@media (max-width: 1024px) {
  h2 {
    font-size: 6rem !important;
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 3rem !important;
  }
}
</style>
