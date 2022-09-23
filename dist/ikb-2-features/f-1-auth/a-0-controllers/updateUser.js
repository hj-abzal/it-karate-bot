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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const user_1 = __importDefault(require("../a-2-models/user"));
const lessons_1 = __importDefault(require("../../f-2-lessons/l-2-models/lessons"));
const sendMessage_1 = require("../../f-3-message/m-3-helpers/sendMessage");
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { _id } = _a, user = __rest(_a, ["_id"]);
    try {
        if (user === null || user === void 0 ? void 0 : user.level) {
            const lesson = yield lessons_1.default.findOne({ lessonOrder: user.level });
            if (!lesson) {
                res.status(404).json({
                    error: 'There is no such lesson in DB',
                    body: req.body,
                    in: 'Lesson.findOne'
                });
                return;
            }
        }
        ;
        const updatedUser = yield user_1.default.findByIdAndUpdate(_id, Object.assign({}, user), { new: true }).exec();
        if (updatedUser) {
            yield (0, sendMessage_1.sendMessage)(updatedUser.uuid, `Привет самурай, тебе дали доступ на ${user.level} урок!`);
            res.status(200).json({ updatedUser });
        }
        else {
            res.status(500).json({
                error: 'not updated?',
                in: 'updatedUser'
            });
        }
    }
    catch (e) {
        res.status(500).json({
            error: 'Back doesn\'t know what the error is',
            body: req.body,
            in: 'updatedUser'
        });
    }
});
exports.updateUser = updateUser;
//# sourceMappingURL=updateUser.js.map