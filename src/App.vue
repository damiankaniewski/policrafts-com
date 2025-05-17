<template>
  <div id="app">
    <Header />
    <Home />
    <About />
    <Services />
    <Projects />
    <Collaboration />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Projects from "./components/Projects.vue";
import Collaboration from "./components/Collaboration.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    About,
    Services,
    Projects,
    Collaboration,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
