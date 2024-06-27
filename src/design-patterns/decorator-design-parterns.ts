function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() { }
}

const split = (str: string) => {
  return str.split('')
}

// const reverse = (arr: Array) => {
// 	return arr.reverse();
// }

// const join = (arr: Array): string => {
// 	return arr.join('')
// }

class StringManager {
  @second()
  // @split()
  print(str: string) {
    console.log(str);
  }
  printReverse(str: string) {
    console.log(str.split('').reverse().join(''));
  }
}

const stringManager = new StringManager();
stringManager.printReverse('abc')
