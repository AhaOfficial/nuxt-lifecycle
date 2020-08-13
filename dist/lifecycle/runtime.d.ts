import { callbackType } from './prebuild';
export declare const onClientPrefetch: (callback: callbackType) => void;
export declare const onServerPrefetch: (callback: callbackType) => void;
export declare const onPrefetch: (callback: callbackType) => void;
export declare const isClient: () => boolean;
export declare const isServer: () => boolean;
