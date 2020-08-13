"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var path_1 = __importDefault(require("path"));
var nuxtLifeCycle = function () {
    this.addPlugin(path_1["default"].resolve(__dirname, './plugin.js'));
};
exports["default"] = nuxtLifeCycle;
