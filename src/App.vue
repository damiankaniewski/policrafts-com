<template>
  <div id="app">
    <div class="parallax-background" ref="background"></div>
    <div class="content">
      <Header />
      <router-view />
      <Footer />
      <CookieConsent />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CookieConsent from "./components/CookieConsent.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    CookieConsent,
  },
};
</script>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const background = ref(null);

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = scrollTop / docHeight;

  if (background.value) {
    const maxTranslate = background.value.offsetHeight - window.innerHeight;
    background.value.style.transform = `translateY(-${
      scrollProgress * maxTranslate
    }px)`;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll); // aktualizuj przy resize
  handleScroll(); // wywołaj raz od razu
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleScroll);
});
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  overflow-x: hidden;
}

.parallax-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 75%;
  height: 300%; // większa wysokość daje więcej zapasu do przesuwania
  background-image: url("@/assets/images/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: -1;
  pointer-events: none;
  transition: transform 0.05s linear; // delikatne wygładzenie
}

.content {
  position: relative;
  z-index: 1;
}
</style>
