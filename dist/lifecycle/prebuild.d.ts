import type { Context } from '@nuxt/types';
export declare type callbackType = (url: string | undefined, context: Context) => any;
export declare const callbackMap: {
    [callbackKey: string]: callbackType[];
};
export declare const onClientPrefetch: (url: string | undefined, context: Context) => Promise<void>;
export declare const onServerPrefetch: (url: string | undefined, context: Context) => Promise<void>;
export declare const onPrefetch: (url: string | undefined, context: Context) => Promise<void>;
export declare const clearAllPrefetch: (url: string | undefined, context: Context) => Promise<void>;
