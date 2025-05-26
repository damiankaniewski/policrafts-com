<template>
  <section id="projects">
    <h1>Realizacje</h1>
    <div class="container">
      <div class="item-a">
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
        <a class="custom-button" type="button" href="#kontakt">
          <div class="button-highlight">
            <span class="button-icon">
              <ArrowRight :size="20" />
            </span>
          </div>
          <span class="button-text">Domy pod Krakowem</span>
        </a>
      </div>
      <div class="item-b">
        <img :src="brzozowa" alt="Domy pod Krakowem" class="item-img" />
        <img
          :src="brzozowa_logo"
          alt="Domy przy Brzozowej Logo"
          class="item-logo"
        />
        <a class="custom-button" type="button" href="#kontakt">
          <div class="button-highlight">
            <span class="button-icon">
              <ArrowRight :size="20" />
            </span>
          </div>
          <span class="button-text">Domy przy Brzozowej</span>
        </a>
      </div>
      <div class="item-c">
        <img :src="sadowa_render" alt="Sadowa 20 Render" class="item-img" />
        <img :src="sadowa_logo" alt="Sadowa 20 Logo" class="item-logo" />
        <a class="custom-button" type="button" href="#kontakt">
          <div class="button-highlight">
            <span class="button-icon">
              <ArrowRight :size="20" />
            </span>
          </div>
          <span class="button-text">Sadowa 20</span>
        </a>
      </div>

      <div class="item-d">
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
        <a class="custom-button" type="button" href="#kontakt">
          <div class="button-highlight">
            <span class="button-icon">
              <ArrowRight :size="20" />
            </span>
          </div>
          <span class="button-text">Generator Deweloper</span>
        </a>
      </div>
      <div class="item-e">
        <img :src="pulaskiego" alt="Pułaskiego 32 Render" class="item-img" />
        <img
          :src="pulaskiego_logo"
          alt="Pułaskiego 32 Logo"
          class="item-logo"
        />
        <a class="custom-button" type="button" href="#kontakt">
          <div class="button-highlight">
            <span class="button-icon">
              <ArrowRight :size="20" />
            </span>
          </div>
          <span class="button-text">Pułaskiego 32</span>
        </a>
      </div>
      <div class="item-f">
        <h2>Nasze realizacje</h2>
        <h3>
          Każdy projekt to inna historia. Poniżej znajdziesz wybrane realizacje,
          które pokazują nasz styl i&nbsp;podejście.
        </h3>
      </div>
      <div class="item-g">
        <img :src="dragon_folie" alt="OMD" class="item-img" />
        <!-- <img
          :src="brzozowa_logo"
          alt="Domy przy Brzozowej Logo"
          class="item-logo"
        /> -->
        <a class="custom-button" type="button" href="#kontakt">
          <div class="button-highlight">
            <span class="button-icon">
              <ArrowRight :size="20" />
            </span>
          </div>
          <span class="button-text">Dragon Folie</span>
        </a>
      </div>
      <div class="item-h">
        <img :src="domy_w_stokach" alt="Domy w Stokach" class="item-img" />
        <!-- <img
          :src="domy_w_stokach_logo"
          alt="Domy w Stokach Logo"
          class="item-logo"
        /> -->
        <a class="custom-button" type="button" href="#kontakt">
          <div class="button-highlight">
            <span class="button-icon">
              <ArrowRight :size="20" />
            </span>
          </div>
          <span class="button-text">Domy w Stokach</span>
        </a>
      </div>
      <div class="item-i">
        <img :src="omd_render" alt="OMD" class="item-img" />
        <!-- <img
          :src="brzozowa_logo"
          alt="Domy przy Brzozowej Logo"
          class="item-logo"
        /> -->
        <a class="custom-button" type="button" href="#kontakt">
          <div class="button-highlight">
            <span class="button-icon">
              <ArrowRight :size="20" />
            </span>
          </div>
          <span class="button-text">OMD</span>
        </a>
      </div>
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
import { ArrowRight } from "lucide-vue-next";
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
      "a b d"
      "e b d"
      "e f d"
      "e g d"
      "e g h"
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
    padding: 30px;
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

  .container > div {
    background: #d1d1d1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    position: relative;
    overflow: hidden;
    flex-direction: column;
  }

  .item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
    position: absolute;
  }

  .item-logo {
    width: 50%;
    height: auto;
    z-index: 20;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
  }

  .custom-button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 9999px;
    border: 1px solid #1f1f1f;
    background-color: #1f1f1f;
    padding: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    text-decoration: none;
    width: 80%;
    max-width: 300px;
    z-index: 20;
    margin: 0 auto;
  }

  .button-highlight {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    height: 100%;
    width: 2.75rem;
    align-items: center;
    justify-content: flex-end;
    border-radius: 9999px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    background-color: #fff;
  }

  .custom-button:hover .button-highlight {
    width: 100%;
  }

  .button-icon {
    margin-right: 0.75rem;
    color: #1f1f1f;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    display: flex;
    justify-content: center;
  }

  .button-text {
    position: relative;
    left: 1rem;
    z-index: 10;
    white-space: nowrap;
    padding-left: 2rem;
    padding-right: 2rem;
    font-weight: 600;
    color: white;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }

  .custom-button:hover .button-text {
    left: -0.75rem;
    color: #1f1f1f;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #000;
    text-align: start;
    margin: 0;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.5rem;
    color: #000;
    text-align: start;
    margin: 0;
    font-weight: 500;
  }
}
</style>
