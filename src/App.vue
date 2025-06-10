<template>
  <div id="app">
    <Header />
    <Home />
    <HomeGrid />
    <About />
    <Services />
    <Projects />
    <Gallery />
    <Collaboration />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import HomeGrid from "./components/HomeGrid.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Projects from "./components/Projects.vue";
import Collaboration from "./components/Collaboration.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Gallery from "./components/Gallery.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    HomeGrid,
    About,
    Services,
    Projects,
    Gallery,
    Collaboration,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
