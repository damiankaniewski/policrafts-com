<template>
  <section id="cookie-consent" v-if="!consentGiven && !closedWithoutConsent">
    <div class="consent-box">
      <button class="close-btn" @click="closeWithoutConsent">×</button>
      <p>
        Ta strona używa plików cookies do celów analitycznych. Klikając
        „Akceptuję”, wyrażasz zgodę na ich użycie.
        <a href="https://policrafts.com/polityka-cookies" target="_blank">
          Dowiedz się więcej
        </a>
      </p>
      <button class="accept-btn" @click="acceptCookies">Akceptuję</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "CookieConsent",
  data() {
    return {
      consentGiven: false,
      closedWithoutConsent: false,
    };
  },
  mounted() {
    this.consentGiven = localStorage.getItem("cookieConsent") === "true";
    if (this.consentGiven) {
      this.loadGoogleAnalytics();
    }
  },
  methods: {
    acceptCookies() {
      localStorage.setItem("cookieConsent", "true");
      this.consentGiven = true;
      this.loadGoogleAnalytics();
    },
    closeWithoutConsent() {
      this.closedWithoutConsent = true;
    },
    loadGoogleAnalytics() {
      if (window.gtagHasLoaded) return;
      window.gtagHasLoaded = true;

      const gtagScript = document.createElement("script");
      gtagScript.src =
        "https://www.googletagmanager.com/gtag/js?id=G-CNY1FPCMSV";
      gtagScript.async = true;
      document.head.appendChild(gtagScript);

      gtagScript.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", "G-CNY1FPCMSV");
      };
    },
  },
};
</script>

<style lang="scss" scoped>
#cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw; // pełna szerokość okna
  background: #ffffff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  padding: 1rem 0;

  .consent-box {
    width: 95%;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    padding: 0 1rem; // trochę paddingu po bokach na mniejszych ekranach

    p {
      margin: 0;
      font-size: 1rem;
    }

    a {
      color: #007bff;
      text-decoration: underline;
    }

    .accept-btn {
      margin-top: 0.5rem;
      border: 2px solid #333;
      border-radius: 25px;
      padding: 10px 14px;
      color: #000;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      align-self: center; // wyśrodkowanie przycisku

      &:hover {
        background-color: #000;
        border-color: #000;
        color: #fff;
      }
    }

    .close-btn {
      position: absolute;
      right: 0.5rem;
      background: none;
      border: none;
      font-size: 2rem;
      font-weight: bold;
      cursor: pointer;
      color: #666;
      padding: 0;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #000;
      }
    }
  }
}
</style>
