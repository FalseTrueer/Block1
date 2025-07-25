/*Написать функцию compose, реализующую композицию функций: на вход подается неограниченное число функций,
 на выходе получаем функцию, которая выполняет над аргументом изначально переданные функции в том же порядке.*/

function compose(...funcs) {
  return function (arg) {
    return funcs.reduce((acc, fn) => fn(acc), arg);
  };
}

// example 1
const add2 = (x) => x + 2;
const composition = compose(add2, Math.sqrt); // Math.sqrt(add2(x))

console.log(composition(2)); // => 2

// example 2
const dec = (x) => x - 1;
const pow2 = (x) => x ** 2;

console.log(compose(dec, pow2)(2)); // => 1
console.log(compose(pow2, dec)(2)); // => 3
