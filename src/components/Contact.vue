<template>
  <section id="contact">
    <h2>Kontakt</h2>
    <div class="container">
      <div class="column left">
        <h3>Jak możemy rozpocząć współpracę?</h3>
        <p>
          Napisz lub zadzwoń – odpowiemy tak szybko, jak to możliwe. Możemy też
          od razu omówić Twój pomysł na współpracę.
        </p>
        <ul class="contact-info">
          <li>
            <i class="fas fa-envelope icon"></i>
            <a href="mailto:kontakt@twojafirma.pl">biuro@policrafts.com</a>
          </li>
          <li>
            <i class="fas fa-phone icon"></i>
            <a href="tel:+48123456789">+48 123 456 789</a>
          </li>
          <li>
            <i class="fab fa-linkedin icon"></i>
            <a href="https://www.linkedin.com/in/twojprofil" target="_blank"
              >Policrafts</a
            >
          </li>
        </ul>
      </div>

      <div class="column right">
        <form class="contact-details" @submit.prevent="handleSubmit">
          <h3 id="contact-header">Masz pytanie lub pomysł?</h3>
          <div class="name-lastName">
            <input v-model="form.firstName" placeholder="Imię" class="input" />
            <input
              v-model="form.lastName"
              placeholder="Nazwisko"
              class="input"
            />
          </div>
          <div>
            <input v-model="form.email" placeholder="Email*" class="input" />
            <p v-if="errors.email" class="error">{{ errors.email }}</p>
          </div>
          <input v-model="form.phone" placeholder="Telefon" class="input" />
          <div>
            <textarea
              v-model="form.message"
              placeholder="Szczegóły projektu*"
              rows="3"
              class="input"
            />
            <p v-if="errors.message" class="error">{{ errors.message }}</p>
          </div>

          <div class="file-submit-row">
            <div class="file-upload">
              <label>Dodaj pliki (max 5, 25MB łącznie):</label>

              <button
                type="button"
                class="upload-btn"
                @click="$refs.fileInput.click()"
              >
                Wybierz
              </button>

              <input
                id="file"
                type="file"
                ref="fileInput"
                multiple
                @change="handleFiles"
                accept=".pdf,.doc,.docx,.jpg,.png,.zip"
                class="hidden-input"
              />
            </div>

            <div class="privacy-submit-wrapper">
              <label class="privacy-label">
                <input type="checkbox" v-model="privacyConsent" />
                Akceptuję
                <a href="/polityka-prywatnosci" target="_blank"
                  >politykę prywatności</a
                >*
              </label>
              <p v-if="errors.privacyConsent" class="error">
                {{ errors.privacyConsent }}
              </p>

              <button type="submit" class="submit-btn">Wyślij</button>
            </div>
          </div>
          <div class="files">
            <ul v-if="files.length">
              <li v-for="(file, i) in files" :key="i">{{ file.name }}</li>
            </ul>

            <p v-if="fileError" class="error">{{ fileError }}</p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      },
      privacyConsent: false, // <-- nowa zmienna
      errors: {
        email: null,
        message: null,
        privacyConsent: null, // błąd dla polityki
      },
      files: [],
      fileError: null,
    };
  },
  methods: {
    validateEmail(email) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    },
    handleFiles(event) {
      const selectedFiles = Array.from(event.target.files);
      const totalSize = selectedFiles.reduce((acc, f) => acc + f.size, 0);

      if (selectedFiles.length > 5) {
        this.fileError = "Możesz dodać maksymalnie 5 plików.";
        this.files = [];
        return;
      }

      if (totalSize > 25 * 1024 * 1024) {
        this.fileError = "Łączny rozmiar plików nie może przekraczać 25MB.";
        this.files = [];
        return;
      }

      this.files = selectedFiles;
      this.fileError = null;
    },
    handleSubmit() {
      this.errors = { email: null, message: null, privacyConsent: null };

      if (!this.validateEmail(this.form.email)) {
        this.errors.email = "Podaj poprawny adres email.";
      }

      if (!this.form.message.trim()) {
        this.errors.message = "Opisz szczegóły projektu.";
      }

      if (!this.privacyConsent) {
        this.errors.privacyConsent =
          "Musisz zaakceptować politykę prywatności.";
      }

      if (
        !this.errors.email &&
        !this.errors.message &&
        !this.errors.privacyConsent
      ) {
        alert("Formularz wysłany pomyślnie!");
        this.form = {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        };
        this.files = [];
        this.privacyConsent = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 32px 16px;
  overflow: hidden;

  h2 {
    text-align: center;
    margin-bottom: 32px;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;

    .column {
      flex: 1 1 400px;
      max-width: 600px;
      box-sizing: border-box;

      &.left {
        h3 {
          font-size: 3rem;
        }

        p {
          font-size: 1.5rem;
          color: #444;
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .contact-info {
          list-style: none;
          padding: 0;

          li {
            display: flex;
            align-items: center;
            margin-bottom: 12px;

            .icon {
              margin-right: 12px;
              font-size: 1.5rem;
              color: #000;
              width: 24px;
              text-align: center;
            }

            a {
              font-size: 1.5rem;
              color: #000;
              text-decoration: none;
              font-weight: 500;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }

      &.right {
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          align-items: stretch;

          #contact-header {
            font-size: 3rem;
            text-align: left;
          }

          .input {
            width: 100%;
            padding: 0 0 16px 0;
            border: none;
            border-bottom: 3px solid #222;
            font-size: 1.5rem;
            font-weight: 400;
            color: #7e7e7e;
            background: transparent;
            outline: none;
            transition: all 0.3s ease;
            font-family: "Figtree", sans-serif;

            &:focus {
              color: #000;
              border-bottom-color: #000;
            }

            &::placeholder {
              color: #ccc;
              opacity: 1;
              font-size: 1.5rem;
              font-weight: 500;
              font-family: "Figtree", sans-serif;
            }
          }

          .name-lastName {
            display: flex;
            flex-direction: row;
            gap: 40px;

            @media (max-width: 600px) {
              flex-direction: column;
              gap: 24px;
            }
          }

          .file-submit-row {
            display: flex;
            gap: 16px;
            align-items: stretch; // wymuszamy równą wysokość obu dzieci

            .file-upload {
              flex: 1;
              text-align: left;
              display: flex;
              flex-direction: column;

              label {
                margin-bottom: 8px;
                font-weight: 600;
              }

              ul {
                list-style: none;
                padding: 0;
                font-size: 0.9rem;
                margin-top: auto; // ul wypycha się na dół, zachowując miejsce dla przycisku
              }

              p.error {
                color: #d60000;
                font-size: 0.9rem;
                margin-top: 4px;
                text-align: left;
              }

              .upload-btn {
                margin-top: 0.5rem;
                border: 2px solid #333;
                border-radius: 25px;
                padding: 10px 25px;
                color: #000;
                background-color: #fff;
                font-weight: bold;
                font-size: 1.4rem;
                cursor: pointer;
                transition: all 0.2s ease-in-out;
                align-self: flex-start;

                &:hover {
                  background-color: #000;
                  border-color: #000;
                  color: #fff;
                }
              }

              .hidden-input {
                display: none;
              }
            }

            .privacy-submit-wrapper {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: flex-start; // wyrównanie przycisku i labela na dole
              align-items: flex-end;
              text-align: right;

              .privacy-label {
                font-weight: 600;
                user-select: none;
                margin-bottom: 8px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 6px;

                input {
                  transform: scale(1.2);
                  vertical-align: middle;
                  margin: 0;
                  accent-color: #000;
                }

                a {
                  color: #000;
                  text-decoration: underline;
                }
              }

              .error {
                color: #d60000;
                font-size: 0.9rem;
                margin-bottom: 4px;
              }

              .submit-btn {
                margin-top: 0.5rem;
                white-space: nowrap;
                border: 2px solid #333;
                border-radius: 25px;
                padding: 10px 25px;
                color: #000;
                background-color: #fff;
                font-weight: bold;
                font-size: 1.4rem;
                cursor: pointer;
                transition: all 0.2s ease-in-out;

                &:hover {
                  background-color: #000;
                  border-color: #000;
                  color: #fff;
                }
              }
            }
          }

          .files {
            width: 100%;
            text-align: start;
            ul {
              list-style: none;
              padding: 0;
              font-size: 0.9rem;
              margin-top: auto; // ul wypycha się na dół, zachowując miejsce dla przycisku
            }

            p.error {
              color: #d60000;
              font-size: 0.9rem;
              margin-top: 4px;
              text-align: left;
            }
          }

          .error {
            color: #d60000;
            font-size: 0.9rem;
            margin-top: 4px;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
