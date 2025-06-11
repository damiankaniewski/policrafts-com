<template>
  <section id="home">
    <div class="image-container">
      <img :src="brutalizm" alt="Policrafts" />
      <div class="overlay">
        <h1>Policrafts</h1>
        <p>Twoja wizja, nasza misja</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import brutalizm from "@/assets/images/brutalizm.jpg";
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
  .rounded-box {
    background-color: #f0f0f0;
  }
}
</style>
