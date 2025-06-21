<template>
  <transition name="fade-slide">
    <header v-if="isVisible" class="scroll-header">
      <div class="header-container">
        <router-link to="/" class="logo-link">
          <img :src="logo" alt="Logo" class="logo-img" />
        </router-link>

        <button class="hamburger" @click="toggleMenu" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav :class="{ active: menuOpen }">
          <template v-for="(item, index) in navItems" :key="index">
            <a
              v-if="$route.path === '/'"
              @click.prevent="scrollToWithOffset(item.id)"
              class="nav-link"
              @click="menuOpen = false"
            >
              {{ item.label }}
            </a>
            <router-link
              v-else
              :to="{ path: '/', hash: `#${item.id}` }"
              class="nav-link"
              @click="menuOpen = false"
            >
              {{ item.label }}
            </router-link>
          </template>
        </nav>
      </div>
    </header>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import logo from "@/assets/logo_full.png";
import { scrollToWithOffset } from "@/utils/scrollToWithOffset.js";

const isVisible = ref(false);
const menuOpen = ref(false);

const navItems = [
  { id: "about", label: "O nas" },
  { id: "services", label: "Usługi" },
  { id: "projects", label: "Realizacje" },
  { id: "gallery", label: "Galeria" },
  { id: "collaboration", label: "Współpraca" },
  { id: "contact", label: "Kontakt" },
];

const handleScroll = () => {
  isVisible.value = window.scrollY >= 200;
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});

const handleResize = () => {
  if (window.innerWidth >= 992) {
    menuOpen.value = false;
  }
};
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
  height: 80px;
  background-color: #fff;
  color: #000;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    height: 100px;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;

    @media (min-width: 768px) {
      padding: 0 30px;
    }
  }

  .logo-link {
    display: inline-flex;
    align-items: center;
    transition: transform 0.3s ease-out;
    z-index: 1001;

    &:hover {
      transform: scale(1.05);
    }

    .logo-img {
      max-width: 120px;
      height: auto;
      transition: all 0.3s ease;

      @media (min-width: 768px) {
        max-width: 150px;
      }
    }
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    span {
      width: 100%;
      height: 2px;
      background-color: #000;
      transition: all 0.3s ease;
    }

    @media (min-width: 992px) {
      display: none;
    }
  }

  nav {
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    height: fit-content;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.4s ease;
    z-index: 1000;
    pointer-events: none;
    padding-bottom: 10px;
    padding-top: 10px;

    &.active {
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
    }

    @media (max-width: 768px) {
      top: 80px;
    }

    @media (min-width: 992px) {
      position: static;
      height: auto;
      flex-direction: row;
      transform: none;
      opacity: 1;
      background: transparent;
      padding-right: 0;
      pointer-events: all;
      width: auto;
    }

    a {
      font-size: 1.5rem;
      color: #000;
      text-decoration: none;
      transition: all 0.3s ease;
      padding: 10px 0;
      position: relative;

      @media (min-width: 992px) {
        font-size: 1.1rem;
        margin-left: 20px;
        padding: 5px 0;

        &:first-child {
          margin-left: 0;
        }
      }

      @media (min-width: 1200px) {
        font-size: 1.2rem;
        margin-left: 25px;
      }

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #000;
        transition: width 0.3s ease;
      }

      &:hover:after {
        width: 100%;
      }

      &.router-link-exact-active:after {
        width: 100%;
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

/* Hamburger animation */
.hamburger.active {
  span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  span:nth-child(2) {
    opacity: 0;
  }
  span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }
}
</style>
