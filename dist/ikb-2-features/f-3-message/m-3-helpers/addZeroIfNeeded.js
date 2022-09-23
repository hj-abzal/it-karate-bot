"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addZeroIfNeeded = void 0;
const addZeroIfNeeded = (n) => {
    if (n.toString().length === 1) {
        return `0${n}`;
    }
    return n;
};
exports.addZeroIfNeeded = addZeroIfNeeded;
//# sourceMappingURL=addZeroIfNeeded.js.map