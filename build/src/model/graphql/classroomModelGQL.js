"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const flashcardModelGQL_1 = tslib_1.__importDefault(require("./flashcardModelGQL"));
let Subject = class Subject {
};
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Subject.prototype, "subjectId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [flashcardModelGQL_1.default]),
    tslib_1.__metadata("design:type", Array)
], Subject.prototype, "flashcard", void 0);
Subject = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Subject);
let StudentModelGQL = class StudentModelGQL {
};
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], StudentModelGQL.prototype, "userId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], StudentModelGQL.prototype, "firstname", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], StudentModelGQL.prototype, "lastname", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], StudentModelGQL.prototype, "mail", void 0);
StudentModelGQL = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], StudentModelGQL);
let ClassroomModelGQL = class ClassroomModelGQL {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], ClassroomModelGQL.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], ClassroomModelGQL.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], ClassroomModelGQL.prototype, "year", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [StudentModelGQL]),
    tslib_1.__metadata("design:type", Array)
], ClassroomModelGQL.prototype, "student", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Subject]),
    tslib_1.__metadata("design:type", Array)
], ClassroomModelGQL.prototype, "subject", void 0);
ClassroomModelGQL = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], ClassroomModelGQL);
exports.default = ClassroomModelGQL;
