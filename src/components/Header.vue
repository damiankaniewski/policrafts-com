<template>
  <header>
    <a href="#home" class="logo-link">
      <img :src="logo" alt="Logo" />
    </a>
    <nav>
      <a href="#about">O nas</a>
      <a href="#services">Usługi</a>
      <a href="#projects">Realizacje</a>
      <a href="#collaboration">Współpraca</a>
      <a href="#contact">Kontakt</a>
    </nav>
  </header>
</template>

<script setup>
import logo from "@/assets/logo_full.png";
</script>

<script>
export default {
  name: "HeaderSection",
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  padding: 0 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

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
</style>
