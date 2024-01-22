console.log(
  "Array.prototype, Function.prototype, regex.prototype are empty instance of their type by default. They should be RONLY don't modify"
);

console.log("F.proto...: ", Function.prototype());

console.log("Array.proto...: ", Array.prototype);

console.log("Regex.proto...: ", RegExp.prototype);

let m = Function.prototype;

m = () => {
  let msg = "OOPS, changed Function.proto indirectly";

  return msg;
};

console.log("!!!testing func.proto after indirect change: ", m());

console.log(Array.prototype);
let x = Array.prototype;

x.push("a");

console.log("x: ", x);
console.log(Array.prototype);
