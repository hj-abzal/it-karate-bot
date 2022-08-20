export const addZeroIfNeeded = (n: number): number | string => {
    if (n.toString().length === 1) {
        return `0${n}`;
    }
    return n;
}