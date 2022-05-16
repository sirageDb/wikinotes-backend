"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let Classroom = class Classroom {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], Classroom.prototype, "classroomId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Classroom.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Classroom.prototype, "year", void 0);
Classroom = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Classroom);
let UserModelGQL = class UserModelGQL {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], UserModelGQL.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], UserModelGQL.prototype, "mail", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], UserModelGQL.prototype, "firstname", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], UserModelGQL.prototype, "lastname", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], UserModelGQL.prototype, "password", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Boolean)
], UserModelGQL.prototype, "isTeacher", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], UserModelGQL.prototype, "token", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Classroom]),
    tslib_1.__metadata("design:type", Array)
], UserModelGQL.prototype, "classroom", void 0);
UserModelGQL = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], UserModelGQL);
exports.default = UserModelGQL;
