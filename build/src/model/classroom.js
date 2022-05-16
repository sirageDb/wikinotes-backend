"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const classrooms = new mongoose_1.default.Schema({
    name: String,
    year: String,
    student: [
        {
            firstname: String,
            lastname: String,
            mail: String,
            userId: String,
        }
    ],
    subject: [
        {
            subjectId: String,
            flashcard: [
                {
                    title: String,
                    tag: [String],
                    subtitle: [
                        {
                            title: String,
                            position: Number,
                            paragraph: [
                                {
                                    text: String,
                                    isValidate: Boolean,
                                    isPublic: Boolean,
                                    author: String,
                                    date: Date
                                }
                            ]
                        },
                    ],
                    ressource: [
                        {
                            name: String,
                            url: String
                        }
                    ],
                    question: [
                        {
                            text: String,
                            answer: [
                                {
                                    text: String,
                                    author: String,
                                    date: Date
                                }
                            ],
                            date: Date,
                            author: String,
                            isPublic: Boolean
                        }
                    ]
                }
            ]
        }
    ]
});
const model = mongoose_1.default.model("classrooms", classrooms);
exports.default = model;
