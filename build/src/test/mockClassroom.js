"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTeacher = exports.mockStudent2 = exports.mockStudent1 = exports.mockClassroom = void 0;
const mockClassroom = {
    _id: '61002b3c71e26e43e0afca6f',
    name: 'dev1',
    year: '2012-2013',
    student: [
        {
            _id: '6102bee9d860d8a5ed680a31',
            mail: 'eleve1@aca.com',
            firstname: 'fsEleve1',
            lastname: 'lsEleve1',
        },
        {
            _id: '6102bee9d860d8a5ed680a32',
            mail: 'eleve2@aca.com',
            firstname: 'fsEleve2',
            lastname: 'lsEleve2',
        },
    ],
};
exports.mockClassroom = mockClassroom;
const mockStudent1 = {
    _id: '6102bee9d860d8a5ed680a31',
    mail: 'eleve1@aca.com',
    firstname: 'fsEleve1',
    lastname: 'lsEleve1',
    classroom: [
        {
            name: mockClassroom.name,
            classroom_id: mockClassroom._id,
            year: mockClassroom.year,
        },
    ],
};
exports.mockStudent1 = mockStudent1;
const mockStudent2 = {
    _id: '6102bee9d860d8a5ed680a32',
    mail: 'eleve2@aca.com',
    firstname: 'fsEleve2',
    lastname: 'lsEleve2',
    classroom: [
        {
            name: mockClassroom.name,
            classroom_id: mockClassroom._id,
            year: mockClassroom.year,
        },
    ],
};
exports.mockStudent2 = mockStudent2;
const mockTeacher = {
    mail: 'teacher1@aca.com',
    passwordHashed: '$2a$14$cAtWRplyHWFFv6n/k5f4ru0nnXBPjx4o6hXjDvbWFnF/QP1//S87a',
    password: 'teacher1',
};
exports.mockTeacher = mockTeacher;
