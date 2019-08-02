// 函数声明（Function Declaration）
function sum(x, y) {
  return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
  return x + y;
};



// 参数类型 输出 都定义类型

function sumTs(x: number, y: number): number {
  return x + y
}
// 输入多余的（或者少于要求的）参数，是不被允许的
console.log(sumTs(3, 4))

// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
let mySumTs: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

console.log(mySumTs(4, 4))


// 用接口定义函数的形状

interface Search {
  (source: string, substring: string): boolean
}

let mysearch: Search
mysearch = function (source: string, substring: string) {
  return source.search(substring) > -1
}

console.log(mysearch("hgfdsgfkdggdgdkf", "f"))


// 可选参数 可选参数后面不允许再出现必须参数了
function getName(f:string,s?:any) {
  if (s) {
    return s
  } else {
    return f
  }
}

// 参数默认值

function getAge(age: number =10,name:string) {
   return age
}

// 剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach((item) => {
    array.push(item)
  })
  return array
}

let a = [];
push(a,1,2,3,3)

console.table(a);


// 重载 输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。

function reverse(x: string | number): string | number{
  if (typeof x === "number") {
    return  Number(x.toString().split("").reverse().join(""))
  }
  if (typeof x === "string") {
    return  x.split("").reverse().join("")
  }

}
 

