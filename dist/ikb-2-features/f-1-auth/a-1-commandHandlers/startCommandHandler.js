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
exports.startCommandHandler = void 0;
const greetingToStudent_1 = require("../a-3-helpers/greetingToStudent");
const config_1 = require("../../../ikb-1-main/config");
const startCommandHandler = (bot, config, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { studentID, chatID, username } = config;
    if (user) {
        return bot.sendMessage(chatID, (0, greetingToStudent_1.greetingToStudent)(user.first_name));
    }
    else {
        yield bot.sendMessage(chatID, `Cообщите админу ${config_1.adminLogin} ваш ID и логин:`);
        yield bot.sendMessage(chatID, studentID.toString());
        return bot.sendMessage(chatID, username);
    }
});
exports.startCommandHandler = startCommandHandler;
//# sourceMappingURL=startCommandHandler.js.map