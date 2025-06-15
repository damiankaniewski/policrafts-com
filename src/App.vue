<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <CookieConsent />
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

<style lang="scss" scoped></style>
