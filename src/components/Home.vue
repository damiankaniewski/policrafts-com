<template>
  <section id="home">
    <div class="image-container">
      <img :src="brutalizm" alt="Policrafts" />
      <div class="overlay">
        <h1>Policrafts</h1>
        <p>Twoja wizja, nasza misja</p>
      </div>
    </div>

    <div class="grid-container">
      <div id="motto">Div 1</div>
      <div id="desc">
        <h2>Niepowtarzalny styl</h2>
        <p>
          Łączymy preferencje klienta oraz nowoczesne technologie, starannie
          analizując trendy rynkowe i specyfikę branży. Dzięki temu tworzymy
          rozwiązania, które nie tylko odpowiadają indywidualnym potrzebom, ale
          również wyróżniają się na tle konkurencji, zapewniając długotrwały
          efekt i satysfakcję.
        </p>
      </div>
      <div id="project-1">Div 3</div>
      <div id="project-2">Div 4</div>
    </div>

    <div class="stats-container">
      <div
        class="stat-item"
        v-for="stat in stats"
        :key="stat.id"
        ref="statRefs"
      >
        <h3>{{ stat.value }}+</h3>
        <p>{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import brutalizm from "@/assets/images/brutalizm.jpg";

const stats = ref([
  { id: 1, value: 0, target: 7, label: "lat na rynku" },
  { id: 2, value: 0, target: 200, label: "wizualizacji" },
  { id: 3, value: 0, target: 50, label: "projektów graficznych" },
  { id: 4, value: 0, target: 10, label: "stron internetowych" },
]);

const statRefs = ref([]);

const animateNumbers = (stat) => {
  const duration = 3000;
  const startTime = performance.now();

  const animate = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easeOutProgress = 1 - Math.pow(1 - progress, 4);

    stat.value = Math.floor(easeOutProgress * stat.target);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = statRefs.value.indexOf(entry.target);
      if (index !== -1 && stats.value[index].value === 0) {
        animateNumbers(stats.value[index]);
      }
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });

  statRefs.value.forEach((statRef) => {
    observer.observe(statRef);
  });
});
</script>

<script>
export default {
  name: "HomeSection",
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image-container {
    width: calc(100% - 40px);
    height: calc(100vh - 140px);
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);

    h1 {
      font-size: 10rem;
      margin: 0;
    }
    p {
      margin: 0;
      font-size: 3.85rem;
    }
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    width: calc(100% - 40px);
    height: calc(100vh - 140px);
    padding: 20px;
  }

  .grid-item {
    padding: 20px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
    @extend .rounded-box;
  }

  .rounded-box {
    background-color: #f0f0f0;
    border-radius: 50px;
  }

  #motto {
    @extend .grid-item;
    grid-area: 1 / 2 / 4 / 6;
  }

  #desc {
    @extend .grid-item;
    grid-area: 1 / 1 / 2 / 2;
    background-color: #ccc;

    h2 {
      text-align: left;
      margin: 5px;
      font-size: 2rem;
    }
    p {
      text-align: left;
      margin: 5px;
      font-size: 1.2rem;
    }
  }

  #project-1 {
    @extend .grid-item;
    grid-area: 2 / 1 / 3 / 2;
    background-color: #999;
  }

  #project-2 {
    @extend .grid-item;
    grid-area: 3 / 1 / 4 / 2;
    background-color: #666;
  }

  .stats-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    margin: 50px auto;
    padding: 20px;

    .stat-item {
      text-align: left;

      h3 {
        font-size: 7rem;
        margin: 0;
      }

      p {
        font-size: 1.5rem;
        margin: 0;
      }
    }
  }
}
</style>
