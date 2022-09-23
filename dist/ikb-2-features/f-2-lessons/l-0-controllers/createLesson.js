"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLesson = void 0;
const lessons_1 = __importDefault(require("../l-2-models/lessons"));
const createLesson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lessonOrder, todolistLink, homeWorkLink, } = req.body;
    try {
        const oldLesson = yield lessons_1.default.findOne({ lessonOrder }).exec();
        if (oldLesson)
            res.status(400).json({ error: "Lesson already exists ", oldLesson, in: "createLesson" });
        else {
            const lesson = yield lessons_1.default.create({
                lessonOrder,
                todolistLink,
                homeWorkLink,
            });
            res.status(201).json({ lesson });
        }
    }
    catch (e) {
        res.status(500).json({
            error: "some error: " + e.message,
            info: "Back doesn't know what the error is...",
            in: "createLesson/Lesson.create",
        });
    }
});
exports.createLesson = createLesson;
//# sourceMappingURL=createLesson.js.map