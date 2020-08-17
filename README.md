<img src="https://i.imgur.com/R2wksCG.png" width="400"/>

<br/>

# 📦 Nuxt-Lifecycle

> A life cycle hook that runs before rendering or routing occurs in Nuxt.

<br/>


## 🌎 Global

> The following multilingual documents are provided. (need pull request help)

([한국어 문서 보기](https://github.com/AhaOfficial/nuxt-lifecycle/blob/master/docs/README.KR.md))

<br/>

## ⚗️ Installation

> Please enter the command below to install this module.

```bash
npm i nuxt-lifecycle
```

> Then define the following in `nuxt.config.js` or `nuxt.config.ts`.

```json
{
  "modules": ["nuxt-lifecycle"]
}
```

<br/>

## 🔮 How to use

> Instructions on how to use the `nuxt-life cycle` module are described below.

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



## 🏷 License

MIT Licensed.