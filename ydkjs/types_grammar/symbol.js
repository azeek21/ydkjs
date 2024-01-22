const a = {
  [Symbol("a")]: 1,
  [Symbol("b")]: "b",
  [Symbol("i am private")]: "private_value",
};

console.log(a);
console.log(Object.getOwnPropertyNames(a));
console.log(Object.getOwnPropertySymbols(a));

console.log(Symbol());
console.log(Symbol("test"));

console.log(Symbol("another").description);

let m = Symbol("a");
console.log(m == m);
console.log(a[m]);
a[m] = "private ?";
console.log(a[m]);

console.log(Object.getOwnPropertyNames(a));

console.log("a.prototype: ", a.prototype);
