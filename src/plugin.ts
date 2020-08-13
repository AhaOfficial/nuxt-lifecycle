import type { Context } from '@nuxt/types'
// @ts-ignore
import * as _lifecycle from 'nuxt-lifecycle/dist/lifecycle/prebuild'

type lifecycleType = {
    onPrefetch: (url: string | undefined, context: Context) => Promise<any>
    onClientPrefetch: (url: string | undefined, context: Context) => Promise<any>
    onServerPrefetch: (url: string | undefined, context: Context) => Promise<any>
}
const lifecycle: lifecycleType = _lifecycle

export default async (context: Context) => {
    let url: string | undefined = undefined
    try { url = context.req.url } catch (e) { }

    if (process.browser) await lifecycle.onClientPrefetch(url, context)
    else await lifecycle.onServerPrefetch(url, context)
    await lifecycle.onPrefetch(url, context)
}
