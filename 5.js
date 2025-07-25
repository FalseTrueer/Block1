/*Написать функцию get(obj, path), которая возвращает значение по указанному пути в объекте. 
Если путь не существует, функция должна возвращать undefined.*/

function get(obj, path) {
  const way = path.split(".");
  let current = obj;
  for (let i = 0; i < way.length; i++) {
    if (current[way[i]] === undefined) return undefined;
    current = current[way[i]];
  }
  return current;
}
const obj = {
  a: {
    b: {
      c: "d",
    },
  },
};

console.log(get(obj, "a.b.c")); // d
