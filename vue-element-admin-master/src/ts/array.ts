
// 「类型 + 方括号」来表示数组：

let arr1: number[] = [1, 2, 3, 4]

let arr2: string[] = ["1", "2", "3", "4"]

let arr: any[] = ["1", 1, {
  age: 2,
  name:"hury"
}]
console.log(arr1)
console.log(arr2)

// 用接口表示数组

interface ArrInterface {
  [index:number]:number | string
}

let arr3: ArrInterface = [1, 2, 3, "hhgdhgd"]

console.log(arr3)


// 类数组

function sum() {
  let args: IArguments = arguments
  return args
}

