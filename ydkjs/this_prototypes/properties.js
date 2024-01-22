let obja = {
  a: "a",
};

let objb = {
  b: undefined,
};

let objc = {
  c: "i`m the C",
};

let objd = Object.create(obja);
Object.defineProperty(objd, "d", {
  enumerable: false,
  value: "you want the the D ?",
});

// access propert
console.log("value of b in objb is: ", objb.b);
// check if propery exists
console.log("b exists in objb: ", "b" in objb);

// check if enumerable shows up using 'in'
console.log("d exists in objd: ", "d" in objd);

// check if 'in' runs throught prototype chain
console.log("a exists in objd: ", "a" in objd);

// get keys of only this object (no prototype chain search)
console.log(
  "keys of objd are (no proto search): ",
  Object.getOwnPropertyNames(objd)
);

// get keys of enumerable properties ony this object (no prototype chain search)
console.log(
  "enumberable keys of objd are (no proto search): ",
  Object.keys(objd)
);

// collect all enumerable keys of object (with prototype chain search)
{
  let allKeys = [];
  for (let k in objd) {
    allKeys.push(k);
  }
  console.log(
    "all enumberable keys in objd: (includeing prototype chain): ",
    allKeys
  );
}
