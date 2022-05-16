"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const env_dev_1 = tslib_1.__importDefault(require("../config/env.dev"));
function contextToken({ req, }) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const token = ((_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization) || '';
        if (!token.length)
            return {};
        let user = {};
        try {
            const { data, exp } = yield jsonwebtoken_1.default.verify(token, env_dev_1.default.token);
            if (Date.now() >= exp)
                throw new Error('Token expiré');
            user = Object.assign({}, data);
            return { user };
        }
        catch (err) {
            return {};
        }
    });
}
exports.default = contextToken;
