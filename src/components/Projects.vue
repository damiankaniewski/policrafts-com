<template>
  <section id="projects">
    <h1>Realizacje</h1>
    <div class="container">
      <div class="item-a">1</div>
      <div class="item-b">2</div>
      <div class="item-c">3</div>
      <div class="item-d">4</div>
      <div class="item-e">5</div>
      <div class="item-f">6</div>
      <div class="item-g">7</div>
      <div class="item-h">8</div>
      <div class="item-i">9</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsSection",
};
</script>

<style lang="scss" scoped>
section {
  padding: 20px;

  h1 {
    font-size: 7rem;
    color: #000;
    font-weight: 700;
    margin: 0;
    margin-bottom: 50px;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    height: 70vh;

    grid-template-areas:
      "a b c"
      "a b c"
      "a b d"
      "e b d"
      "e f d"
      "e g d"
      "e g h"
      "i g h"
      "i g h";
  }

  .item-a {
    grid-area: a;
  }
  .item-b {
    grid-area: b;
  }
  .item-c {
    grid-area: c;
  }
  .item-d {
    grid-area: d;
  }
  .item-e {
    grid-area: e;
  }
  .item-f {
    grid-area: f;
  }
  .item-g {
    grid-area: g;
  }
  .item-h {
    grid-area: h;
  }
  .item-i {
    grid-area: i;
  }

  .container > div {
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
