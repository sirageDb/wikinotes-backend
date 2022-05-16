"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectFlashcardModelGQL = exports.SubjectModelGQL = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let SubjectModelGQL = class SubjectModelGQL {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], SubjectModelGQL.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], SubjectModelGQL.prototype, "imageUrl", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], SubjectModelGQL.prototype, "name", void 0);
SubjectModelGQL = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], SubjectModelGQL);
exports.SubjectModelGQL = SubjectModelGQL;
let CustomFlashcardModelGQL = class CustomFlashcardModelGQL {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], CustomFlashcardModelGQL.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], CustomFlashcardModelGQL.prototype, "title", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [String]),
    tslib_1.__metadata("design:type", Array)
], CustomFlashcardModelGQL.prototype, "tag", void 0);
CustomFlashcardModelGQL = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], CustomFlashcardModelGQL);
let SubjectFlashcardModelGQL = class SubjectFlashcardModelGQL {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], SubjectFlashcardModelGQL.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [CustomFlashcardModelGQL]),
    tslib_1.__metadata("design:type", Array)
], SubjectFlashcardModelGQL.prototype, "flashcard", void 0);
SubjectFlashcardModelGQL = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], SubjectFlashcardModelGQL);
exports.SubjectFlashcardModelGQL = SubjectFlashcardModelGQL;
