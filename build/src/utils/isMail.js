"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isMail(mail) {
    const regex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    return regex.test(mail) === true;
}
exports.default = isMail;
