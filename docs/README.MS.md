<img src="https://i.imgur.com/R2wksCG.png" width="400"/>

<br/>

# 📦 Nuxt-Lifecycle

> Ia sebuah cangkuk kitaran hidup yang berjalan sebelum rendering atau routing berlaku di Nuxt.

<br/>

## ⚗️ Pemasangan

> Sila masukkan arahan di bawah untuk memasang modul ini.

```bash
npm i nuxt-lifecycle
```

> Kemudian tentukan perkara berikut dalam `nuxt.config.js` atau `nuxt.config.ts`.

```json
{
  "modules": ["nuxt-lifecycle"]
}
```

<br/>

## 🔮 Bagaimana nak guna

> Arahan mengenai cara menggunakan modul `nuxt-life cycle` dijelaskan di bawah.

```ts
import * as Lifecycle from 'nuxt-lifecycle'

Lifecycle.onPrefetch(async (url, context) => {
  // Runs before rendering or routing occurs on clients and servers.
  // (If Promise is returned, rendering or routing will
  //  not occur until the processing is complete.)
})

Lifecycle.onServerPrefetch(async (url, context) => {
  // Runs before rendering or routing occurs on the server.
  // (If Promise is returned, rendering or routing will
  //  not occur until the processing is complete.)
})

Lifecycle.onClientPrefetch(async (url, context) => {
  // Runs before rendering or routing occurs on the client.
  // (If Promise is returned, rendering or routing will
  //  not occur until the processing is complete.)
})

// Returns true if it is currently operating on a client.
Lifecycle.isClient()

// Returns true if it is currently operating on a server.
Lifecycle.isServer()
```



## 🏷 Lesen

Berlesen MIT.