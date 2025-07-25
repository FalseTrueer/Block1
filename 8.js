// This is a JavaScript Quiz from BFE.dev

const obj = {
  a: 1,
  b: function () {
    console.log(this.a);
  },
  c() {
    console.log(this.a);
  },
  d: () => {
    console.log(this.a);
  },
  e: (function () {
    return () => {
      console.log(this.a);
    };
  })(),
  f: function () {
    return () => {
      console.log(this.a);
    };
  },
};

console.log(obj.a); // 1
obj.b(); // 1
obj.b(); // 1
const b = obj.b;
b(); // undefined
obj.b.apply({ a: 2 }); // 2
obj.c(); // 1
obj.d(); // undefined
obj.d(); // undefined
obj.d.apply({ a: 2 }); // undefined
obj.e(); // udnefined
obj.e(); // udnefined
obj.e.call({ a: 2 }); // udnefined
obj.f()(); // 1
obj.f()(); // 1
obj.f().call({ a: 2 }); // 2 тут запутался (стрелочная функция навсегда запоминает контекст в котором была создана, а не в котором вызывается)
