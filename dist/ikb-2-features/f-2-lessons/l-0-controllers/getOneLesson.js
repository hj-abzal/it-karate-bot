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
exports.getOneLesson = void 0;
const lessons_1 = __importDefault(require("../l-2-models/lessons"));
const getOneLesson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lessonOrder, } = req.query;
    try {
        const lesson = yield lessons_1.default.findOne({ lessonOrder })
            .exec();
        if (lesson) {
            res.status(200)
                .json(lesson);
        }
        else {
            res.status(500).json({
                info: 'Back doesn\'t know what the error is...',
                in: 'getOneLesson/lessons.findOne',
            });
        }
    }
    catch (e) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            errorObject: Object.assign({}, e),
            in: 'getOneLesson/lessons.findOne',
        });
    }
});
exports.getOneLesson = getOneLesson;
//# sourceMappingURL=getOneLesson.js.map