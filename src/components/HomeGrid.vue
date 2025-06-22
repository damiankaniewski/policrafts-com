<template>
  <section id="homegrid">
    <div class="grid-container">
      <motion.div
        id="motto"
        :initial="{ opacity: 0, x: 100 }"
        :inView="{ opacity: 1, x: 0 }"
        :inViewOptions="{ margin: '-20px' }"
        :transition="{ duration: 2, ease: 'easeInOut' }"
      >
        <img :src="brutalizm" alt="Modern render" />
        <motion.div
          :initial="{ opacity: 0, x: 100 }"
          :inView="{ opacity: 1, x: 0 }"
          :inViewOptions="{ margin: '-20px' }"
          :transition="{
            duration: 1,
            delay: 1,
            ease: 'easeInOut',
          }"
          class="motto-content"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 50H50V0C50 27.6143 27.6143 50 0 50Z"
              fill="white"
            />
          </svg>
          <div class="motto-row">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 50H50V0C50 27.6143 27.6143 50 0 50Z"
                fill="white"
              />
            </svg>
            <div id="motto-item">
              <h3>Design</h3>
            </div>
          </div>
          <div class="motto-row">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 50H50V0C50 27.6143 27.6143 50 0 50Z"
                fill="white"
              />
            </svg>

            <div id="motto-item">
              <h3>Innowacja</h3>
            </div>
          </div>
          <div class="motto-row">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 50H50V0C50 27.6143 27.6143 50 0 50Z"
                fill="white"
              />
            </svg>

            <div id="motto-item">
              <h3>Technologia</h3>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        id="desc"
        :initial="{ opacity: 0, x: -100 }"
        :inView="{ opacity: 1, x: 0 }"
        :transition="{ duration: 1 }"
        :inViewOptions="{ margin: '-20px' }"
      >
        <h3>Niepowtarzalny styl</h3>
        <p>
          Łączymy preferencje klienta i&nbsp;najlepsze trendy rynkowe, starannie
          analizując specyfikę branży.
        </p>
        <a href="#projects">Zobacz nasze realizacje</a>
      </motion.div>
      <motion.div
        class="projects"
        id="project-1"
        :initial="{ opacity: 0, x: -100 }"
        :inView="{ opacity: 1, x: 0 }"
        :transition="{ duration: 1, delay: 0.3 }"
        :inViewOptions="{ margin: '-20px' }"
      >
        <img class="background" :src="pulaskiego" alt="Pułaskiego render" />
        <img class="logo" :src="pulaskiegologo" alt="Pułaskiego logo" />
      </motion.div>
      <motion.div
        class="projects"
        id="project-2"
        :initial="{ opacity: 0, x: -100 }"
        :inView="{ opacity: 1, x: 0 }"
        :transition="{ duration: 1, delay: 0.6 }"
        :inViewOptions="{ margin: '-20px' }"
      >
        <img class="background" :src="brzozowa" alt="Brzozowa render" />
        <img class="logo" :src="brzozowalogo" alt="Brzozowa logo" />
      </motion.div>
    </div>
    <div class="stats-section">
      <div class="stats-container">
        <motion.div
          class="stat-item"
          v-for="(stat, statIndex) in stats"
          :key="statIndex"
          :initial="{ opacity: 0 }"
          :inView="{ opacity: 1 }"
          :inViewOptions="{ margin: '-20px' }"
          :transition="{
            duration: 0.4,
            ease: 'easeInOut',
            delay: statIndex * 0.4,
          }"
        >
          <p class="stat-prefix">ponad</p>
          <div class="stat-number">
            <motion.span
              v-for="(digit, index) in stat.number.split('')"
              :key="index"
              :initial="{ opacity: 0, scale: 0.5 }"
              :inView="{ opacity: 1, scale: 1 }"
              :transition="{
                duration: 0.2,
                ease: 'easeInOut',
                delay: 0.2 + statIndex * 0.4 + index * 0.2,
              }"
            >
              {{ digit }}
            </motion.span>
          </div>
          <p class="stat-label">{{ stat.label }}</p>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup>
