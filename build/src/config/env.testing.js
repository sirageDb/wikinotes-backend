"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};
const db = 'mongodb://127.0.0.1:27017/wiki-notes-test';
const config = {
    db,
    options,
    serverPort: 5001,
    serverStart: false,
    verbose: false,
    token: 'notsecure123',
};
exports.default = config;
