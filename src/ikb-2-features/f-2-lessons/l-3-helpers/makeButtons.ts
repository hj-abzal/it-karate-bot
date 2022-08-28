const COLLS_COUNT_IN_ROW  = 3
const makeButtons = (count: number) => {
    const res: any[] = [];
    let temp: any[] = [];
    for (let i = 0; i <= count; i++) {
        const instance = {text: `Урок ${i}`, callback_data: i};
        temp.push(instance);

        if (temp.length === COLLS_COUNT_IN_ROW || i === count) {
            res.push(temp);
            temp = [];
        }
    }
    return res;
};

export const optionsCreator = (count: number) => {
    return {
        reply_markup: JSON.stringify({
            inline_keyboard: makeButtons(count)
        })
    };
};
