<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Lewa kolumna: Nawigacja -->
      <div class="footer__links">
        <h3>Nawigacja</h3>
        <ul>
          <li>
            <router-link
              v-if="$route.path === '/'"
              to="#"
              @click.prevent="scrollToWithOffset('about')"
            >
              O nas
            </router-link>
            <router-link v-else :to="{ path: '/', hash: '#about' }">
              O nas
            </router-link>
          </li>
          <li>
            <router-link
              v-if="$route.path === '/'"
              to="#"
              @click.prevent="scrollToWithOffset('services')"
            >
              Usługi
            </router-link>
            <router-link v-else :to="{ path: '/', hash: '#services' }">
              Usługi
            </router-link>
          </li>
          <li>
            <router-link
              v-if="$route.path === '/'"
              to="#"
              @click.prevent="scrollToWithOffset('projects')"
            >
              Realizacje
            </router-link>
            <router-link v-else :to="{ path: '/', hash: '#projects' }">
              Realizacje
            </router-link>
          </li>
          <li>
            <router-link
              v-if="$route.path === '/'"
              to="#"
              @click.prevent="scrollToWithOffset('gallery')"
            >
              Galeria
            </router-link>
            <router-link v-else :to="{ path: '/', hash: '#gallery' }">
              Galeria
            </router-link>
          </li>
          <li>
            <router-link
              v-if="$route.path === '/'"
              to="#"
              @click.prevent="scrollToWithOffset('collaboration')"
            >
              Współpraca
            </router-link>
            <router-link v-else :to="{ path: '/', hash: '#collaboration' }">
              Współpraca
            </router-link>
          </li>
          <li>
            <router-link
              v-if="$route.path === '/'"
              to="#"
              @click.prevent="scrollToWithOffset('contact')"
            >
              Kontakt
            </router-link>
            <router-link v-else :to="{ path: '/', hash: '#contact' }">
              Kontakt
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Środkowa kolumna: Branding -->
      <div class="footer__branding">
        <h3>Policrafts</h3>
        <p>
          Tworzymy wizualizacje i&nbsp;oprogramowanie na najwyższym poziomie.
        </p>
      </div>

      <!-- Prawa kolumna: Kontakt -->
      <div class="footer__contact">
        <h3>Kontakt</h3>
        <p>
          <strong>Email: </strong>
          <a href="mailto:biuro@policrafts.pl">biuro@policrafts.com</a><br />
        </p>
        <p>
          <strong>Telefon: </strong>
          <a href="tel:+48696155878">+48 696 155 878</a>
        </p>
        <div class="footer__socials">
          <a href="#" aria-label="Facebook"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="#" aria-label="LinkedIn"
            ><i class="fab fa-linkedin-in"></i
          ></a>
          <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>

    <!-- Dolna sekcja -->
    <div class="footer__bottom">
      <p>&copy; {{ currentYear }} Policrafts. Wszelkie prawa zastrzeżone.</p>
      <div class="footer__policies">
        <router-link to="/polityka-prywatnosci"
          >Polityka prywatności</router-link
        >
        <span>|</span>
        <router-link to="/polityka-cookies">Polityka ciasteczek</router-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { scrollToWithOffset } from "@/utils/scrollToWithOffset.js";
</script>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #1f1f1f;
  color: #fff;
  padding: 16px 16px 16px;
  font-family: "Segoe UI", sans-serif;
  font-size: 1rem;

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    > div {
      flex: 1 1 100px;
    }

    .footer__branding {
      text-align: center;

      h3 {
        margin-bottom: 8px;
        color: #fff;
      }

      p {
        color: #ccc;
      }
    }

    .footer__links {
      text-align: left;
      @media (max-width: 768px) {
        text-align: center;
      }
      h3 {
        margin-bottom: 12px;
        color: #fff;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin-bottom: 8px;
        }

        a {
          color: #ccc;
          text-decoration: none;
          transition: all 0.3s;

          &:hover {
            color: #fff;
          }
        }
      }
    }

    .footer__contact {
      text-align: right;
      @media (max-width: 768px) {
        text-align: center;
      }
      h3 {
        margin-bottom: 12px;
        color: #fff;
      }

      p,
      a {
        color: #ccc;
        line-height: 14px;
        text-decoration: none;
      }
      a {
        transition: all 0.3s;

        &:hover {
          color: #fff;
        }
      }

      .footer__socials {
        margin-top: 10px;

        a {
          margin-left: 10px;
          color: #ccc;
          transition: all 0.3s;

          &:hover {
            color: #1da1f2;
          }
        }
      }
    }
  }

  &__bottom {
    border-top: 1px solid #333;
    margin-top: 16px;
    padding-top: 20px;
    text-align: center;
    color: #888;

    .footer__policies {
      margin-top: 8px;

      a {
        color: #888;
        margin: 0 5px;
        text-decoration: none;
        transition: all 0.3s;

        &:hover {
          color: #fff;
        }
      }

      span {
        color: #666;
      }
    }
  }
}
</style>
