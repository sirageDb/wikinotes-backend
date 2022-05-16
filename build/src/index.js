"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const env_dev_1 = tslib_1.__importDefault(require("./config/env.dev"));
const server_1 = tslib_1.__importDefault(require("./server"));
dotenv_1.default.config();
server_1.default(env_dev_1.default);
