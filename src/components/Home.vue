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
        <motion.img
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 2, ease: 'easeInOut', delay: 0.5 }"
          :src="logo"
          alt="Logo Policrafts"
        />
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
      <motion.div
        class="scroll-arrow"
        :initial="{ opacity: 0, y: 0 }"
        :animate="{ opacity: 1, y: [0, -10, 0] }"
        :transition="{
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 1 },
        }"
      >
        <a @click.prevent="scrollToWithOffset('about')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M12 16.5l-7-7 1.41-1.42L12 13.67l5.59-5.59L19 9.5z" />
          </svg>
        </a>
      </motion.div>

      <div class="nav-links-right">
        <ul>
          <motion.li
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1.5, ease: 'easeInOut', delay: 1 }"
            ><a @click.prevent="scrollToWithOffset('contact')"
              >Kontakt</a
            ></motion.li
          >
          <motion.li
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1.5, ease: 'easeInOut', delay: 1.2 }"
            ><a @click.prevent="scrollToWithOffset('collaboration')"
              >Współpraca</a
            ></motion.li
          >
        </ul>
      </div>
      <div class="nav-links-left">
        <ul>
          <motion.li
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1.5, ease: 'easeInOut', delay: 1.4 }"
          >
            <a @click.prevent="scrollToWithOffset('about')">O nas</a>
          </motion.li>
          <motion.li
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1.5, ease: 'easeInOut', delay: 1.6 }"
          >
            <a @click.prevent="scrollToWithOffset('services')">Usługi</a>
          </motion.li>
          <motion.li
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1.5, ease: 'easeInOut', delay: 1.8 }"
            ><a @click.prevent="scrollToWithOffset('gallery')"
              >Galeria</a
            ></motion.li
          >
          <motion.li
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1.5, ease: 'easeInOut', delay: 2 }"
            ><a @click.prevent="scrollToWithOffset('projects')"
              >Realizacje</a
            ></motion.li
          >
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import home from "@/assets/images/OMD_render.webp";
import logo from "@/assets/logo_nowe.png";
import { motion } from "motion-v";
import { scrollToWithOffset } from "@/utils/scrollToWithOffset.js";
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

    img {
      width: 15%;
      height: auto;
      object-fit: contain;
      filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7));
    }

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

  .scroll-arrow {
    display: none;
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

  .nav .rounded-box {
    background-color: #f0f0f0;
  }

  @media (max-width: 1024px) {
    .overlay {
      img {
        width: 20%;
      }

      h1 {
        font-size: 6rem;
        line-height: 6rem;
      }

      p {
        font-size: 2.5rem;
        line-height: 2.5rem;
      }
    }

    .nav-links-left,
    .nav-links-right {
      ul {
        gap: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    .overlay {
      img {
        width: 25%;
      }

      h1 {
        font-size: 3.5rem;
        line-height: 4rem;
      }

      p {
        font-size: 1.75rem;
        line-height: 2rem;
      }
    }
    .nav-links-left,
    .nav-links-right {
      display: none;
    }
    .scroll-arrow {
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 24px;
      left: calc(50% - 20px);
      z-index: 12;
      cursor: pointer;

      svg {
        opacity: 0.8;
        transition: opacity 0.3s ease;
      }

      &:hover svg {
        opacity: 1;
      }
    }
  }
}
</style>
