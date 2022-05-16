"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const apollo_server_express_1 = require("apollo-server-express");
const subjectModelGQL_1 = require("../model/graphql/subjectModelGQL");
const subject_1 = tslib_1.__importDefault(require("../model/subject"));
const classroom_1 = tslib_1.__importDefault(require("../model/classroom"));
let SubjectResolver = class SubjectResolver {
    // Private method to get a classroom by providing its id
    // =================================================
    getClassroomById(classroomId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const classroom = yield classroom_1.default.findOne({ _id: classroomId });
                return classroom;
            }
            catch (_a) {
                throw new Error('cannot find classroom');
            }
        });
    }
    // =================================================
    getSubjectsByIds(subjectsIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const subjects = yield subject_1.default.find({ _id: { $in: subjectsIds } });
                return subjects;
            }
            catch (_a) {
                throw new Error('Cannot get subjects');
            }
        });
    }
    // get all subjects, (from subjects collection)
    // =================================================
    getAllSubjects() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const subjects = yield subject_1.default.find({});
                return subjects;
            }
            catch (_a) {
                // Useless error ... unless there is an error with mongoDb for example
                throw new apollo_server_express_1.ApolloError('Could not get subjects');
            }
        });
    }
    // Get classroom subjects by providing a classroomId
    // =================================================
    getAllSubjectsByClassroom(classroomId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const classroom = yield this.getClassroomById(classroomId);
                // { idCOllection : idOfArraySubjectCLassroom }
                const subjectsId = {};
                if (!classroom) {
                    throw new Error('cannot find classroom');
                }
                classroom.subject.forEach((subject) => {
                    subjectsId[subject.subjectId] = subject._id;
                });
                if (!Object.keys(subjectsId).length) {
                    throw new Error('No subjects in classroom');
                }
                const subjects = yield this.getSubjectsByIds(Object.keys(subjectsId));
                if (!subjects) {
                    throw new Error('Cannot get subjects');
                }
                for (let i = 0; i < subjects.length; i += 1) {
                    subjects[i]._id = subjectsId[subjects[i]._id];
                }
                return subjects;
            }
            catch (error) {
                throw new apollo_server_express_1.ApolloError(error.message);
            }
        });
    }
    // Get subjects flashcards
    // =================================================
    getAllFlashcardsBySubject(classroomId, subjectId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const classroom = yield classroom_1.default.findOne({ _id: classroomId, subject: { $elemMatch: { _id: subjectId } } }, ['subject.$']);
                if (!classroom) {
                    throw new Error('cannot find classroom');
                }
                return classroom.subject[0];
            }
            catch (_a) {
                throw new Error('cannot find classroom');
            }
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(() => [subjectModelGQL_1.SubjectModelGQL]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SubjectResolver.prototype, "getAllSubjects", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => [subjectModelGQL_1.SubjectModelGQL]),
    tslib_1.__param(0, type_graphql_1.Arg('classroomId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], SubjectResolver.prototype, "getAllSubjectsByClassroom", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => subjectModelGQL_1.SubjectFlashcardModelGQL),
    tslib_1.__param(0, type_graphql_1.Arg('classroomId')),
    tslib_1.__param(1, type_graphql_1.Arg('subjectId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], SubjectResolver.prototype, "getAllFlashcardsBySubject", null);
SubjectResolver = tslib_1.__decorate([
    type_graphql_1.Resolver(subjectModelGQL_1.SubjectModelGQL)
], SubjectResolver);
exports.default = SubjectResolver;
