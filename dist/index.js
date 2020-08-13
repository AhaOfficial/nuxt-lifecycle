"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var module_1 = __importDefault(require("./module"));
var runtime_1 = require("./lifecycle/runtime");
exports.onPrefetch = runtime_1.onPrefetch;
exports.onClientPrefetch = runtime_1.onClientPrefetch;
exports.onServerPrefetch = runtime_1.onServerPrefetch;
exports.isClient = runtime_1.isClient;
exports.isServer = runtime_1.isServer;
exports["default"] = module_1["default"];
