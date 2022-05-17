"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtitle = exports.Paragraph = exports.Ressource = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let Answer = class Answer {
};
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Answer.prototype, "text", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Date)
], Answer.prototype, "date", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Answer.prototype, "author", void 0);
Answer = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Answer);
let Question = class Question {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], Question.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Question.prototype, "text", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Answer]),
    tslib_1.__metadata("design:type", Array)
], Question.prototype, "answer", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Date)
], Question.prototype, "date", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Question.prototype, "author", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Boolean)
], Question.prototype, "isPublic", void 0);
Question = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Question);
let Ressource = class Ressource {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], Ressource.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Ressource.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Ressource.prototype, "url", void 0);
Ressource = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Ressource);
exports.Ressource = Ressource;
let Paragraph = class Paragraph {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], Paragraph.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Paragraph.prototype, "text", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Boolean)
], Paragraph.prototype, "isValidate", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Boolean)
], Paragraph.prototype, "isPublic", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Paragraph.prototype, "author", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Date)
], Paragraph.prototype, "date", void 0);
Paragraph = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Paragraph);
exports.Paragraph = Paragraph;
let Subtitle = class Subtitle {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], Subtitle.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Subtitle.prototype, "title", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Number)
], Subtitle.prototype, "position", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Paragraph]),
    tslib_1.__metadata("design:type", Array)
], Subtitle.prototype, "paragraph", void 0);
Subtitle = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Subtitle);
exports.Subtitle = Subtitle;
let FlashcardModelGQL = class FlashcardModelGQL {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], FlashcardModelGQL.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], FlashcardModelGQL.prototype, "dateLastAnswer", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], FlashcardModelGQL.prototype, "subjectId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], FlashcardModelGQL.prototype, "title", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [String]),
    tslib_1.__metadata("design:type", Array)
], FlashcardModelGQL.prototype, "tag", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Subtitle]),
    tslib_1.__metadata("design:type", Array)
], FlashcardModelGQL.prototype, "subtitle", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Ressource]),
    tslib_1.__metadata("design:type", Array)
], FlashcardModelGQL.prototype, "ressource", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Question]),
    tslib_1.__metadata("design:type", Array)
], FlashcardModelGQL.prototype, "question", void 0);
FlashcardModelGQL = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], FlashcardModelGQL);
exports.default = FlashcardModelGQL;
