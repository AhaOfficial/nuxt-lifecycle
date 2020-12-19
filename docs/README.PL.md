<img src="https://i.imgur.com/R2wksCG.png" width="400"/>

<br/>

# 📦 Nuxt-Lifecycle

> Funkcja (ang. hook) cyklu życia aplikacji, wykonująca się przed renderowaniem lub routingiem w Nuxt.

<br/>

## 🌎 Tłumaczenia

> Dokument został przetłumaczony na podane języki. (potrzebna pomoc)

([한국어 문서 보기](https://github.com/AhaOfficial/nuxt-lifecycle/blob/master/docs/README.KR.md))

([Zobacz tłumaczenie w języku polskim](https://github.com/AhaOfficial/nuxt-lifecycle/blob/master/docs/README.PL.md))

<br/>

## ⚗️ Instalacja

> Aby zainstalować ten moduł, w terminalu wprowadź poniższe polecenie.

```bash
npm i nuxt-lifecycle
```

> Następnie utwórz plik `nuxt.config.js` lub `nuxt.config.ts`, a w nim dodaj poniższy kod.

```json
{
  "modules": ["nuxt-lifecycle"]
}
```

<br/>

## 🔮 Jak używać?

> Instrukcje dotyczące korzystania z modułu `nuxt-life cycle` opisano poniżej.

```ts
import * as Lifecycle from 'nuxt-lifecycle'

Lifecycle.onPrefetch(async (url, context) => {
  // Uruchamia się przed renderowaniem lub routingiem po stronie klienta i serwera.
  // (Jeżeli zostanie zwrócona obietnica, renderowanie lub routing
  //  nie nastąpi aż do zakończenia przetwarzania.)
})

Lifecycle.onServerPrefetch(async (url, context) => {
  // Uruchamia się przed renderowaniem lub routingiem po stronie serwera.
  // (Jeżeli zostanie zwrócona obietnica, renderowanie lub routing
  //  nie nastąpi aż do zakończenia przetwarzania.)
})

Lifecycle.onClientPrefetch(async (url, context) => {
  // Uruchamia się przed renderowaniem lub routingiem po stronie klienta.
  // (Jeżeli zostanie zwrócona obietnica, renderowanie lub routing
  //  nie nastąpi aż do zakończenia przetwarzania.)
})

// Zwraca wartość true, jeśli obecnie działa po stronie klienta.
Lifecycle.isClient()

// Zwraca wartość true, jeśli obecnie działa po stronie serwera.
Lifecycle.isServer()
```

## 🏷 Licencja

Licencja MIT.
