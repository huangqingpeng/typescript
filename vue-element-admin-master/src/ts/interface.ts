interface Person {
  name: string,
  age: number
}
// 多一些 少一些属性都是不允许的
let tom: Person = {
  name: "tom",
  age: 22
}

interface Dog {
  color: string,
  name: string,
  age?: number
}


// 可选属性
let peeter: Dog = {
  color: "dark",
  name: "狗蛋",
  age: 3
}


// 任意属性
interface Cat {
  name: string,
  age: string,
  [propName: string]:string  // 设置后 所有属性必须是 string
}

let cat: Cat= {
  name: "小花",
  age: "3",
  color:"white"
}

// 只读属性
interface Tag{
  readonly id:number,
  name: string,
  [propName: string]: any 
}

let tag: Tag = {
  id: 32323,
  name: "beer",
  type: "cat",
  age:1
}