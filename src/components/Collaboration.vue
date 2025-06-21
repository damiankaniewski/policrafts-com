<template>
  <section id="collaboration" class="collaboration">
    <h2>Współpraca</h2>
    <motion.div
      class="text-container"
      :initial="{ opacity: 0, y: 30 }"
      :inView="{ opacity: 1, y: 0 }"
      :transition="{ duration: 1, ease: 'easeOut' }"
      :inViewOptions="{ margin: '-20px' }"
    >
      <p>
        Współpraca z&nbsp;nami opiera się na prostocie i&nbsp;partnerskim
        podejściu. Bez&nbsp;niepotrzebnych formalności i&nbsp;sztywnych
        schematów. Na&nbsp;początku po&nbsp;prostu rozmawiamy — chcemy zrozumieć
        <strong>Twoje potrzeby, pomysły i&nbsp;cele.</strong> Potem wspólnie
        rysujemy plan działania: krok po&nbsp;kroku. Działamy zwinnie, słuchamy
        uważnie i&nbsp;regularnie pokazujemy postępy, żebyś zawsze wiedział,
        na&nbsp;jakim etapie jesteśmy. Dla&nbsp;nas to nie tylko projekt — to
        <strong>współpraca</strong>, w&nbsp;której liczy się
        <strong>zaufanie, komunikacja i&nbsp;wspólny cel</strong>.
      </p>
    </motion.div>
    <h3>Schemat współpracy</h3>

    <motion.div
      :initial="{ opacity: 0 }"
      :inView="{ opacity: 1 }"
      :transition="{ duration: 1, ease: 'easeInOut', delay: 0.1 * index }"
      :inViewOptions="{ margin: '-20px' }"
      v-for="(step, index) in steps"
      :key="index"
      class="step"
      :style="{ backgroundImage: `url(${step.image})` }"
    >
      <div class="overlay">
        <motion.h3
          :initial="{ opacity: 0, scale: 0.95 }"
          :inView="{ opacity: 1, scale: 1 }"
          :transition="{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.25 + 0.1 * index,
          }"
          :inViewOptions="{ margin: '-20px' }"
          >{{ step.title }}</motion.h3
        >
        <motion.p
          :initial="{ opacity: 0 }"
          :inView="{ opacity: 1 }"
          :transition="{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 0.25 + 0.1 * index,
          }"
          :inViewOptions="{ margin: '-20px' }"
          >{{ step.description }}</motion.p
        >
      </div>
    </motion.div>
  </section>
</template>

<script setup>
import step1 from "@/assets/images/collaboration/step1.webp";
import step2 from "@/assets/images/collaboration/step2.webp";
import step3 from "@/assets/images/collaboration/step3.webp";
import step4 from "@/assets/images/collaboration/step4.webp";
import step5 from "@/assets/images/collaboration/step5.webp";
import step6 from "@/assets/images/collaboration/step6.webp";

import { motion } from "motion-v";

const steps = [
  {
    title: "1. Rozpoznanie potrzeb",
    description: `Zbieramy informacje o${"\u00A0"}Twojej firmie, klientach i${"\u00A0"}celach — czy potrzebujesz strony, systemu lub wizualizacji czy grafiki.`,
    image: step1,
  },
  {
    title: "2. Warsztaty & koncepcja wizualna",
    description:
      "Na podstawie zebranych informacji przygotowujemy strukturę strony lub systemu oraz projekt graficzny.",
    image: step2,
  },
  {
    title: "3. Projektowanie interfejsu (UI)",
    description: `Tworzymy dopracowany wizualnie layout dopasowany do Twojej marki i${"\u00A0"}potrzeb użytkownika.`,
    image: step3,
  },
  {
    title: "4. Implementacja strony lub systemu",
    description:
      "Opracowujemy Twój projekt, dostosowując rozwiązanie do skali działalności.",
    image: step4,
  },
  {
    title: "5. Testowanie & poprawki",
    description: `Sprawdzamy użyteczność, responsywność i${"\u00A0"}funkcjonalność. Wprowadzamy zmiany zgodnie z${"\u00A0"}Twoimi uwagami.`,
    image: step5,
  },
  {
    title: "6. Wdrożenie & wsparcie",
    description: `Uruchamiamy projekt na serwerze lub urządzeniu i${"\u00A0"}zapewniamy wsparcie techniczne, aktualizacje lub dalszy rozwój.`,
    image: step6,
  },
];
</script>

<script>
export default {
  name: "CollaborationSection",
};
</script>

<style scoped lang="scss">
.collaboration {
  padding: 16px;

  .step {
    height: 16rem;
    background-size: cover;
    background-position: center;
    position: relative;
    margin: 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.6); // półprzezroczyste tło
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 20px;

      h3 {
        filter: drop-shadow(3px 3px 2px #000);
        font-size: 3rem;
        margin: 0;
      }

      p {
        filter: drop-shadow(3px 3px 2px #000);
        font-size: 1.5rem;
        max-width: 80%;
      }
    }
  }

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

  @media (max-width: 1024px) {
    .step {
      height: 12rem;
    }

    h2 {
      font-size: 6rem;
    }

    h3 {
      font-size: 2.2rem !important;
    }

    p {
      font-size: 1rem !important;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1.75rem !important;
    }
  }
}
</style>
