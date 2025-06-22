<template>
  <div class="cookie-policy">
    <h2>Polityka Ciasteczek (Cookies)</h2>

    <h3>1. Czym są pliki cookies?</h3>
    <p>
      Pliki cookies to niewielkie pliki tekstowe przechowywane na Twoim
      urządzeniu podczas korzystania z naszej strony internetowej. Zawierają one
      informacje niezbędne do prawidłowego funkcjonowania strony oraz do poprawy
      Twoich doświadczeń podczas przeglądania.
    </p>

    <h3>2. Jak wykorzystujemy pliki cookies?</h3>
    <p>W naszej witrynie używamy plików cookies w następujących celach:</p>
    <ul>
      <li>Niezbędne (techniczne) - umożliwiają poprawne działanie strony</li>
      <li>Funkcjonalnościowe - zapamiętują Twoje preferencje</li>
      <li>
        Analityczne - pomagają nam zrozumieć, jak korzystasz z naszej strony
      </li>
      <li>Marketingowe - umożliwiają wyświetlanie spersonalizowanych reklam</li>
    </ul>

    <h3>3. Rodzaje stosowanych plików cookies</h3>
    <p>Szczegółowe informacje o plikach cookies:</p>
    <table>
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Cel</th>
          <th>Okres ważności</th>
          <th>Dostawca</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>session_id</td>
          <td>Utrzymanie sesji użytkownika</td>
          <td>Do końca sesji</td>
          <td>Policrafts</td>
        </tr>
        <tr>
          <td>user_prefs</td>
          <td>Zapamiętanie preferencji</td>
          <td>1 rok</td>
          <td>Policrafts</td>
        </tr>
        <tr>
          <td>_ga</td>
          <td>Analiza ruchu (Google Analytics)</td>
          <td>2 lata</td>
          <td>Google</td>
        </tr>
      </tbody>
    </table>

    <h3>4. Zarządzanie plikami cookies</h3>
    <p>
      Możesz zarządzać plikami cookies poprzez ustawienia swojej przeglądarki:
    </p>
    <ul>
      <li>
        Google Chrome: Ustawienia → Prywatność i bezpieczeństwo → Pliki cookies
      </li>
      <li>
        Mozilla Firefox: Opcje → Prywatność i bezpieczeństwo → Pliki cookies
      </li>
      <li>
        Safari: Preferencje → Prywatność → Zarządzaj danymi stron internetowych
      </li>
      <li>Microsoft Edge: Ustawienia → Pliki cookies i uprawnienia witryn</li>
    </ul>
    <p>
      Pamiętaj, że wyłączenie niektórych plików cookies może wpłynąć na
      funkcjonalność naszej strony.
    </p>

    <h3>5. Podstawa prawna</h3>
    <p>
      Stosowanie plików cookies wymaga Twojej zgody, z wyjątkiem cookies
      niezbędnych do działania strony (art. 173 ustawy Prawo telekomunikacyjne
      oraz art. 6 ust. 1 lit. f RODO).
    </p>

    <h3>6. Zmiany w polityce cookies</h3>
    <p>
      Zastrzegamy sobie prawo do wprowadzania zmian w tej polityce. Wszelkie
      zmiany będą publikowane na tej stronie.
    </p>

    <h3>7. Kontakt</h3>
    <p>
      W sprawach dotyczących plików cookies możesz skontaktować się z nami pod
      adresem e-mail:
      <a href="mailto:biuro@policrafts.com" class="link"
        >biuro@policrafts.com</a
      >
      lub telefonicznie pod numerem
      <a href="tel:+48696155878" class="link">+48 696 155 878</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: "CookiePolicy",
  metaInfo: {
    title: "Polityka Ciasteczek",
  },
};
</script>

<style lang="scss" scoped>
.cookie-policy {
  padding: 32px 16px;
  overflow: hidden;
  text-align: start;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 2rem;

    li {
      font-size: 1.3rem;
      line-height: 1.9rem;
      margin-bottom: 0.5rem;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;

    th,
    td {
      padding: 1rem;
      border: 1px solid #ddd;
      text-align: left;
      font-size: 1.3rem;
    }

    th {
      background-color: #f5f5f5;
      font-weight: bold;
    }
  }

  .link {
    text-decoration: none;
    color: #333;
    font-weight: 700;
  }
}
</style>
