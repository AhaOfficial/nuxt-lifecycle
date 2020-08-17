<img src="https://i.imgur.com/R2wksCG.png" width="400"/>

<br/>

# 📦 Nuxt-Lifecycle

> 넉스트(Nuxt) 에서 렌더링이나 라우팅이 발생하기 전 먼저 실행되는 생명주기 훅입니다.



## ⚗️ 설치방법

> 이 모듈을 설치하려면 아래 명령어를 입력해주세요.

```bash
npm i nuxt-lifecycle
```

> 그 다음 `nuxt.config.js` 또는 `nuxt.config.ts` 에 아래 내용을 정의해주세요.

```json
{
  modules: ['nuxt-lifecycle']
}
```

<br/>

## 🔮 사용방법

> `nuxt-lifecycle` 모듈을 사용하는 방법을 아래 설명합니다.

```ts
import * as Lifecycle from 'nuxt-lifecycle'

Lifecycle.onPrefetch(async (url, context) => {
  // 클라이언트와 서버에서 렌더링이나 라우팅이 발생하기 전 먼저 실행됩니다.
  // (Promise 를 리턴하는 경우 해당 처리가 끝나기 전까지 렌더링이나 라우팅이 발생하지 않습니다.)
})

Lifecycle.onServerPrefetch(async (url, context) => {
  // 서버에서 렌더링이나 라우팅이 발생하기 전 먼저 실행됩니다.
  // (Promise 를 리턴하는 경우 해당 처리가 끝나기 전까지 렌더링이나 라우팅이 발생하지 않습니다.)
})

Lifecycle.onClientPrefetch(async (url, context) => {
  // 클라이언트에서 렌더링이나 라우팅이 발생하기 전 먼저 실행됩니다.
  // (Promise 를 리턴하는 경우 해당 처리가 끝나기 전까지 렌더링이나 라우팅이 발생하지 않습니다.)
})

// 현재 클라이언트에서 작동 중인 경우 true 를 반환합니다.
Lifecycle.isClient()

// 현재 서버에서 작동 중인 경우 true 를 반환합니다.
Lifecycle.isServer()
```



## 🏷 저작권

MIT Licensed.