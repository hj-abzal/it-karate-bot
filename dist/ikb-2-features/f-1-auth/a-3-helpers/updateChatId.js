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
exports.updateChatId = void 0;
const user_1 = __importDefault(require("../a-2-models/user"));
const config_1 = require("../../../ikb-1-main/config");
const updateChatId = (user, chatID, bot) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield user_1.default.findByIdAndUpdate(user._id, {
            chatID
        });
        console.log(res);
    }
    catch (e) {
        yield bot.sendMessage(chatID, `Какая то ошибка, прошу сообщить админу: ${config_1.adminLogin}`);
        console.log('some error in updateChatId : ', e);
    }
});
exports.updateChatId = updateChatId;
//# sourceMappingURL=updateChatId.js.map