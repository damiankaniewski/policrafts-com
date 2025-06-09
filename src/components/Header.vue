<template>
  <transition name="fade-slide">
    <header v-if="isVisible" class="scroll-header">
      <a href="#home" class="logo-link">
        <img :src="logo" alt="Logo" />
      </a>
      <nav>
        <a href="#about">O nas</a>
        <a href="#services">Usługi</a>
        <a href="#projects">Realizacje</a>
        <a href="#gallery">Galeria</a>
        <a href="#collaboration">Współpraca</a>
        <a href="#contact">Kontakt</a>
      </nav>
    </header>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import logo from "@/assets/logo_full.png";

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY >= 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<script>
export default {
  name: "HeaderSection",
};
</script>

<style lang="scss" scoped>
.scroll-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  padding: 0 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  .logo-link {
    display: inline-flex;
    align-items: center;
    transition: transform 0.3s ease-out;

    &:hover {
      transform: scale(1.1);
    }

    img {
      max-width: 150px;
    }
  }

  nav {
    padding-right: 50px;

    a {
      display: inline-block;
      font-size: 1.2rem;
      margin-left: 20px;
      color: #000;
      text-decoration: none;
      transform: scale(1);
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

/* Fade-in and fade-out transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
