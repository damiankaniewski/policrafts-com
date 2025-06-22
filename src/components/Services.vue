<template>
  <section id="services">
    <h2>Usługi</h2>
    <div class="container">
      <div class="about-content" id="column-reverse">
        <motion.div
          :initial="{ opacity: 0, x: -200 }"
          :inView="{ opacity: 1, x: 0 }"
          :transition="{ duration: 1, ease: 'easeInOut' }"
          :inViewOptions="{ margin: '-20px' }"
          class="about-item"
        >
          <div class="image-wrapper">
            <img :src="sadowa_teren_zielony" alt="Sadowa 20 - teren zielony" />
          </div>
        </motion.div>
        <motion.div
          :initial="'hidden'"
          :while-in-view="'visible'"
          :viewport="{ once: true, margin: '-20px' }"
          :variants="container"
          class="about-item"
          id="content-right"
        >
          <motion.h3 :variants="fadeInRight"
            >Design - Technologia - Grafika</motion.h3
          >
          <motion.h4 :variants="fadeInRight"
            >Wizualizacje 3D i&nbsp;grafika</motion.h4
          >
          <ul class="two-columns">
            <motion.li :variants="fadeInRight">Wizualizacje wnętrz</motion.li>
            <motion.li :variants="fadeInRight">Wizualizacje budynków</motion.li>
            <motion.li :variants="fadeInRight">Modele 3D</motion.li>
            <motion.li :variants="fadeInRight">Tworzenie logo</motion.li>
            <motion.li :variants="fadeInRight">Renderowanie 3D</motion.li>
            <motion.li :variants="fadeInRight">Animacje 3D</motion.li>
          </ul>
          <motion.p :variants="fadeInRight">
            Realistyczne wizualizacje, modele 3D i&nbsp;animacje, które pomogą
            lepiej zaprezentować produkty i&nbsp;koncepcje w&nbsp;atrakcyjnej,
            angażującej formie.
          </motion.p>
          <motion.a
            class="custom-button"
            type="button"
            href="#contact"
            :variants="fadeInRight"
          >
            <div class="button-highlight">
              <span class="button-icon">
                <ArrowRight :size="20" />
              </span>
            </div>
            <span class="button-text"> Skontaktuj się z&nbsp;nami </span>
          </motion.a>
        </motion.div>
      </div>
      <div class="about-content">
        <motion.div
          :initial="'hidden'"
          :while-in-view="'visible'"
          :viewport="{ once: true, margin: '-20px' }"
          :variants="container"
          class="about-item"
          id="content-left"
        >
          <motion.h3 :variants="fadeInLeft"
            >Design - Technologia - Informatyka</motion.h3
          >
          <motion.h4 :variants="fadeInLeft"
            >Systemy i&nbsp;strony internetowe</motion.h4
          >
          <ul class="two-columns">
            <motion.li :variants="fadeInLeft">Strony internetowe</motion.li>
            <motion.li :variants="fadeInLeft"
              >Systemy i&nbsp;aplikacje webowe</motion.li
            >
            <motion.li :variants="fadeInLeft"
              >Aplikacje mobilne i&nbsp;desktopowe</motion.li
            >
            <motion.li :variants="fadeInLeft"
              >Technologie i&nbsp;integracje</motion.li
            >
            <motion.li :variants="fadeInLeft"
              >Optymalizacja i&nbsp;bezpieczeństwo</motion.li
            >
          </ul>
          <motion.p :variants="fadeInLeft">
            Nowoczesne strony www, zachwycające funkcjonalnością systemy
            i&nbsp;rozwiązania, które skutecznie przyciągną klientów, dbając
            o&nbsp;obecność Twojej marki w&nbsp;sieci.
          </motion.p>
          <motion.a
            :variants="fadeInLeft"
            class="custom-button"
            type="button"
            href="#contact"
          >
            <div class="button-highlight">
              <span class="button-icon">
                <ArrowRight :size="20" />
              </span>
            </div>
            <span class="button-text"> Skontaktuj się z&nbsp;nami </span>
          </motion.a>
        </motion.div>
        <motion.div
          :initial="{ opacity: 0, x: 200 }"
          :inView="{ opacity: 1, x: 0 }"
          :transition="{ duration: 1, ease: 'easeInOut' }"
          :inViewOptions="{ margin: '-20px' }"
          class="about-item"
        >
          <div class="image-wrapper">
            <img :src="strona_screenshot" alt="Sadowa 20 - teren zielony" />
          </div>
        </motion.div>
      </div>
      <div class="about-content" id="column-reverse">
        <motion.div
          :initial="{ opacity: 0, x: -200 }"
          :inView="{ opacity: 1, x: 0 }"
          :transition="{ duration: 1, ease: 'easeInOut' }"
          :inViewOptions="{ margin: '-20px' }"
          class="about-item"
        >
          <div class="image-wrapper">
            <img :src="additional" alt="Modern render" />
          </div>
        </motion.div>
        <motion.div
          :initial="'hidden'"
          :while-in-view="'visible'"
          :viewport="{ once: true, margin: '-20px' }"
          :variants="container"
          class="about-item"
          id="content-right"
        >
          <motion.h3 :variants="fadeInRight"
            >Design - Technologia - Informatyka</motion.h3
          >
          <motion.h4 :variants="fadeInRight"
            >Pozostałe usługi informatyczno-graficzne</motion.h4
          >
          <ul class="two-columns">
            <motion.li :variants="fadeInRight">Konsultacje IT/Design</motion.li>
            <motion.li :variants="fadeInRight">Wsparcie techniczne</motion.li>
            <motion.li :variants="fadeInRight">Audyt, analiza</motion.li>
            <motion.li :variants="fadeInRight"
              >Zarządzanie infrastrukturą</motion.li
            >
          </ul>
          <motion.p :variants="fadeInRight">
            Dostarczamy kompleksowe wsparcie na każdym etapie cyfrowej
            transformacji, dopasowujemy rozwiązania do Twoich potrzeb.
          </motion.p>
          <motion.a
            :variants="fadeInRight"
            class="custom-button"
            href="#contact"
          >
            <div class="button-highlight">
              <span class="button-icon">
                <ArrowRight :size="20" />
              </span>
            </div>
            <span class="button-text"> Skontaktuj się z&nbsp;nami </span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { motion } from "motion-v";
