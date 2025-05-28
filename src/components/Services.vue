<template>
  <section id="services">
    <h1>Usługi</h1>
    <div class="container">
      <div class="about-content">
        <div class="about-item">
          <img :src="sadowa_teren_zielony" alt="Sadowa 20 - teren zielony" />
        </div>
        <div class="about-item" id="content-right">
          <h2>Design - Technologia - Grafika</h2>
          <h3>Wizualizacje 3D i&nbsp;grafika</h3>
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
          <a class="custom-button" type="button" href="#contact">
            <div class="button-highlight">
              <span class="button-icon">
                <ArrowRight :size="20" />
              </span>
            </div>
            <span class="button-text"> Skontaktuj się z&nbsp;nami </span>
          </a>
        </div>
      </div>
      <div class="about-content">
        <div class="about-item" id="content-left">
          <h2>Design - Technologia - Informatyka</h2>
          <h3>Systemy i&nbsp;strony internetowe</h3>
          <ul class="two-columns">
            <li>Strony internetowe</li>
            <li>Systemy i&nbsp;aplikacje webowe</li>
            <li>Aplikacje mobilne i&nbsp;desktopowe</li>
            <li>Technologie i&nbsp;integracje</li>
            <li>Optymalizacja i&nbsp;bezpieczeństwo</li>
          </ul>
          <p>
            Nowoczesne strony www, zachwycające funkcjonalnością systemy
            i&nbsp;rozwiązania, skutecznie przyciągające klientów, dbając
            o&nbsp;obecność Twojej marki w&nbsp;sieci.
          </p>
          <a class="custom-button" type="button" href="#contact">
            <div class="button-highlight">
              <span class="button-icon">
                <ArrowRight :size="20" />
              </span>
            </div>
            <span class="button-text"> Skontaktuj się z&nbsp;nami </span>
          </a>
        </div>
        <div class="about-item">
          <img
            :src="domy_pod_krakowem_strona"
            alt="Sadowa 20 - teren zielony"
          />
        </div>
      </div>
      <div class="about-content">
        <div class="about-item">
          <img :src="mvr" alt="Modern render" />
        </div>
        <div class="about-item" id="content-right">
          <h2>Design - Technologia - Informatyka</h2>
          <h3>Pozostałe usługi informatyczno-graficzne</h3>
          <ul class="two-columns">
            <li>Konsultacje IT/Design</li>
            <li>Wsparcie techniczne</li>
            <li>Audyt, analiza</li>
            <li>Zarządzanie infrastrukturą</li>
          </ul>
          <p>
            Dostarczamy kompleksowe wsparcie na każdym etapie cyfrowej
            transformacji, dopasowując rozwiązania do Twoich potrzeb.
          </p>
          <a class="custom-button" type="button" href="#contact">
            <div class="button-highlight">
              <span class="button-icon">
                <ArrowRight :size="20" />
              </span>
            </div>
            <span class="button-text"> Skontaktuj się z&nbsp;nami </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import sadowa_teren_zielony from "@/assets/images/sadowa_teren_zielony.webp";
import domy_pod_krakowem_strona from "@/assets/images/domy_pod_krakowem_strona.webp";
import mvr from "@/assets/images/mvr.jpg";
import { ArrowRight } from "lucide-vue-next";
</script>
<script>
export default {
  name: "AboutSection",
};
</script>

<style lang="scss" scoped>
section {
  padding: 20px;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }
  h1 {
    font-size: 7rem;
    color: #000;
    font-weight: 700;
    margin: 0;
    margin-bottom: 50px;
  }

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
      gap: 20px;
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        height: 600px;
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
      }

      h2 {
        font-size: 1.5rem;
        color: #7e7e7e;
        font-weight: 700;
        margin: 0;
      }

      h3 {
        font-size: 5rem;
        color: #000;
        font-weight: 500;
        margin: 0;
      }

      .two-columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: auto;
        gap: 10px;
        margin: 0;
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
        margin: 0;
      }

      .custom-button {
        position: relative;
        border-radius: 9999px;
        border: 3px solid #1f1f1f;
        background-color: #1f1f1f;
        padding: 0.5rem;
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 600;
        text-decoration: none;
        max-width: 30%;
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
    #content-left {
      text-align: right;
      align-items: end;
      .two-columns {
        justify-items: start;
      }
      .two-columns li {
        margin-left: 50px;
      }
    }
  }
}
</style>
