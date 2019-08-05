// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型
// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6 默认导出
// export = commonjs 导出模块
// export as namespace UMD 库声明全局变量
// declare global 扩展全局变量
// declare module 扩展模块
// /// <reference /> 三斜线指令
// https://github.com/huangqingpeng/typescript-tutorial/blob/master/basics/declaration-files.md

declare var a: string 
a="hqp"
console.log(a)

// declare function
declare function jQuery(selector: string): any;



 // declare class 当全局变量是一个类的时候，我们用 declare class 来定义它的类型

declare class  Animal{
  nam: string;
  constructor(name: string);
  sayHi(): string;
}

class Animals{
  name = "animals";
  constructor(name: string) {
    this.name = name;
  }
  sayHi() {
    return `My name is ${this.name}`;
    // return 5
  }
}

let cat = new Animals('Tom');
console.log(cat);
console.log(cat.sayHi());