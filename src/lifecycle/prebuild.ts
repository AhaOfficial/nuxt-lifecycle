import type { Context } from '@nuxt/types'
export type callbackType = (url: string | undefined, context: Context) => any
export const callbackMap: {
    [callbackKey: string]: callbackType[]
} = {
    onClientPrefetch: [],
    onServerPrefetch: [],
    onPrefetch: [],
}

export const onClientPrefetch = async (url: string | undefined, context: Context) => {
    for (let callback of callbackMap['onClientPrefetch']) await callback(url, context)
}
export const onServerPrefetch = async (url: string | undefined, context: Context) => {
    for (let callback of callbackMap['onServerPrefetch']) await callback(url, context)
}
export const onPrefetch = async (url: string | undefined, context: Context) => {
    for (let callback of callbackMap['onPrefetch']) await callback(url, context)
}
