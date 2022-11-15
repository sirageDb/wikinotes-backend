"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const apollo_server_express_1 = require("apollo-server-express");
const user_1 = tslib_1.__importDefault(require("../model/user"));
const classroom_1 = tslib_1.__importDefault(require("../model/classroom"));
const classroomModelGQL_1 = tslib_1.__importDefault(require("../model/graphql/classroomModelGQL"));
const isMail_1 = tslib_1.__importDefault(require("../utils/isMail"));
let ClassroomResolver = class ClassroomResolver {
    // get all classrooms
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    getAllClassrooms() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const classrooms = yield classroom_1.default.find();
                return classrooms;
            }
            catch (_a) {
                throw new apollo_server_express_1.ApolloError("Error getting classrooms");
            }
        });
    }
    // get classroom
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    getClassroom(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const classroom = yield classroom_1.default.findOne({
                _id: id
            });
            if (!classroom) {
                throw new apollo_server_express_1.ApolloError("classroom does not exist");
            }
            return classroom;
        });
    }
    // add classroom
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    addClassroom(classroomName, academicYear, studentMails, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { user } = ctx;
            if (!user.isTeacher) {
                throw new apollo_server_express_1.ApolloError("You are not a teacher");
            }
            if (!studentMails.length)
                throw new apollo_server_express_1.ApolloError("Only one student mail is required to create a classroom.");
            const splitAcademicYear = academicYear.split("/");
            if (Number(splitAcademicYear[1]) < Number(splitAcademicYear[0])) {
                throw new apollo_server_express_1.ApolloError("Academic year format is not correct");
            }
            // make unique Mails
            // ==================================
            const studentMailsUnique = [...new Set(studentMails)];
            // ==================================
            const students = yield user_1.default.find({
                mail: { $in: studentMailsUnique },
                isTeacher: false
            });
            if (students.length !== studentMails.length) {
                // renvoyé les emails non insrits !
                throw new apollo_server_express_1.ApolloError("not all emails exist as users");
            }
            const newStudents = students.map((s) => ({
                firstname: s.firstname,
                lastname: s.lastname,
                mail: s.mail,
                userId: s._id
            }));
            try {
                // create a new classroom with the wanted values
                const newClassroom = new classroom_1.default({
                    name: classroomName,
                    year: academicYear,
                    student: newStudents
                });
                // map over wanted student and add classroom in each one
                studentMailsUnique.map((mail) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    yield user_1.default.findOneAndUpdate({ mail }, {
                        $push: {
                            classroom: {
                                classroomId: newClassroom._id,
                                name: newClassroom.name,
                                year: newClassroom.year
                            }
                        }
                    });
                }));
                yield user_1.default.findOneAndUpdate({ _id: user.id }, {
                    $push: {
                        classroom: {
                            classroomId: newClassroom._id,
                            name: newClassroom.name,
                            year: newClassroom.year
                        }
                    }
                });
                // save classroom
                return yield newClassroom.save();
            }
            catch (error) {
                console.log(error);
                throw new apollo_server_express_1.ApolloError("Could not add a new classroom");
            }
        });
    }
    // add student to classroom
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    addStudentToClassroom(studentMail, id, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { user } = ctx;
            if (!user.isTeacher) {
                throw new apollo_server_express_1.ApolloError("You are not a teacher");
            }
            // =============================================
            // check if student exists and is not a teacher and student not in the classroom
            const student = yield user_1.default.findOne({
                mail: studentMail,
                isTeacher: false,
                "classroom.classroomId": { $ne: id }
            });
            if (!student) {
                throw new apollo_server_express_1.ApolloError("Student does not exist or already in the classroom");
            }
            if (!isMail_1.default(studentMail)) {
                throw new apollo_server_express_1.ApolloError("Email not in correct syntax ***@***.**");
            }
            const newStudent = {
                firstname: student.firstname,
                lastname: student.lastname,
                userId: student.id,
                mail: student.mail
            };
            const classRoom = yield classroom_1.default.findOneAndUpdate({ _id: id }, {
                $push: {
                    student: newStudent
                }
            }, { new: true });
            if (classRoom) {
                yield user_1.default.findOneAndUpdate({ _id: student._id }, {
                    $push: {
                        classroom: {
                            classroomId: id,
                            name: classRoom.name,
                            year: classRoom.year
                        }
                    }
                });
            }
            return classRoom;
        });
    }
    // remove student from classroom
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    removeStudentFromClassroom(studentMail, id, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { user } = ctx;
            if (!user.isTeacher) {
                throw new apollo_server_express_1.ApolloError("You are not a teacher");
            }
            // =============================================
            // check if student exists and is not a teacher and student not in the classroom
            const student = yield user_1.default.findOne({
                mail: studentMail,
                isTeacher: false
            });
            if (!student) {
                throw new apollo_server_express_1.ApolloError("Student does not exist");
            }
            if (!isMail_1.default(studentMail)) {
                throw new apollo_server_express_1.ApolloError("Email not in correct syntax ***@***.**");
            }
            // delete classroom from user object
            yield user_1.default.findOneAndUpdate({ _id: student._id }, {
                $pull: {
                    classroom: {
                        classroomId: id
                    }
                }
            });
            // delete user from classroom
            yield classroom_1.default.findOneAndUpdate({ _id: id }, {
                $pull: {
                    student: { userId: student._id }
                }
            }, { new: true });
            const classroom = yield classroom_1.default.findOne({ _id: id });
            return classroom;
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(() => [classroomModelGQL_1.default]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomResolver.prototype, "getAllClassrooms", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => classroomModelGQL_1.default),
    tslib_1.__param(0, type_graphql_1.Arg("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomResolver.prototype, "getClassroom", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => classroomModelGQL_1.default),
    tslib_1.__param(0, type_graphql_1.Arg("classroomName")),
    tslib_1.__param(1, type_graphql_1.Arg("academicYear")),
    tslib_1.__param(2, type_graphql_1.Arg("studentMails", () => [String])),
    tslib_1.__param(3, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Array, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomResolver.prototype, "addClassroom", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => classroomModelGQL_1.default),
    tslib_1.__param(0, type_graphql_1.Arg("studentMail")),
    tslib_1.__param(1, type_graphql_1.Arg("id")),
    tslib_1.__param(2, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomResolver.prototype, "addStudentToClassroom", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => classroomModelGQL_1.default),
    tslib_1.__param(0, type_graphql_1.Arg("studentMail")),
    tslib_1.__param(1, type_graphql_1.Arg("id")),
    tslib_1.__param(2, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomResolver.prototype, "removeStudentFromClassroom", null);
ClassroomResolver = tslib_1.__decorate([
    type_graphql_1.Resolver(classroomModelGQL_1.default)
], ClassroomResolver);
exports.default = ClassroomResolver;
