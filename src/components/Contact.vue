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
            <a href="mailto:biuro@policrafts.com">biuro@policrafts.com</a>
          </li>
          <li>
            <i class="fas fa-phone icon"></i>
            <a href="tel:+48696155878">+48 696 155 878</a>
          </li>
          <li>
            <i class="fab fa-facebook icon"></i>
            <a
              href="https://www.facebook.com/profile.php?id=61578466156016"
              target="_blank"
              >Policrafts</a
            >
          </li>
          <li>
            <i class="fab fa-instagram icon"></i>
            <a href="https://www.instagram.com/policrafts_" target="_blank"
              >policrafts_</a
            >
          </li>
          <li>
            <i class="fab fa-linkedin icon"></i>
            <a href="https://www.linkedin.com/company/105426521" target="_blank"
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
                <span> Akceptuję </span>
                <a href="/polityka-prywatnosci" target="_blank">
                  politykę prywatności*</a
                >
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
      privacyConsent: false,
      errors: {
        email: null,
        message: null,
        privacyConsent: null,
      },
      files: [],
      fileError: null,
      loading: false,
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
      const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/gif",
      ];

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

      for (const file of selectedFiles) {
        if (!allowedTypes.includes(file.type)) {
          this.fileError =
            "Dozwolone formaty plików: PDF, JPG, PNG, WEBP, GIF.";
          this.files = [];
          return;
        }
      }

      this.files = selectedFiles;
      this.fileError = null;
    },
    async handleSubmit() {
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
        this.errors.email ||
        this.errors.message ||
        this.errors.privacyConsent
      ) {
        return;
      }

      try {
        this.loading = true;
        const attachments = await Promise.all(
          this.files.map((file) => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => {
                const base64 = reader.result.split(",")[1];
                resolve({
                  filename: file.name,
                  content_type: file.type,
                  base64,
                });
              };
              reader.onerror = () => reject(reader.error);
              reader.readAsDataURL(file);
            });
          })
        );

        const payload = {
          email: "policrafts.pl@gmail.com",
          subject: `Wiadomość od: ${this.form.firstName} ${this.form.lastName}`,
          message:
            `Imię i nazwisko: ${this.form.firstName} ${this.form.lastName}\n` +
            `Email: ${this.form.email}\n` +
            `Telefon: ${this.form.phone || "-"}\n\n` +
            `${this.form.message}`,
          attachments,
        };

        const response = await fetch(
          "https://jc5vg6se5e.execute-api.eu-north-1.amazonaws.com/dev/send-mail",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "_just-a'test\"key,or>is<it?",
            },
            body: JSON.stringify(payload),
          }
        );

        if (!response.ok) {
          throw new Error("Wystąpił błąd podczas wysyłania formularza.");
        }

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
      } catch (err) {
        console.error(err);
        alert("Nie udało się wysłać wiadomości. Spróbuj ponownie.");
      } finally {
        this.loading = false;
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
            align-items: stretch;

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
                margin-top: auto;
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
                flex-wrap: wrap;
                input {
                  transform: scale(1.2);
                  vertical-align: middle;
                  margin-right: 6px;
                  accent-color: #000;
                }

                span {
                  margin-right: 4px;
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
  @media (max-width: 1024px) {
    h2 {
      font-size: 6rem;
    }

    h3 {
      font-size: 3rem !important;
    }

    p {
      font-size: 1.2rem !important;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2rem !important;
    }
    .contact-info li i {
      font-size: 1.2rem !important;
    }

    .contact-info li a {
      font-size: 1.2rem !important;
    }
  }
}
</style>