import brzozowa from "@/assets/images/brzozowa.webp";
import brzozowalogo from "@/assets/images/brzozowa_logo.webp";
import pulaskiego from "@/assets/images/pulaskiego.webp";
import pulaskiegologo from "@/assets/images/pulaskiego_logo.webp";
import brutalizm from "@/assets/images/brutalizm.jpg";
import { motion } from "motion-v";

const stats = [
  { label: "lat na rynku", number: "7" },
  { label: "wizualizacji", number: "250" },
  { label: "projektów graficznych", number: "50" },
  { label: "systemów i stron internetowych", number: "10" },
];
</script>

<script>
export default {
  name: "HomeGridSection",
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    width: calc(100% - 32px);
    height: auto;
    padding: 16px;
  }

  .grid-item {
    padding: 16px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    @extend .rounded-box;
  }

  .rounded-box {
    background-color: #f0f0f0;
  }

  #motto {
    @extend .grid-item;
    grid-area: 1 / 2 / 4 / 6;
    padding: 0;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

    svg {
      opacity: 50%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      z-index: 1;
    }

    .motto-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: end;
      height: 100%;

      #motto-item {
        background-color: #ffffff80;
        padding: 0 25px 0 25px;
        border-radius: 50px 0 0 0;
      }

      .motto-row {
        display: flex;
        flex-direction: row;
        align-items: end;
      }
    }

    h3 {
      font-size: 7rem;
      font-weight: 700;
      color: #000;
      margin: 0.5rem 0;
      text-align: right;
      line-height: 1;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #333;
        cursor: pointer;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
    }
  }

  #desc {
    @extend .grid-item;
    grid-area: 1 / 1 / 2 / 2;
    background-color: #ccc;
    display: flex;
    flex-direction: column;

    h3 {
      text-align: left;
      margin: 5px;
      font-size: 1.7rem;
    }
    p {
      text-align: left;
      margin: 5px;
      font-size: 1rem;
    }

    a {
      text-decoration: none;
      align-self: flex-end;
      border: 2px solid #333;
      border-radius: 25px;
      padding: 10px 14px 10px 14px;
      color: #000;
      font-weight: bold;
      background-color: #ccc;
      font-size: 1rem;
      margin: 5px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #000;
        border: 2px solid #000;
        color: #fff;
        transform: scale(1.1);
      }
    }
  }

  .projects {
    padding: 0;
    position: relative;
    overflow: hidden;

    &:hover {
      cursor: pointer;

      .background {
        transform: scale(1.1);
      }

      .logo {
        transform: translate(-50%, -50%) scale(0.9);
      }
    }

    .background {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: all 0.3s ease;
    }

    .logo {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200px;
      height: auto;
      z-index: 100;
      filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.75));
      transform: translate(-50%, -50%);
      transition: all 0.3s ease;
    }
  }

  #project-1 {
    padding: 0;
    @extend .grid-item;
    grid-area: 2 / 1 / 3 / 2;
  }

  #project-2 {
    padding: 0;
    @extend .grid-item;
    grid-area: 3 / 1 / 4 / 2;
  }

  .stats-section {
    width: 100%;
    padding: 16px 0;
  }

  .stats-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding: 16px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  .stat-item {
    text-align: center;
  }

  .stat-prefix {
    font-size: clamp(1rem, 1.5vw, 1.4rem);
    color: #666;
    margin-bottom: 8px;
  }

  .stat-number {
    font-size: clamp(3rem, 6vw, 7rem);
    font-weight: 700;
    color: #333;
    margin: 10px 0;

    span {
      display: inline-block;
      min-width: 0.5em;
    }
  }

  .stat-label {
    font-size: clamp(1.2rem, 2vw, 2.2rem);
    color: #444;
    margin-top: 8px;
    line-height: 1.3;
  }

  :deep(motion.span) {
    font-size: inherit !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  @media (max-width: 1024px) {
    .grid-container {
      display: flex !important;
      flex-direction: column-reverse !important;
    }

    #project-1,
    #project-2 {
      display: none;
    }

    #motto {
      aspect-ratio: 16/9;

      .motto-content {
        display: none !important;
      }
    }
  }

  @media (max-width: 768px) {
  }
}
</style>
