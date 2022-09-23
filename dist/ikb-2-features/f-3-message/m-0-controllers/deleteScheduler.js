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
exports.deleteScheduler = void 0;
const scheduledMessage_1 = __importDefault(require("../m-2-models/scheduledMessage"));
const index_1 = require("../../../index");
const deleteScheduler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.query;
    try {
        const message = yield scheduledMessage_1.default.findOneAndDelete({ _id }).exec();
        index_1.scheduler.setScheduledMessages();
        res.status(200).json({ deleted: message });
    }
    catch (e) {
        res.status(500).json({
            error: "Back doesn't know what the error is",
            body: req.body,
            in: "deleteScheduler"
        });
    }
});
exports.deleteScheduler = deleteScheduler;
//# sourceMappingURL=deleteScheduler.js.map