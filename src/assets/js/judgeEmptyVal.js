export function judgeEmptyVal(val) {
    const emptyVal = '';
    if (val === emptyVal) {
        return 0;
    } else {
        return val;
    }
}