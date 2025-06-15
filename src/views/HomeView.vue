<template>
  <div class="home-view">
    <Home />
    <HomeGrid />
    <About />
    <Services />
    <Projects />
    <Gallery />
    <Collaboration />
    <Contact />
  </div>
</template>

<script>
import Home from "@/components/Home.vue";
import HomeGrid from "@/components/HomeGrid.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
import Projects from "@/components/Projects.vue";
import Collaboration from "@/components/Collaboration.vue";
import Contact from "@/components/Contact.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "HomeView",
  components: {
    Home,
    HomeGrid,
    About,
    Services,
    Projects,
    Gallery,
    Collaboration,
    Contact,
  },
};
</script>
