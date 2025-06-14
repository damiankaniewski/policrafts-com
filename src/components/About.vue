<template>
  <section id="about">
    <h2>O nas</h2>
    <div class="grid">
      <motion.div
        :initial="{ opacity: 0, scale: 0.9 }"
        :inView="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1, ease: 'easeInOut', delay: 0.1 * index }"
        :inViewOptions="{ margin: '-20px' }"
        v-for="(person, index) in people"
        :key="index"
        class="card"
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
  </section>
</template>

<script setup>
import { motion } from "motion-v";
</script>

<script>
import placeholder from "@/assets/images/szostak.jpg";

export default {
  name: "AboutSection",
  data() {
    return {
      people: [
        {
          image: placeholder,
          name: "Jan Kowalski",
          position: "Frontend Developer",
        },
        { image: placeholder, name: "Anna Nowak", position: "UX Designer" },
        {
          image: placeholder,
          name: "Tomasz Wiśniewski",
          position: "Project Manager",
        },
        {
          image: placeholder,
          name: "Maria Zielińska",
          position: "Backend Developer",
        },
        { image: placeholder, name: "Adam Kaczmarek", position: "QA Engineer" },
        { image: placeholder, name: "Ewa Mazur", position: "Scrum Master" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 16px;

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
}
</style>
