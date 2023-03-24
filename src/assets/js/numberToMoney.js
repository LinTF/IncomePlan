export function numberToMoney(value) {
    // 如果傳進來不是數字，則返回0
    if (!value) {
        return 0;
    }

    // 將數值做四捨五入至整數
    const getRoundInt = Math.round(value);
    // 轉換為文字
    const valueStr = getRoundInt.toString();
    // 轉換為千位數的正規表示式
    const repSrt = /(\d{1,3})(?=(\d{3})+$)/g;

    if (valueStr.length > 3) {
        return valueStr.replace(repSrt, "$1,");
    } else {
        return getRoundInt;
    }
}