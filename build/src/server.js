"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const apollo_server_express_1 = require("apollo-server-express");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const type_graphql_1 = require("type-graphql");
const ctxTokenAuth_1 = tslib_1.__importDefault(require("./utils/ctxTokenAuth"));
const UserAuthResolver_1 = tslib_1.__importDefault(require("./controller/UserAuthResolver"));
const ClassroomResolver_1 = tslib_1.__importDefault(require("./controller/ClassroomResolver"));
const FlashcardResolver_1 = tslib_1.__importDefault(require("./controller/FlashcardResolver"));
const subjectResolver_1 = tslib_1.__importDefault(require("./controller/subjectResolver"));
function startServer(config) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // on décrit un schéma graphQl à l'aide de la foncton buildSchema
        const schema = yield type_graphql_1.buildSchema({
            validate: false,
            resolvers: [UserAuthResolver_1.default, ClassroomResolver_1.default, FlashcardResolver_1.default, subjectResolver_1.default],
        }); // on démarre notre apollo server
        const server = new apollo_server_express_1.ApolloServer({
            schema,
            context: ctxTokenAuth_1.default,
            playground: true,
            introspection: true,
        });
        if (config.serverStart) {
            const app = express_1.default();
            app.use(cors_1.default({ origin: '*' }));
            app.use(morgan_1.default('dev'));
            app.use('/public', express_1.default.static('public'));
            yield server.start();
            server.applyMiddleware({ app, path: '/' });
            app.listen(config.serverPort, () => {
                console.log('launch');
            });
            if (config.verbose) {
                console.log(`Apollo server started at: http://localhost:${config.serverPort}/`);
            }
        }
        // et on démarre mongoose
        try {
            yield mongoose_1.default.connect(config.db, config.options);
        }
        catch (e) {
            console.log(e);
        }
        if (config.verbose)
            console.log('mongodb started at uri: ', config.db);
        return server;
    });
}
exports.default = startServer;
