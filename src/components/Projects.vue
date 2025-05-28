<template>
  <section id="projects">
    <h1>Realizacje</h1>
    <div class="container">
      <a
        href="https://www.domypodkrakowem.com.pl"
        target="_blank"
        class="item-a"
      >
        <img
          :src="domy_pod_krakowem_render"
          alt="Domy pod Krakowem"
          class="item-img"
        />
        <img
          :src="domy_pod_krakowem_logo"
          alt="Domy pod Krakowem Logo"
          class="item-logo"
        />
      </a>
      <a href="https://www.domyzakrzow.pl" target="_blank" class="item-b">
        <img :src="brzozowa" alt="Domy pod Krakowem" class="item-img" />
        <img
          :src="brzozowa_logo"
          alt="Domy przy Brzozowej Logo"
          class="item-logo"
        />
      </a>
      <a href="https://www.sadowa20.pl" target="_blank" class="item-c">
        <img :src="sadowa_render" alt="Sadowa 20 Render" class="item-img" />
        <img :src="sadowa_logo" alt="Sadowa 20 Logo" class="item-logo" />
      </a>

      <a
        href="https://www.generator-deweloper.com"
        target="_blank"
        class="item-d"
      >
        <img
          :src="domy_pod_krakowem_render_gora"
          alt="Domy pod Krakowem"
          class="item-img"
        />
        <img
          :src="generator_logo"
          alt="Generator Deweloper Logo"
          class="item-logo"
        />
      </a>
      <a href="https://www.pulaskiego32.pl" target="_blank" class="item-e">
        <img :src="pulaskiego" alt="Pułaskiego 32 Render" class="item-img" />
        <img
          :src="pulaskiego_logo"
          alt="Pułaskiego 32 Logo"
          class="item-logo"
        />
      </a>
      <a href="https://www.dragonfolie.com" target="_blank" class="item-f">
        <img :src="dragon_folie" alt="OMD" class="item-img" />
        <img
          :src="brzozowa_logo"
          alt="Domy przy Brzozowej Logo"
          class="item-logo"
        />
      </a>
      <a href="https://www.dragonfolie.com" target="_blank" class="item-g">
        <img :src="dragon_folie" alt="OMD" class="item-img" />
        <img
          :src="brzozowa_logo"
          alt="Domy przy Brzozowej Logo"
          class="item-logo"
        />
      </a>
      <a href="https://www.domywstokach.pl" target="_blank" class="item-h">
        <img :src="domy_w_stokach" alt="Domy w Stokach" class="item-img" />
        <img
          :src="brzozowa_logo"
          alt="Domy przy Brzozowej Logo"
          class="item-logo"
        />
      </a>
      <a href="https://www.omd-budownictwo.com" target="_blank" class="item-i">
        <img :src="omd_render" alt="OMD" class="item-img" />
        <img
          :src="brzozowa_logo"
          alt="Domy przy Brzozowej Logo"
          class="item-logo"
        />
      </a>
    </div>
  </section>
</template>

<script setup>
import domy_pod_krakowem_render from "@/assets/images/domy_pod_krakowem_render.webp";
import domy_pod_krakowem_logo from "@/assets/images/domy_pod_krakowem_logo.webp";
import brzozowa from "@/assets/images/brzozowa.webp";
import brzozowa_logo from "@/assets/images/brzozowa_logo.webp";
import sadowa_render from "@/assets/images/sadowa_render.webp";
import sadowa_logo from "@/assets/images/sadowa_logo.webp";
import pulaskiego from "@/assets/images/pulaskiego.webp";
import pulaskiego_logo from "@/assets/images/pulaskiego_logo.webp";
import domy_pod_krakowem_render_gora from "@/assets/images/domy_pod_krakowem_render_gora.webp";
import generator_logo from "@/assets/images/generator_logo.webp";
import omd_render from "@/assets/images/OMD_render.webp";
import domy_w_stokach from "@/assets/images/domy_w_stokach.webp";
import dragon_folie from "@/assets/images/dragon_folie.webp";
// import domy_w_stokach_logo from "@/assets/images/domy_w_stokach_logo.webp";
</script>

<script>
export default {
  name: "ProjectsSection",
};
</script>

<style lang="scss" scoped>
section {
  padding: 20px;
  scroll-margin-top: 100px;

  h1 {
    font-size: 7rem;
    color: #000;
    font-weight: 700;
    margin: 0;
    margin-bottom: 50px;
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
      "i g h"
      "i g h";
  }

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

  .container > a {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
    background: #d1d1d1;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;
    flex-direction: column;

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

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #000;
    text-align: start;
    margin: 0;
    margin-bottom: 10px;
  }
}
</style>
