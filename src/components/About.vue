<template>
  <section id="about">
    <h2>O nas</h2>
    <motion.div
      class="text-container"
      :initial="{ opacity: 0, y: 30 }"
      :inView="{ opacity: 1, y: 0 }"
      :transition="{ duration: 1, ease: 'easeOut' }"
      :inViewOptions="{ margin: '-20px' }"
    >
      <p>
        <strong>Policrafts</strong> powstało z pasji do technologii, designu
        i&nbsp;nowoczesnych rozwiązań. Zaczynaliśmy jako mały zespół
        freelancerów, którzy łączyli siły przy kreatywnych projektach. Dziś
        działamy jako zgrany <strong>kolektyw specjalistów</strong> – od
        programistów, przez designerów, po ekspertów od infrastruktury. Naszym
        celem jest tworzenie <strong>innowacyjnych</strong> produktów cyfrowych,
        które łączą estetykę z&nbsp;funkcjonalnością.
      </p>
    </motion.div>

    <h3>Kto u nas działa?</h3>
    <div class="grid">
      <motion.div
        v-for="(person, index) in people"
        :key="index"
        class="card"
        :initial="{ opacity: 0, scale: 0.9 }"
        :inView="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1, ease: 'easeInOut', delay: 0.1 * index }"
        :inViewOptions="{ margin: '-20px' }"
      >
        <div class="card-image">
          <div class="overlay"></div>
          <img :src="person.image" :alt="person.name" />
          <div class="card-info">
            <h3>{{ person.name }}</h3>
            <p>{{ person.position }}</p>
          </div>
        </div>
      </motion.div>
    </div>

    <h3>Dlaczego my?</h3>
    <motion.div
      class="text-container"
      :initial="{ opacity: 0, y: 30 }"
      :inView="{ opacity: 1, y: 0 }"
      :transition="{ duration: 1, ease: 'easeOut' }"
      :inViewOptions="{ margin: '-20px' }"
    >
      <p>
        Jesteśmy zgranym, ambitnym zespołem,
        <strong>który nie boi się wyzwań</strong>. Doskonale rozumiemy potrzeby
        współczesnego świata technologii i&nbsp;designu. Mamy świeże pomysły
        i&nbsp;ogromną chęć, by działać szybko i&nbsp;skutecznie. Dla nas każdy
        projekt to nowa przygoda i&nbsp;szansa, by pokazać, że można tworzyć
        inaczej — z&nbsp;<strong
          >pasją, szczerością i&nbsp;autentycznością.</strong
        >
      </p>
    </motion.div>
  </section>
</template>

<script setup>
import { motion } from "motion-v";
</script>

<script>
import placeholder from "@/assets/images/placeholder.png";

export default {
  name: "AboutSection",
  data() {
    return {
      people: [
        {
          image: placeholder,
          name: "Maciej Krzyszkowski",
          position: "Founder & 3D Designer",
        },
        {
          image: placeholder,
          name: "Damian Kaniewski",
          position: "Full-Stack Developer & Project Manager",
        },
        {
          image: placeholder,
          name: "Rafał Ciupek",
          position: "Software Developer",
        },
        {
          image: placeholder,
          name: "Jakub Szostak",
          position: "Cloud Developer & DevOps Engineer",
        },
        {
          image: placeholder,
          name: "Alicja Janeczek",
          position: "Architect & Interior Designer",
        },
        {
          image: placeholder,
          name: "Anna Prochownik",
          position: "HR, Finance & Legal Coordinator",
        },
        {
          image: placeholder,
          name: "Aleksandra Walkiewicz",
          position: "UX/UI Designer & Concept Artist",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 16px;

  h3 {
    font-size: 3rem;
  }

  .text-container {
    max-width: 60rem;
    margin: 0 auto 32px;
    font-size: 1.6rem;
    line-height: 1.3;
    text-align: center;
    color: #333;

    @media (max-width: 600px) {
      font-size: 1rem;
      padding: 0 10px;
    }
  }
  .grid {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .card {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

    .card-image {
      position: relative;
      width: 100%;
      aspect-ratio: 1 / 1;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 5;
        background-image: linear-gradient(
          to bottom,
          rgba(255, 0, 0, 0) 50%,
          rgb(0, 0, 0) 110%
        );
      }

      .card-info {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 10px 12px;
        color: white;
        width: 100%;
        box-sizing: border-box;
        text-align: left;
        z-index: 6;

        h3 {
          font-size: 2.5rem;
          margin: 0;
        }

        p {
          font-size: 1rem;
          margin: 2px 0 0;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 6rem;
    }

    h3 {
      font-size: 3rem;
    }
    .card .card-info {
      h3 {
        font-size: 2rem !important;
      }
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2rem;
    }
    .card .card-info {
      h3 {
        font-size: 1.5rem !important;
      }
    }
  }
}
</style>
