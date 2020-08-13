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

    if (process.browser) await lifecycle.onClientPrefetch(context.req.url, context)
    else await lifecycle.onServerPrefetch(context.req.url, context)
    await lifecycle.onPrefetch(context.req.url, context)
}
