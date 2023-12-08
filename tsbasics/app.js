function throwError(message, code) {
    throw { message: message, errorCode: code };
}
function divideNums(a, b) {
    var result = a / b;
    if (Number.isNaN(result))
        throwError('divide by zero error thrown', 500);
}
divideNums(6, 3);
divideNums(0, 0);
