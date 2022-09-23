"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createLesson_1 = require("./l-0-controllers/createLesson");
const getAllLessons_1 = require("./l-0-controllers/getAllLessons");
const getOneLesson_1 = require("./l-0-controllers/getOneLesson");
const updateLesson_1 = require("./l-0-controllers/updateLesson");
const deleteLesson_1 = require("./l-0-controllers/deleteLesson");
const lessons = express_1.default.Router();
lessons.get('/get-all', getAllLessons_1.getAllLessons);
lessons.get('/get-one', getOneLesson_1.getOneLesson);
lessons.post("/create", createLesson_1.createLesson);
lessons.put("/update", updateLesson_1.updateLesson);
lessons.delete("/delete", deleteLesson_1.deleteLesson);
exports.default = lessons;
//# sourceMappingURL=index.js.map