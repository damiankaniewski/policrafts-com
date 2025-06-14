<template>
  <section id="home">
    <div class="image-container">
      <img :src="home" alt="Policrafts" />
      <motion.div
        class="overlay"
        :initial="{}"
        :whileInView="{
          transition: {
            staggerChildren: 0.3,
          },
        }"
      >
        <motion.h1
          :initial="{}"
          :animate="{}"
          :transition="{ staggerChildren: 0.1 }"
        >
          <motion.span
            v-for="(letter, index) in title"
            :key="index"
            :initial="{ opacity: 0, scale: 0.5 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{
              duration: 0.25,
              ease: 'easeInOut',
              delay: index * 0.1,
            }"
            style="display: inline-block"
          >
            {{ letter }}
          </motion.span>
        </motion.h1>
        <motion.p
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 2, ease: 'easeInOut', delay: 1 }"
        >
          Twoja wizja, nasza misja
        </motion.p>
      </motion.div>
      <div class="nav-links-right">
        <ul>
          <motion.li
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1.5, ease: 'easeInOut', delay: 1 }"
            ><a href="#contact">Kontakt</a></motion.li
          >
          <motion.li
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1.5, ease: 'easeInOut', delay: 1.2 }"
            ><a href="#collaboration">Współpraca</a></motion.li
          >
        </ul>
      </div>
      <div class="nav-links-left">
        <ul>
          <motion.li
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1.5, ease: 'easeInOut', delay: 1.4 }"
            ><a href="#about">O nas</a></motion.li
          >
          <motion.li
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1.5, ease: 'easeInOut', delay: 1.6 }"
            ><a href="#services">Usługi</a></motion.li
          >
          <motion.li
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1.5, ease: 'easeInOut', delay: 1.8 }"
            ><a href="#gallery">Galeria</a></motion.li
          >
          <motion.li
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1.5, ease: 'easeInOut', delay: 2 }"
            ><a href="#projects">Realizacje</a></motion.li
          >
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import home from "@/assets/images/OMD_render.webp";
import { motion } from "motion-v";

const title = "Policrafts".split("");
</script>

<script>
export default {
  name: "HomeSection",
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image-container {
    width: calc(100% - 32px);
    height: calc(100vh - 32px);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
    @extend .rounded-box;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    color: #ffffff;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
    z-index: 10;

    h1 {
      font-size: 10rem;
      line-height: 10rem;
      margin: 0;
    }

    p {
      margin: 0;
      font-size: 3.85rem;
      line-height: 3.5rem;
    }
  }

  .nav-links {
    position: absolute;
    bottom: 20px;
    z-index: 11;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 8px;

      li {
        a {
          line-height: 2.75rem;
          display: inline-block;
          font-size: 3rem;
          color: #fff;
          text-decoration: none;
          transform: scale(1);
          transition: all 0.3s ease;

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .nav-links-left {
    @extend .nav-links;
    right: 20px;

    ul li {
      text-align: right;
    }
  }

  .nav-links-right {
    @extend .nav-links;
    left: 20px;

    ul li {
      text-align: left;
    }
  }

  .rounded-box {
    background-color: #f0f0f0;
  }
}
</style>
