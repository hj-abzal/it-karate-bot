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
exports.createUser = void 0;
const user_1 = __importDefault(require("../a-2-models/user"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uuid, isAdmin, first_name, last_name, username, } = req.body;
    try {
        const oldUser = yield user_1.default.findOne({ uuid }).exec();
        if (oldUser)
            res.status(400).json({ error: "User already exists ", uuid, in: "createUser" });
        else {
            const user = yield user_1.default.create({
                uuid,
                isAdmin,
                first_name,
                last_name,
                username,
                range: 'white',
                level: 1,
            });
            res.status(201).json({ user });
        }
    }
    catch (e) {
        res.status(500).json({
            error: "some error: " + e.message,
            info: "Back doesn't know what the error is...",
            in: "createUser/User.create",
        });
    }
});
exports.createUser = createUser;
//# sourceMappingURL=createUser.js.map