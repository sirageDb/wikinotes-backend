"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcryptjs_1 = tslib_1.__importDefault(require("bcryptjs"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const type_graphql_1 = require("type-graphql");
const apollo_server_express_1 = require("apollo-server-express");
const user_1 = tslib_1.__importDefault(require("../model/user"));
const env_dev_1 = tslib_1.__importDefault(require("../config/env.dev"));
const userModelGQL_1 = tslib_1.__importDefault(require("../model/graphql/userModelGQL"));
let UserAuthResolver = class UserAuthResolver {
    changePassword(newPassword, oldPassword, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { user } = ctx;
            if (!user.id)
                throw new Error('401 - Unauthorized');
            try {
                const userInfo = yield user_1.default.findById(user.id);
                if (!userInfo)
                    throw new Error();
                if (!(yield bcryptjs_1.default.compare(oldPassword, userInfo.password)))
                    throw new Error();
                const hashedPassword = yield bcryptjs_1.default.hash(newPassword, 14);
                yield user_1.default.findOneAndUpdate({ _id: user.id }, { $set: { password: hashedPassword } });
                return true;
            }
            catch (e) {
                console.log(e);
                throw new apollo_server_express_1.ApolloError('An error occured. Please verify your crediantials');
            }
        });
    }
    resetPassword(mail, ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { user } = ctx;
            if (!user.id || !user.isTeacher) {
                throw new Error('401 - Unauthorized');
            }
            try {
                const hashedPassword = yield bcryptjs_1.default.hash('MonNouveauPassword145!', 14);
                const userInfo = yield user_1.default.findOneAndUpdate({ mail }, { $set: { password: hashedPassword } });
                if (!userInfo)
                    throw new Error();
            }
            catch (_a) {
                throw new apollo_server_express_1.ApolloError('Cannot reset password');
            }
            return 'MonNouveauPassword145!';
        });
    }
    login(mail, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.default.findOne({ mail });
                if (!user)
                    throw new Error();
                if (!(yield bcryptjs_1.default.compare(password, user.password)))
                    throw new Error();
                const userToken = yield jsonwebtoken_1.default.sign({
                    data: { mail: user.mail, id: user._id, isTeacher: user.isTeacher },
                    exp: Date.now() + 86400000,
                }, env_dev_1.default.token);
                const userWthoutPassword = Object.assign({}, user.toObject());
                userWthoutPassword.token = userToken;
                userWthoutPassword.id = user._id;
                delete userWthoutPassword.password;
                console.log(userWthoutPassword);
                return userWthoutPassword;
            }
            catch (e) {
                throw new apollo_server_express_1.ApolloError('Cannot Login. Please verify credentials');
            }
        });
    }
    checklogin(ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { user } = ctx;
            try {
                const userInfo = yield user_1.default.findOne({ mail: user.mail });
                if (!userInfo)
                    throw new Error();
                const userToken = yield jsonwebtoken_1.default.sign({
                    data: {
                        mail: userInfo.mail,
                        id: userInfo._id,
                        isTeacher: userInfo.isTeacher,
                    },
                    exp: Date.now() + 86400000,
                }, env_dev_1.default.token);
                const userWithoutPassword = Object.assign({}, userInfo.toObject());
                userWithoutPassword.token = userToken;
                userWithoutPassword.id = userInfo._id;
                userInfo.token = userToken;
                userInfo.id = userInfo._id;
                delete userWithoutPassword.password;
                return userWithoutPassword;
            }
            catch (e) {
                throw new apollo_server_express_1.ApolloError('Cannot Login. Please verify credentials');
            }
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.Mutation(() => Boolean),
    tslib_1.__param(0, type_graphql_1.Arg('newPassword')),
    tslib_1.__param(1, type_graphql_1.Arg('oldPassword')),
    tslib_1.__param(2, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserAuthResolver.prototype, "changePassword", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => String),
    tslib_1.__param(0, type_graphql_1.Arg('mail')),
    tslib_1.__param(1, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserAuthResolver.prototype, "resetPassword", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => userModelGQL_1.default),
    tslib_1.__param(0, type_graphql_1.Arg('mail')),
    tslib_1.__param(1, type_graphql_1.Arg('password')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserAuthResolver.prototype, "login", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => userModelGQL_1.default),
    tslib_1.__param(0, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserAuthResolver.prototype, "checklogin", null);
UserAuthResolver = tslib_1.__decorate([
    type_graphql_1.Resolver(userModelGQL_1.default)
], UserAuthResolver);
exports.default = UserAuthResolver;
