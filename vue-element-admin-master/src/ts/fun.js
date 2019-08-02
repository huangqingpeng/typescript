// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}
// 函数表达式（Function Expression）
var mySum = function (x, y) {
    return x + y;
};
// 参数类型 输出 都定义类型
function sumTs(x, y) {
    return x + y;
}
// 输入多余的（或者少于要求的）参数，是不被允许的
console.log(sumTs(3, 4));
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
var mySumTs = function (x, y) {
    return x + y;
};
console.log(mySumTs(4, 4));
