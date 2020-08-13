import { callbackMap, callbackType } from './prebuild'

export const onClientPrefetch = (callback: callbackType) => {
    callbackMap['onClientPrefetch'].push(callback)
}
export const onServerPrefetch = (callback: callbackType) => {
    callbackMap['onServerPrefetch'].push(callback)
}
export const onPrefetch = (callback: callbackType) => {
    callbackMap['onPrefetch'].push(callback)
}

export const isClient = () => process.browser
export const isServer = () => !process.browser