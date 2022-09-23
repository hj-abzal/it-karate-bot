"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sendMessageBulk_1 = require("./m-0-controllers/sendMessageBulk");
const sendToAll_1 = require("./m-0-controllers/sendToAll");
const createScheduler_1 = require("./m-0-controllers/createScheduler");
const getScheduler_1 = require("./m-0-controllers/getScheduler");
const deleteScheduler_1 = require("./m-0-controllers/deleteScheduler");
const updateScheduler_1 = require("./m-0-controllers/updateScheduler");
const send = express_1.default.Router();
send.post("/message", sendMessageBulk_1.sendMessageBulk);
send.post("/to-all", sendToAll_1.sendToAll);
send.get("/get-scheduled-message", getScheduler_1.getScheduler);
send.post("/create-scheduled-message", createScheduler_1.createScheduler);
send.delete("/delete-scheduled-message", deleteScheduler_1.deleteScheduler);
send.put("/update-scheduled-message", updateScheduler_1.updateScheduler);
exports.default = send;
//# sourceMappingURL=index.js.map