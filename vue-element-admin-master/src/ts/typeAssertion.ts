// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：
function getlength(x: string | number): number{

  if ((<string>x).length) {
    return (<string>x).length
  } 
    return x.toString().length
  
}