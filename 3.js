/*Реализуйте функцию customMap(array, callback), которая имитирует поведение метода массива .map(). 
Функция должна принимать массив и колбэк функцию, которая применяется к каждому элементу массива, 
результаты выполнения колбэк функции формируют новый массив. */

function customMap(array, callback, thisArg) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback.call(thisArg, array[i], i, array));
  }
  return newArr;
}

Array.prototype.customMap = function (callback, thisArg) {
  return customMap(this, callback, thisArg);
};

// Пример использования
const numbers = [1, 2, 3, 4];
const doubled = customMap(numbers, (n) => n * 2);
console.log(doubled); // [2, 4, 6, 8]

// Дополнительное задание: нужно добавить возможность вызывать customMap на любом массиве так же, как и обычный .map() (т.е. как метод массива)
const anotherDoubled = [2, 3, 4, 5].customMap((n) => n * 2);
console.log(anotherDoubled);
