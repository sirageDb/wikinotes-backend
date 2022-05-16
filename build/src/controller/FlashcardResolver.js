"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const apollo_server_express_1 = require("apollo-server-express");
const classroom_1 = tslib_1.__importDefault(require("../model/classroom"));
const flashcardModelGQL_1 = tslib_1.__importDefault(require("../model/graphql/flashcardModelGQL"));
let RessourceInput = class RessourceInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], RessourceInput.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], RessourceInput.prototype, "url", void 0);
RessourceInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], RessourceInput);
let SubtitleInput = class SubtitleInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], SubtitleInput.prototype, "subtitleId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], SubtitleInput.prototype, "title", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Number)
], SubtitleInput.prototype, "position", void 0);
SubtitleInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], SubtitleInput);
let QuestionInput = class QuestionInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], QuestionInput.prototype, "text", void 0);
QuestionInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], QuestionInput);
let AnswerInput = class AnswerInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], AnswerInput.prototype, "questionId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], AnswerInput.prototype, "text", void 0);
AnswerInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], AnswerInput);
let CreateFlashcard = class CreateFlashcard {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], CreateFlashcard.prototype, "classroomId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], CreateFlashcard.prototype, "subjectId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], CreateFlashcard.prototype, "title", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [String], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], CreateFlashcard.prototype, "tag", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [SubtitleInput], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], CreateFlashcard.prototype, "subtitle", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [RessourceInput], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], CreateFlashcard.prototype, "ressource", void 0);
CreateFlashcard = tslib_1.__decorate([
    type_graphql_1.ArgsType()
], CreateFlashcard);
let UpdateFlashcard = class UpdateFlashcard {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], UpdateFlashcard.prototype, "classroomId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], UpdateFlashcard.prototype, "subjectId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], UpdateFlashcard.prototype, "flashcardId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateFlashcard.prototype, "title", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [String], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], UpdateFlashcard.prototype, "tag", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [SubtitleInput], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], UpdateFlashcard.prototype, "subtitle", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [RessourceInput], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], UpdateFlashcard.prototype, "ressource", void 0);
UpdateFlashcard = tslib_1.__decorate([
    type_graphql_1.ArgsType()
], UpdateFlashcard);
let ParagraphInput = class ParagraphInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], ParagraphInput.prototype, "paragraphId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], ParagraphInput.prototype, "text", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], ParagraphInput.prototype, "isPublic", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], ParagraphInput.prototype, "isValidate", void 0);
ParagraphInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], ParagraphInput);
let UpdateFlashcardStudent = class UpdateFlashcardStudent {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], UpdateFlashcardStudent.prototype, "classroomId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], UpdateFlashcardStudent.prototype, "subjectId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], UpdateFlashcardStudent.prototype, "flashcardId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateFlashcardStudent.prototype, "subtitleId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => ParagraphInput, { nullable: true }),
    tslib_1.__metadata("design:type", ParagraphInput)
], UpdateFlashcardStudent.prototype, "paragraph", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", RessourceInput)
], UpdateFlashcardStudent.prototype, "ressource", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", QuestionInput)
], UpdateFlashcardStudent.prototype, "question", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", AnswerInput)
], UpdateFlashcardStudent.prototype, "answer", void 0);
UpdateFlashcardStudent = tslib_1.__decorate([
    type_graphql_1.ArgsType()
], UpdateFlashcardStudent);
let FlashcardResolver = class FlashcardResolver {
    getAllFlashcards(classroomId, tag, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { user } = ctx;
            const classroom = yield classroom_1.default.findById(classroomId);
            if (!classroom) {
                throw new apollo_server_express_1.ApolloError('Classroom not found');
            }
            const allFlashcards = classroom.subject.reduce((flashcards, subject) => {
                let flashes = [];
                if (tag) {
                    tag.forEach((t) => {
                        flashes = flashes.concat(subject.flashcard.filter((f) => f.tag.includes(t.trim())));
                    });
                }
                else {
                    flashes = subject.flashcard;
                }
                flashes = flashes.map((f) => {
                    const newFlash = f;
                    newFlash.subjectId = subject._id;
                    return newFlash;
                });
                flashcards.push(...flashes);
                return flashcards;
            }, []);
            return [...new Set(allFlashcards)].map((f) => {
                var _a;
                const flashcard = f;
                flashcard.subtitle = flashcard.subtitle.map((s) => {
                    const subtitle = s;
                    subtitle.paragraph = subtitle.paragraph.filter((p) => p.author === user.id || p.isPublic === true);
                    return subtitle;
                });
                let allDates = flashcard.question.reduce((dates, question) => {
                    const answerDate = question.answer.map((a) => a.date);
                    dates.push(...answerDate);
                    return dates;
                }, []);
                allDates = [...new Set(allDates.sort((a, b) => (a < b ? 1 : -1)))];
                flashcard.dateLastAnswer = (_a = allDates[0]) === null || _a === void 0 ? void 0 : _a.toISOString();
                return flashcard;
            });
        });
    }
    getFlashcard(flashcardId, classroomId, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { user } = ctx;
            const classroom = yield classroom_1.default.findOne({
                _id: classroomId,
                subject: {
                    $elemMatch: { flashcard: { $elemMatch: { _id: flashcardId } } },
                },
            }, ['subject._id', 'subject.flashcard.$']);
            if (!classroom) {
                throw new apollo_server_express_1.ApolloError('Flashcard not found');
            }
            const flashcard = classroom.subject[0].flashcard.filter((f) => { var _a; return ((_a = f._id) === null || _a === void 0 ? void 0 : _a.toString()) === flashcardId; })[0];
            flashcard.subtitle = flashcard.subtitle.map((s) => {
                const subtitle = s;
                subtitle.paragraph = subtitle.paragraph.filter((p) => p.author === user.id || p.isPublic === true);
                return subtitle;
            });
            flashcard.subjectId = classroom.subject[0]._id;
            return flashcard;
        });
    }
    createFlashcard({ classroomId, subjectId, title, ressource, tag, subtitle, }, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { user } = ctx;
            if (!user.isTeacher) {
                throw new apollo_server_express_1.ApolloError('You are not a teacher');
            }
            if (!title.length) {
                throw new apollo_server_express_1.ApolloError('Title is required');
            }
            // Check if flashcard with same title is exist, if yes throw error otherwise continu
            const isExistFlashcard = yield classroom_1.default.findOne({
                _id: classroomId,
                subject: {
                    $elemMatch: { subjectId, flashcard: { $elemMatch: { title } } },
                },
            });
            if (isExistFlashcard) {
                throw new apollo_server_express_1.ApolloError('Title Flashcard already exists');
            }
            const newSubtitle = [];
            subtitle === null || subtitle === void 0 ? void 0 : subtitle.forEach((sub, index) => {
                newSubtitle.push({
                    title: sub.title,
                    position: index,
                });
            });
            try {
                const newFlashCard = {
                    title,
                    tag,
                    subtitle: newSubtitle,
                    ressource,
                };
                let filterOptions; // will be dynamically changed, depends on if subject does exist or not
                let pushOptions; // will be dynamically changed, depends on if subject does exist or not
                // Check if subject does exist in classroom
                const isExistSubject = yield classroom_1.default.findOne({
                    _id: classroomId,
                    subject: { $elemMatch: { subjectId } },
                });
                // if subject does exist in the classroom then add to it the newly created flashcard
                if (isExistSubject) {
                    filterOptions = {
                        _id: classroomId,
                        subject: { $elemMatch: { subjectId } },
                    };
                    pushOptions = { 'subject.$.flashcard': newFlashCard };
                }
                // if subject does exist in the classroom then create a new subject object with the receivec subjectId
                if (!isExistSubject) {
                    const newSubject = {
                        subjectId,
                        flashcard: [newFlashCard],
                    };
                    filterOptions = { _id: classroomId };
                    pushOptions = { subject: newSubject };
                }
                const classroom = yield classroom_1.default.findOneAndUpdate(filterOptions, { $push: pushOptions }, {
                    new: true,
                    projection: { subject: { $elemMatch: { subjectId } } },
                });
                if (!classroom) {
                    throw new Error('Error update');
                }
                const subId = classroom.subject[0]._id;
                const flashcard = classroom.subject[0].flashcard.filter((f) => f.title === title)[0];
                if (!flashcard) {
                    throw new Error('Error update');
                }
                flashcard.subjectId = subId;
                return flashcard;
            }
            catch (error) {
                throw new apollo_server_express_1.ApolloError('Could not create flashcard');
            }
        });
    }
    updateFlashcard({ classroomId, subjectId, flashcardId, title, ressource, tag, subtitle, }, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { user } = ctx;
            if (!user.isTeacher) {
                throw new apollo_server_express_1.ApolloError('You are not a teacher');
            }
            const updQuery = {
                $push: {},
                $set: Object.assign(Object.assign(Object.assign({}, (title ? { 'subject.$[s].flashcard.$[f].title': title } : {})), (ressource
                    ? { 'subject.$[s].flashcard.$[f].ressource': ressource }
                    : {})), (tag ? { 'subject.$[s].flashcard.$[f].tag': tag } : {})),
            };
            const filters = [
                { 's._id': subjectId },
                { 'f._id': flashcardId },
            ];
            const newSubtitle = [];
            const existingSubtitle = subtitle === null || subtitle === void 0 ? void 0 : subtitle.reduce((id, sub) => {
                if (sub.subtitleId) {
                    id.push(sub.subtitleId);
                }
                return id;
            }, []);
            const existingParagraph = {};
            if (existingSubtitle === null || existingSubtitle === void 0 ? void 0 : existingSubtitle.length) {
                try {
                    const classroom = yield classroom_1.default.findOne({
                        _id: classroomId,
                        subject: {
                            $elemMatch: { flashcard: { $elemMatch: { _id: flashcardId } } },
                        },
                    }, ['subject.flashcard.$']);
                    classroom === null || classroom === void 0 ? void 0 : classroom.subject[0].flashcard.filter((f) => { var _a; return ((_a = f._id) === null || _a === void 0 ? void 0 : _a.toString()) === flashcardId; })[0].subtitle.filter((s) => { var _a; return existingSubtitle.includes(((_a = s._id) === null || _a === void 0 ? void 0 : _a.toString()) || ''); }).forEach((s) => {
                        existingParagraph[s._id] = s.paragraph;
                    });
                }
                catch (e) {
                    throw new apollo_server_express_1.ApolloError('Subtitle not found');
                }
            }
            subtitle === null || subtitle === void 0 ? void 0 : subtitle.forEach((sub, index) => {
                newSubtitle.push({
                    title: sub.title,
                    position: index,
                    paragraph: sub.subtitleId ? existingParagraph[sub.subtitleId] : [],
                });
            });
            if (newSubtitle.length) {
                updQuery.$set[`subject.$[s].flashcard.$[f].subtitle`] = newSubtitle;
            }
            try {
                const classroom = yield classroom_1.default.findOneAndUpdate({
                    _id: classroomId,
                }, Object.assign({}, updQuery), {
                    new: true,
                    upsert: true,
                    arrayFilters: [...filters],
                    projection: {
                        subject: { $elemMatch: { _id: subjectId } },
                    },
                });
                if (!classroom) {
                    throw new Error('Classroom not found');
                }
                return (classroom.subject[0].flashcard.filter((f) => { var _a; return ((_a = f._id) === null || _a === void 0 ? void 0 : _a.toString()) === flashcardId; })[0] || null);
            }
            catch (e) {
                throw new apollo_server_express_1.ApolloError((e === null || e === void 0 ? void 0 : e.message) || 'Could not update flashcard');
            }
        });
    }
    updateFlashcardStudent({ classroomId, subjectId, flashcardId, subtitleId, paragraph, ressource, question, answer, }, ctx) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { user } = ctx;
            if (user.isTeacher) {
                throw new apollo_server_express_1.ApolloError('You are not a student');
            }
            if (paragraph && !subtitleId) {
                throw new apollo_server_express_1.ApolloError('SubtitleId is required for paragraph action');
            }
            const filters = [
                { 'sub._id': subjectId },
                { 'flash._id': flashcardId },
            ];
            const updQuery = { $set: {}, $push: {} };
            if (paragraph === null || paragraph === void 0 ? void 0 : paragraph.paragraphId) {
                updQuery.$set['subject.$[sub].flashcard.$[flash].subtitle.$[subt].paragraph.$[par].isPublic'] = (_a = paragraph.isPublic) !== null && _a !== void 0 ? _a : true;
                if ('isValidate' in paragraph) {
                    updQuery.$set['subject.$[sub].flashcard.$[flash].subtitle.$[subt].paragraph.$[par].isValidate'] = paragraph.isValidate;
                }
                if ('text' in paragraph) {
                    updQuery.$set['subject.$[sub].flashcard.$[flash].subtitle.$[subt].paragraph.$[par].text'] = paragraph.text;
                    updQuery.$set['subject.$[sub].flashcard.$[flash].subtitle.$[subt].paragraph.$[par].author'] = user.id;
                    updQuery.$set['subject.$[sub].flashcard.$[flash].subtitle.$[subt].paragraph.$[par].isValidate'] = false;
                }
                filters.push({ 'par._id': paragraph.paragraphId }, { 'subt._id': subtitleId || '' });
            }
            else if (paragraph && paragraph.text) {
                updQuery.$push['subject.$[sub].flashcard.$[flash].subtitle.$[subt].paragraph'] = {
                    text: paragraph.text || '',
                    isPublic: (paragraph === null || paragraph === void 0 ? void 0 : paragraph.isPublic) || true,
                    author: user.id,
                    isValidate: false,
                    date: Date.now(),
                };
                filters.push({ 'subt._id': subtitleId || '' });
            }
            if (ressource) {
                updQuery.$push['subject.$[sub].flashcard.$[flash].ressource'] = {
                    name: ressource.name,
                    url: ressource.url,
                };
            }
            if (question) {
                updQuery.$push['subject.$[sub].flashcard.$[flash].question'] = {
                    text: question.text,
                    date: Date.now(),
                    author: user.id,
                };
            }
            if (answer) {
                updQuery.$push['subject.$[sub].flashcard.$[flash].question.$[question].answer'] = {
                    text: answer.text,
                    date: Date.now(),
                    author: user.id,
                };
                filters.push({ 'question._id': answer.questionId });
            }
            console.log(updQuery);
            console.log(filters);
            try {
                const classroom = yield classroom_1.default.findOneAndUpdate({
                    _id: classroomId,
                }, Object.assign({}, updQuery), {
                    new: true,
                    upsert: true,
                    arrayFilters: [...filters],
                });
                if (!classroom) {
                    throw new Error('Classroom not found');
                }
                const flash = (_b = classroom.subject
                    .find((s) => { var _a; return ((_a = s._id) === null || _a === void 0 ? void 0 : _a.toString()) === subjectId; })) === null || _b === void 0 ? void 0 : _b.flashcard.find((f) => { var _a; return ((_a = f._id) === null || _a === void 0 ? void 0 : _a.toString()) === flashcardId; });
                if (!flash) {
                    throw new Error('Flashcard not found');
                }
                flash.subtitle.map((s) => {
                    const subtitle = s;
                    subtitle.paragraph = subtitle.paragraph.filter((p) => p.author === user.id || p.isPublic === true);
                    return subtitle;
                });
                return flash;
            }
            catch (e) {
                throw new apollo_server_express_1.ApolloError((e === null || e === void 0 ? void 0 : e.message) || 'Could not update flashcard');
            }
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(() => [flashcardModelGQL_1.default]),
    tslib_1.__param(0, type_graphql_1.Arg('classroomId')),
    tslib_1.__param(1, type_graphql_1.Arg('tag', (type) => [String], { nullable: true })),
    tslib_1.__param(2, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Array, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FlashcardResolver.prototype, "getAllFlashcards", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => flashcardModelGQL_1.default),
    tslib_1.__param(0, type_graphql_1.Arg('flashcardId')),
    tslib_1.__param(1, type_graphql_1.Arg('classroomId')),
    tslib_1.__param(2, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FlashcardResolver.prototype, "getFlashcard", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => flashcardModelGQL_1.default),
    tslib_1.__param(0, type_graphql_1.Args()),
    tslib_1.__param(1, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateFlashcard, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FlashcardResolver.prototype, "createFlashcard", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => flashcardModelGQL_1.default),
    tslib_1.__param(0, type_graphql_1.Args()),
    tslib_1.__param(1, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UpdateFlashcard, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FlashcardResolver.prototype, "updateFlashcard", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => flashcardModelGQL_1.default),
    tslib_1.__param(0, type_graphql_1.Args()),
    tslib_1.__param(1, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UpdateFlashcardStudent, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FlashcardResolver.prototype, "updateFlashcardStudent", null);
FlashcardResolver = tslib_1.__decorate([
    type_graphql_1.Resolver(flashcardModelGQL_1.default)
], FlashcardResolver);
exports.default = FlashcardResolver;
