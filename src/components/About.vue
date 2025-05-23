<template>
  <section id="about">
    <h1>O nas</h1>
    <div class="about-content">
      <div class="about-item">
        <img :src="sadowa_teren_zielony" alt="Sadowa 20 - teren zielony" />
      </div>
      <div class="about-item" id="content-right">
        <h2>Design - Technologia - Grafika</h2>
        <h3>Wizualizacje 3D i grafika</h3>
        <ul class="two-columns">
          <li>Wizualizacje wnętrz</li>
          <li>Wizualizacje budynków</li>
          <li>Modele 3D</li>
          <li>Tworzenie logo</li>
          <li>Renderowanie 3D</li>
          <li>Animacje 3D</li>
        </ul>
        <p>
          Realistyczne wizualizacje, modele 3D i&nbsp;animacje, pomagające
          lepiej zaprezentować produkty i&nbsp;koncepcje w&nbsp;atrakcyjnej,
          angażującej formie.
        </p>
        <a class="custom-button" type="button" href="#kontakt">
          <div class="button-highlight">
            <span class="button-icon">
              <ArrowRight :size="20" />
            </span>
          </div>
          <span class="button-text"> Skontaktuj się z nami </span>
        </a>
        <!-- <button>Skontaktuj się z nami</button> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import sadowa_teren_zielony from "@/assets/images/sadowa_teren_zielony.webp";
import { ArrowRight } from "lucide-vue-next";
// import { ref } from "vue";

// const primaryColor = ref("#fff");
</script>
<script>
export default {
  name: "AboutSection",
};
</script>

<style lang="scss" scoped>
section {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .about-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 40px;

    .about-item {
      width: 50%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50px;
        object-fit: cover;
      }

      h2 {
        font-size: 1.5rem;
        color: #7e7e7e;
        font-weight: 700;
      }

      h3 {
        font-size: 5rem;
        color: #000;
        font-weight: 500;
      }

      .two-columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: auto;
        gap: 10px;
      }

      .two-columns li {
        font-size: 1.5rem;
        color: #7e7e7e;
        font-weight: 700;
      }

      p {
        font-size: 2rem;
        font-weight: 500;
        color: #000;
      }

      .custom-button {
        position: relative;
        border-radius: 9999px;
        border: 1px solid #1f1f1f;
        background-color: #1f1f1f;
        padding: 0.5rem;
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 600;
        text-decoration: none;
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
    }

    #content-right {
      text-align: left;
    }
  }
}
</style>
