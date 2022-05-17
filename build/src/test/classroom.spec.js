"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const server_1 = tslib_1.__importDefault(require("../server")); //get only start server function
const env_testing_1 = tslib_1.__importDefault(require("../config/env.testing"));
const apollo_server_core_1 = require("apollo-server-core");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const mongodb_memory_server_core_1 = require("mongodb-memory-server-core"); //spinning mongo in memory for fast tests
const classroom_1 = tslib_1.__importDefault(require("../model/classroom"));
const user_1 = tslib_1.__importDefault(require("../model/user"));
const mockClassroom_1 = require("./mockClassroom");
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//queyr to get all classrooms;
const GET_ALL_CLASSROOMS = apollo_server_core_1.gql `
  {
    getAllClassrooms {
      id
      name
      year
    }
  }
`;
//queyr to get a single classroom by defining its _id
const GET_CLASSROOM = apollo_server_core_1.gql `{getClassroom(id : "${mockClassroom_1.mockClassroom._id}"){id, name, year}}`;
//mutation to add a classroom by defining classroomName,
const ADD_CLASSROOM = apollo_server_core_1.gql `
  mutation {
    addClassroom(
      classroomName: "dev"
      academicYear: "2012-2013"
      studentMails: ["eleve1@aca.com", "eleve2@aca.com"]
    ) {
      id
      name
      year
      student {
        userId
        mail
      }
    }
  }
`;
const GET_TOKEN_LOGIN = apollo_server_core_1.gql `
  mutation {
    login(mail:"${mockClassroom_1.mockTeacher.mail}", password:"${mockClassroom_1.mockTeacher.password}") {
      token
    }
  }
`;
//mutation to add a classroom by providing classroom _id and students email we want to add
const ADD_STUDENT_TO_CLASSROOM = apollo_server_core_1.gql `mutation{addStudentToClassroom(id: "${mockClassroom_1.mockClassroom._id}", studentMail : "${mockClassroom_1.mockStudent1.mail}"){id, student{mail}}
}`;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
describe('classroom integration testing', () => {
    let apollo;
    let mongo = null;
    let token;
    beforeAll(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        mongo = yield mongodb_memory_server_core_1.MongoMemoryServer.create();
        env_testing_1.default.db = mongo.getUri();
    }));
    beforeAll(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        apollo = yield server_1.default(env_testing_1.default);
        const newUserTeacher = new user_1.default({
            mail: mockClassroom_1.mockTeacher.mail,
            password: mockClassroom_1.mockTeacher.passwordHashed,
            isTeacher: true,
        });
        yield newUserTeacher.save();
        const response = yield apollo.executeOperation({
            query: GET_TOKEN_LOGIN,
        });
        token = ((_a = response.data) === null || _a === void 0 ? void 0 : _a.login.token) || '';
    }));
    beforeEach(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const classroom = yield classroom_1.default.findOne({ _id: mockClassroom_1.mockClassroom._id });
        if (!classroom) {
            const newClassroom = yield new classroom_1.default({
                _id: mockClassroom_1.mockClassroom._id,
                name: mockClassroom_1.mockClassroom.name,
                year: mockClassroom_1.mockClassroom.year,
            });
            yield newClassroom.save();
        }
    }));
    afterEach(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield classroom_1.default.deleteMany();
        yield user_1.default.deleteMany();
    }));
    afterAll(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        if (apollo !== null) {
            yield apollo.stop();
        }
        yield (mongo === null || mongo === void 0 ? void 0 : mongo.stop()); //strop mongoDB in memory instance
        yield mongoose_1.default.disconnect();
    }));
    //===========================================================================================
    it('we are getting all classrooms', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        var _b, _c;
        //empty the classroom of the mocked classroom the we insert before each test
        yield classroom_1.default.deleteMany();
        const mockClassroom1 = {
            name: 'dev1',
            year: '2011-2012',
        };
        const mockClassroom2 = {
            name: 'dev2',
            year: '2012-2013',
        };
        const insertedClassroom1 = yield new classroom_1.default({
            name: mockClassroom1.name,
            year: mockClassroom1.name,
        });
        yield insertedClassroom1.save();
        const insertedClassroom2 = yield new classroom_1.default({
            name: mockClassroom2.name,
            year: mockClassroom2.name,
        });
        yield insertedClassroom2.save();
        const response = yield apollo.executeOperation({
            query: GET_ALL_CLASSROOMS,
        });
        expect(response.errors).toBeUndefined();
        expect(response.data).toBeDefined();
        expect((_b = response.data) === null || _b === void 0 ? void 0 : _b.getAllClassrooms[0].name).toEqual(mockClassroom1.name);
        expect((_c = response.data) === null || _c === void 0 ? void 0 : _c.getAllClassrooms[1].name).toEqual(mockClassroom2.name);
    }));
    //===========================================================================================
    it('we can get a classroom by id', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        var _d;
        const response = yield apollo.executeOperation({
            query: GET_CLASSROOM,
        });
        expect(response.errors).toBeUndefined();
        expect(response.data).toBeDefined();
        expect((_d = response.data) === null || _d === void 0 ? void 0 : _d.getClassroom.id).toEqual(mockClassroom_1.mockClassroom._id);
    }));
    //===========================================================================================
    it('we can create a new classroom by giving academicYear, name, and student mails', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        var _e, _f, _g, _h;
        const insertedStudent1 = new user_1.default({
            _id: mockClassroom_1.mockStudent1._id,
            mail: mockClassroom_1.mockStudent1.mail,
            isTeacher: false,
        });
        yield insertedStudent1.save();
        const insertedStudent2 = new user_1.default({
            _id: mockClassroom_1.mockStudent2._id,
            mail: mockClassroom_1.mockStudent2.mail,
            isTeacher: false,
        });
        yield insertedStudent2.save();
        const response = yield apollo.executeOperation({
            query: ADD_CLASSROOM,
        }, { req: { headers: { authorization: token } } });
        expect((_e = response.data) === null || _e === void 0 ? void 0 : _e.addClassroom.student[0].mail).toEqual(mockClassroom_1.mockStudent1.mail);
        expect((_f = response.data) === null || _f === void 0 ? void 0 : _f.addClassroom.student[1].mail).toEqual(mockClassroom_1.mockStudent2.mail);
        expect((_g = response.data) === null || _g === void 0 ? void 0 : _g.addClassroom.student[0].userId).toEqual(mockClassroom_1.mockStudent1._id);
        expect((_h = response.data) === null || _h === void 0 ? void 0 : _h.addClassroom.student[1].userId).toEqual(mockClassroom_1.mockStudent2._id);
    }));
    //===========================================================================================
    it('we can add a student to a classroom by providing classroom id and student mail', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        var _j, _k;
        const insertedStudent = yield new user_1.default({
            _id: mockClassroom_1.mockStudent1._id,
            mail: mockClassroom_1.mockStudent1.mail,
            firstname: mockClassroom_1.mockStudent1.firstname,
            lastname: mockClassroom_1.mockStudent1.lastname,
        });
        yield insertedStudent.save();
        const response = yield apollo.executeOperation({
            query: ADD_STUDENT_TO_CLASSROOM,
        }, { req: { headers: { authorization: token } } });
        expect(response.errors).toBeUndefined();
        expect(response.data).toBeDefined();
        expect((_j = response.data) === null || _j === void 0 ? void 0 : _j.addStudentToClassroom.id).toEqual(mockClassroom_1.mockClassroom._id);
        expect((_k = response.data) === null || _k === void 0 ? void 0 : _k.addStudentToClassroom.student[0].mail).toEqual(mockClassroom_1.mockStudent1.mail);
        expect(true).toBeTruthy();
    }));
});
