<template>
  <div class="privacy-policy">
    <h2>Polityka prywatności</h2>
    <h3>1. Administrator danych osobowych</h3>
    <p>Administratorem Twoich danych osobowych jest Policrafts</p>
    <h3>2. Jakie dane zbieramy?</h3>
    <p>
      Za pośrednictwem formularza kontaktowego zbieramy następujące dane
      osobowe:
    </p>
    <ul>
      <li>imię i nazwisko,</li>
      <li>adres e-mail,</li>
      <li>numer telefonu,</li>
      <li>treść wiadomości.</li>
    </ul>
    <h3>3. Cel i podstawa prawna przetwarzania danych</h3>
    <p>Twoje dane osobowe przetwarzamy w celu:</p>
    <ul>
      <li>
        odpowiedzi na Twoje zapytanie przesłane przez formularz kontaktowy (art.
        6 ust. 1 lit. b RODO – realizacja umowy lub działania przed zawarciem
        umowy),
      </li>
      <li>
        archiwizacji korespondencji w celach dowodowych (art. 6 ust. 1 lit. f
        RODO – prawnie uzasadniony interes administratora).
      </li>
    </ul>
    <h3>4. Czas przechowywania danych</h3>
    <p>
      Twoje dane będą przechowywane przez okres niezbędny do obsługi zapytania
      oraz przez czas wymagany przez przepisy prawa lub do momentu wniesienia
      skutecznego sprzeciwu wobec przetwarzania.
    </p>
    <h3>5. Odbiorcy danych</h3>
    <p>
      Twoje dane mogą być przekazane podmiotom świadczącym usługi IT, hostingowe
      lub inne, które wspierają nas w realizacji usług, przy czym wszystkie te
      podmioty zobowiązane są do ochrony danych zgodnie z RODO.
    </p>
    <h3>6. Twoje prawa</h3>
    <p>Masz prawo do:</p>
    <ul>
      <li>dostępu do swoich danych,</li>
      <li>sprostowania danych,</li>
      <li>usunięcia danych,</li>
      <li>ograniczenia przetwarzania,</li>
      <li>wniesienia sprzeciwu wobec przetwarzania,</li>
      <li>przenoszenia danych,</li>
      <li>
        wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO) w
        przypadku naruszenia przepisów RODO.
      </li>
    </ul>
    <h3>7. Kontakt</h3>
    <p>
      W sprawach związanych z przetwarzaniem danych osobowych możesz
      skontaktować się z nami pod adresem e-mail:
      <a href="mailto:biuro@policrafts.com" class="link"
        >biuro@policrafts.com</a
      >
      lub telefonicznie pod numerem
      <a href="tel:+48696155878" class="link">+48 696 155 878</a>
      .
    </p>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicy",
  metaInfo: {
    title: "Polityka Prywatności",
  },
};
</script>

<style lang="scss" scoped>
.privacy-policy {
  padding: 32px 16px;
  overflow: hidden;
  text-align: start;
  h2 {
    text-align: center;
    font-size: 4rem;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.3;
  }
  li {
    font-size: 1.3rem;
    line-height: 1.9rem;
  }

  .link {
    text-decoration: none;
    color: #333;
    font-weight: 700;
  }
}
</style>
