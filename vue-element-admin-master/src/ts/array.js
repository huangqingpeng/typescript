// 「类型 + 方括号」来表示数组：
var arr1 = [1, 2, 3, 4];
var arr2 = ["1", "2", "3", "4"];
var arr = ["1", 1, {
        age: 2,
        name: "hury"
    }];
console.log(arr1);
console.log(arr2);
var arr3 = [1, 2, 3, "hhgdhgd"];
console.log(arr3);
// 类数组
function sum() {
    var args = arguments;
    return args;
}
console.log(sum([1, 2, 3]));
