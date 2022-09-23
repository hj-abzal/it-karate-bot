"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsCreator = void 0;
const COLLS_COUNT_IN_ROW = 3;
const makeButtons = (count) => {
    const res = [];
    let temp = [];
    for (let i = 0; i <= count; i++) {
        const instance = { text: `Урок ${i}`, callback_data: i };
        temp.push(instance);
        if (temp.length === COLLS_COUNT_IN_ROW || i === count) {
            res.push(temp);
            temp = [];
        }
    }
    return res;
};
const optionsCreator = (count) => {
    return {
        reply_markup: JSON.stringify({
            inline_keyboard: makeButtons(count)
        })
    };
};
exports.optionsCreator = optionsCreator;
//# sourceMappingURL=makeButtons.js.map