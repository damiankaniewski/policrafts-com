<template>
  <section id="contact">
    <h2>Kontakt</h2>
    <div class="container">
      <div class="headers">
        <h3>
          Podaj nam szczegóły projektu, a&nbsp;my skontaktujemy się z&nbsp;Tobą
          ASAP
        </h3>
        <h3>Zostańmy Partnerami!</h3>
      </div>
      <div class="contact-details">
        <h3 id="contact-header">Podaj nam swoje dane*</h3>
        <div class="name-lastName">
          <input v-model="message" placeholder="Imię" class="input" />
          <input v-model="message" placeholder="Nazwisko" class="input" />
        </div>
        <input v-model="message" placeholder="Email" class="input" />
        <input v-model="message" placeholder="Telefon" class="input" />
        <h3 id="contact-header">Opisz szczegóły projektu*</h3>
        <textarea
          v-model="message"
          placeholder="Twoje szczegóły projektu"
          rows="3"
          class="input"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style lang="scss" scoped>
section {
  padding: 16px;
  overflow: hidden;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: start;
}

.headers {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 50%;
}

h3 {
  font-size: 1.5rem;
  color: #7e7e7e;
  font-weight: 700;
  margin: 0;
  text-align: start;
}

#contact-header {
  color: #000;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 50%;
}

.input {
  width: 100%;
  padding: 0 0 16px 0;
  border: none;
  border-bottom: 3px solid #7e7e7e;
  font-size: 1.5rem;
  font-weight: 400;
  color: #000;
  background: transparent;
  outline: none;
  transition: border-color 0.3s ease, transform 0.2s ease;
}

.input:focus {
  border-bottom-color: #000;
}

.input::placeholder {
  color: #000;
  opacity: 1;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Figtree", sans-serif;
}

.input:hover {
  transform: scale(1.01);
}

.name-lastName {
  display: flex;
  flex-direction: row;
  gap: 40px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 40px;
  }
  .name-lastName {
    flex-direction: column;
  }
  .headers {
    width: 100%;
  }
  .contact-details {
    width: 100%;
  }
}
</style>
