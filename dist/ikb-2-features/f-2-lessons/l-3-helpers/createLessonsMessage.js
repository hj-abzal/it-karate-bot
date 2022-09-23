"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLessonsMessage = void 0;
const createLessonsMessage = (homeWorkLink, todolistLink) => {
    const homework = `homework: ${homeWorkLink}`;
    const todolist = `todolist: ${todolistLink}`;
    let res = `${homeWorkLink && homework}

${todolistLink && todolist}`;
    return res;
};
exports.createLessonsMessage = createLessonsMessage;
//# sourceMappingURL=createLessonsMessage.js.map