<template>
  <section id="home">
    <div class="image-container">
      <img :src="brutalizm" alt="Policrafts" />
      <motion.div
        class="overlay"
        :initial="{}"
        :whileInView="{
          transition: {
            staggerChildren: 0.3,
          },
        }"
      >
        <motion.h1
          :initial="{ opacity: 0, y: 50, scale: 0.95 }"
          :animate="{ opacity: 1, y: 0, scale: 1 }"
          :transition="{ duration: 1, ease: 'easeOut' }"
        >
          Policrafts
        </motion.h1>
        <motion.p
          :initial="{ opacity: 0, y: 50, scale: 0.95 }"
          :animate="{ opacity: 1, y: 0, scale: 1 }"
          :transition="{ duration: 1.2, ease: 'easeOut', delay: 0.3 }"
        >
          Twoja wizja, nasza misja
        </motion.p>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import brutalizm from "@/assets/images/brutalizm.jpg";
import { motion } from "motion-v";
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
    width: calc(100% - 40px);
    height: calc(100vh - 40px);
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

    h1 {
      font-size: 10rem;
      margin: 0;
    }

    p {
      margin: 0;
      font-size: 3.85rem;
    }
  }
  .rounded-box {
    background-color: #f0f0f0;
  }
}
</style>
