"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createUser_1 = require("./a-0-controllers/createUser");
const getAllUsers_1 = require("./a-0-controllers/getAllUsers");
const updateUser_1 = require("./a-0-controllers/updateUser");
const deleteUser_1 = require("./a-0-controllers/deleteUser");
const auth = express_1.default.Router();
auth.get('/get-all', getAllUsers_1.getAllUsers);
auth.post("/create-user", createUser_1.createUser);
auth.put("/update-user", updateUser_1.updateUser);
auth.delete("/delete-user", deleteUser_1.deleteUser);
exports.default = auth;
//# sourceMappingURL=index.js.map