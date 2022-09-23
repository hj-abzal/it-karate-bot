"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLogin = exports.PORT = exports.TelegramToken = exports.MongoDBUris = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: `${process.env.NODE_ENV}.env`
});
console.log('env: ', process.env.NODE_ENV);
const USER_NAME = process.env.MONGO_DB_USER_NAME || "test";
const PASSWORD = process.env.MONGO_DB_USER_PASSWORD || "qwerty123";
const MONGO_DB_URL = process.env.MONGO_DB_URL || "testdb.vn25fdl.mongodb.net";
exports.MongoDBUris = `mongodb+srv://${USER_NAME}:${PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`;
exports.TelegramToken = process.env.TOKEN || "5401157042:AAH8M6Z4wU44eYSBR29T06Oxg_HHLx3fQx0";
exports.PORT = process.env.PORT || 5000;
exports.adminLogin = "@SuanAbzal";
//# sourceMappingURL=config.js.map