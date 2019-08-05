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
var mysearch;
mysearch = function (source, substring) {
    return source.search(substring) > -1;
};
console.log(mysearch("hgfdsgfkdggdgdkf", "f"));
// 可选参数 可选参数后面不允许再出现必须参数了
function getName(f, s) {
    if (s) {
        return s;
    }
    else {
        return f;
    }
}
// 参数默认值
function getAge(age, name) {
    if (age === void 0) { age = 10; }
    return age;
}
// 剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
    return array;
}
var a = [];
push(a, 1, 2, 3, 3);
console.table(a);
// 重载 输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。
function reverse(x) {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    }
    if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
}
