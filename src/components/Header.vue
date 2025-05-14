<template>
  <header>
    <h1>Policrafts</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">O nas</a>
      <a href="#services">Usługi</a>
      <a href="#projects">Realizacje</a>
      <a href="#collaboration">Współpraca</a>
      <a href="#contact">Kontakt</a>
    </nav>
  </header>
</template>

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
  background-color: #2c3e50;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  h1 {
    padding: 20px;
  }
}

nav {
  padding: 20px;

  a {
    margin-left: 15px;
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
