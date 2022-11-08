"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};
const mongoProd = process.env.WIKINOTES_DB_TEST_URL || '';
const mongoDev = "mongodb://localhost:27017/wiki-notes";
const dbConnection = () => {
    if (process.env.NODE_ENV === 'production') {
        return mongoProd;
    }
    return mongoDev;
};
const db = dbConnection();
const config = {
    db,
    options,
    serverPort: Number(process.env.PORT) || 5000,
    serverStart: true,
    verbose: true,
    token: process.env.WIKINOTES_TOKEN_SECRET || 'notsecure',
};
exports.default = config;
