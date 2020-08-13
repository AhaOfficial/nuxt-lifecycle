import type { Module } from '@nuxt/types'
import path from 'path'

const nuxtLifeCycle: Module = function () {
    this.addPlugin(path.resolve(__dirname, './plugin.js'))
}
export default nuxtLifeCycle
