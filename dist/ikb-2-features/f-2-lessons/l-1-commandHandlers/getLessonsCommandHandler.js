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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLessonsCommandHandler = void 0;
const makeButtons_1 = require("../l-3-helpers/makeButtons");
const getLessonsCommandHandler = (bot, config, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { chatID } = config;
    const { level } = user;
    //@ts-ignore
    return bot.sendMessage(chatID, 'Выберите урок:', (0, makeButtons_1.optionsCreator)(level));
});
exports.getLessonsCommandHandler = getLessonsCommandHandler;
//# sourceMappingURL=getLessonsCommandHandler.js.map