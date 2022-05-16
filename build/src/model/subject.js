"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const subjects = new mongoose_1.default.Schema({
    name: String,
    imageUrl: String,
});
const model = mongoose_1.default.model("subjects", subjects);
exports.default = model;
