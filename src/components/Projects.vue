<template>
  <section id="projects">
    <h2>Realizacje</h2>
    <div class="container">
      <motion.a
        v-for="(project, index) in projects"
        :key="index"
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
          :src="project.logo"
          :alt="`${project.name} Logo`"
          class="item-logo"
        />
      </motion.a>
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
    id: "e",
    name: "Pułaskiego 32",
    link: "https://www.pulaskiego32.pl",
    image: pulaskiego,
    logo: pulaskiego_logo,
    alt: "Pułaskiego 32",
  },
  {
    id: "f",
    name: "Dragon Folie",
    link: "https://www.dragonfolie.com",
    image: dragon_folie,
    logo: dragon_folie_logo,
    alt: "Dragon Folie",
  },
  {
    id: "g",
    name: "Dragon Folie",
    link: "https://www.dragonfolie.com",
    image: dragon_folie,
    logo: brzozowa_logo,
    alt: "Dragon Folie",
  },
  {
    id: "h",
    name: "Domy w Stokach",
    link: "https://www.domywstokach.pl",
    image: domy_w_stokach,
    logo: brzozowa_logo,
    alt: "Domy w Stokach",
  },
  {
    id: "i",
    name: "OMD Budownictwo",
    link: "https://www.omd-budownictwo.com",
    image: omd_render,
    logo: brzozowa_logo,
    alt: "OMD",
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
      "i g h"
      "i g h";
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
    width: 50%;
    height: auto;
    z-index: 20;
    position: absolute;
    top: 50%;
    left: 50%;
    transition: all 0.3s;
    transform: translate(-50%, -50%);
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
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
}
</style>
