<template>
  <section id="home">
    <div class="image-container">
      <img :src="brutalizm" alt="Policrafts" />
      <div class="overlay">
        <h1>Policrafts</h1>
        <p>Twoja wizja, nasza misja</p>
      </div>
    </div>

    <div class="grid-container">
      <div id="motto">
        <img :src="modern" alt="Modern render" />
        <div class="motto-content">
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
              <h2>Design</h2>
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
              <h2>Marketing</h2>
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
              <h2>Technologia</h2>
            </div>
          </div>
        </div>
      </div>
      <div id="desc">
        <h2>Niepowtarzalny styl</h2>
        <p>
          Łączymy preferencje klienta oraz nowoczesne technologie, starannie
          analizując trendy rynkowe i&nbsp;specyfikę branży.
        </p>
        <a href="#projects">Zobacz nasze realizacje</a>
      </div>
      <div class="projects" id="project-1">
        <img :src="pulaskiego" alt="Pułaskiego render" />
        <a href="https://www.pulaskiego32.pl" target="_blank" id="circle">
          <div id="circle-content">
            <ArrowRight color="#fff" size="3.5rem" />
          </div>
        </a>
      </div>
      <div class="projects" id="project-2">
        <img :src="brzozowa" alt="Brzozowa render" />
        <a href="https://www.domyzakrzow.pl" target="_blank" id="circle">
          <div id="circle-content">
            <ArrowRight color="#fff" size="3.5rem" />
          </div>
        </a>
      </div>
    </div>

    <div class="stats-container">
      <div class="stats-container">
        <div class="stat-item">
          <p>ponad</p>
          <Roller value="7" :duration="1000"></Roller>
          <p>lat na rynku</p>
        </div>

        <div class="stat-item">
          <p>ponad</p>
          <Roller value="275" :duration="1500"></Roller>
          <p>wizualizacji</p>
        </div>

        <div class="stat-item">
          <p>ponad</p>
          <Roller value="55" :duration="2000"></Roller>
          <p>projektów graficznych</p>
        </div>

        <div class="stat-item">
          <p>ponad</p>
          <Roller value="15" :duration="2500"></Roller>
          <p>stron internetowych</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import brutalizm from "@/assets/images/brutalizm.jpg";
import brzozowa from "@/assets/images/brzozowa.jpg";
import pulaskiego from "@/assets/images/pulaskiego.webp";
import modern from "@/assets/images/modern.webp";
import { ArrowRight } from "lucide-vue-next";
import { Roller } from "vue-roller";
import "vue-roller/dist/style.css";
</script>

<script>
export default {
  name: "HomeSection",
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image-container {
    width: calc(100% - 40px);
    height: calc(100vh - 140px);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
    @extend .rounded-box;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.2);

      transition: all 5s ease-in-out;

      &:hover {
        cursor: pointer;
        transform: scale(1);
      }
    }
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);

    h1 {
      font-size: 10rem;
      margin: 0;
      transition: all 5s ease-in-out;

      &:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }

    p {
      margin: 0;
      font-size: 3.85rem;
      transition: all 5s ease-in-out;

      &:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    width: calc(100% - 40px);
    // height: calc(100vh - 140px);
    height: auto;
    padding: 20px;
  }

  .grid-item {
    padding: 20px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
    @extend .rounded-box;
  }

  .rounded-box {
    background-color: #f0f0f0;
    border-radius: 50px;
  }

  #motto {
    @extend .grid-item;
    grid-area: 1 / 2 / 4 / 6;
    padding: 0;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: none;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50px;
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
        background-color: #fff;
        padding: 0 25px 0 25px;
        border-radius: 50px 0 0 0;
      }

      .motto-row {
        display: flex;
        flex-direction: row;
        align-items: end;
      }
    }

    h2 {
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

    h2 {
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
      border-radius: 20px;
      padding: 10px 14px 10px 14px;
      color: #000;
      font-weight: bold;
      background-color: #ccc;
      font-size: 1rem;
      margin: 5px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50px;
    }
    #circle {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 27%;
      aspect-ratio: 1/1;
      background-color: #fff;
      border-radius: 50px;
      padding: 2%;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
    #circle-content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: #000;
      border-radius: 50px;
      color: #fff;
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

  .stats-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    margin: 50px auto;
    padding: 20px;

    .stat-item {
      text-align: center;
      font-size: 7rem;
      margin: 1rem;

      .roller {
        justify-content: center;
      }

      p {
        font-size: 2.2rem;
        margin: 1rem;
      }
    }
  }
}
</style>
