<template>
  <section id="about">
    <h1>O nas</h1>
    <div class="grid">
      <AboutCard
        v-for="(person, index) in people"
        :key="index"
        :image="person.image"
        :name="person.name"
        :position="person.position"
      />
    </div>
  </section>
</template>

<script>
import AboutCard from "@/components/partial/AboutCard.vue";
import placeholder from "@/assets/images/szostak.jpg";

export default {
  name: "AboutSection",
  components: {
    AboutCard,
  },
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

  h1 {
    text-align: center;
    margin-bottom: 2rem;
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
}
</style>
