"use strict";
exports.__esModule = true;
var prebuild_1 = require("./prebuild");
exports.onClientPrefetch = function (callback) {
    prebuild_1.callbackMap['onClientPrefetch'].push(callback);
};
exports.onServerPrefetch = function (callback) {
    prebuild_1.callbackMap['onServerPrefetch'].push(callback);
};
exports.onPrefetch = function (callback) {
    prebuild_1.callbackMap['onPrefetch'].push(callback);
};
exports.isClient = function () { return process.browser; };
exports.isServer = function () { return !process.browser; };