import sadowa_teren_zielony from "@/assets/images/sadowa_teren_zielony.webp";
import strona_screenshot from "@/assets/images/strona_screenshot.jpg";
import additional from "@/assets/images/additional.jpg";
import { ArrowRight } from "lucide-vue-next";
</script>
<script>
export default {
  name: "AboutSection",
};

const fadeInRight = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 16px;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
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
      gap: 16px;
      display: flex;
      flex-direction: column;

      .image-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      h3 {
        font-size: 1.5rem;
        color: #7e7e7e;
        font-weight: 700;
        margin: 0;
      }

      h4 {
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
        width: fit-content;
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
        text-align: left;
        margin-left: 50px;
      }
    }
  }
  @media (max-width: 1024px) {
    h2 {
      font-size: 6rem;
    }

    h4 {
      font-size: 4rem !important;
    }

    p {
      font-size: 1.5rem !important;
      text-align: justify !important;
    }

    .two-columns {
      display: flex !important;
      flex-direction: column !important;
      gap: 10px;
      margin: 0;
    }

    .two-columns li {
      font-size: 1.2rem !important;
    }

    .custom-button {
      font-size: 1.2rem !important;
      // max-width: 60% !important;
    }

    .about-content {
      flex-direction: column;
      gap: 16px;

      .about-item {
        width: 100%;
      }
    }

    #column-reverse {
      flex-direction: column-reverse;
    }

    #content-left {
      align-items: start !important;
      text-align: left !important;
      .two-columns li {
        margin-left: 0px !important;
      }
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1rem !important;
    }

    h4 {
      font-size: 2rem !important;
    }

    p {
      font-size: 1.2rem !important;
    }

    .two-columns {
      display: flex !important;
      flex-direction: column !important;
      gap: 10px;
      margin: 0;
    }

    .two-columns li {
      font-size: 1rem !important;
    }
  }
}
</style>
