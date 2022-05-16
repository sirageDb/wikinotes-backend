"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const user = new mongoose_1.default.Schema({
    mail: { type: String, unique: true },
    firstname: String,
    lastname: String,
    password: String,
    token: String,
    isTeacher: { type: Boolean, default: false },
    classroom: [
        {
            classroomId: String,
            name: String,
            year: String
        }
    ]
});
const model = mongoose_1.default.model("users", user);
exports.default = model;
