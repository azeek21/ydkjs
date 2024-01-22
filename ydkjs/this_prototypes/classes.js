function FooClass(name) {
  this.name = name;
  console.log("fooclass constructor");
  this.differentFunction = function () {
    console.log("this is not shared between instances");
  };
}

FooClass.prototype.myName = function () {
  console.log("[FooCalss.prototype.myName]: ", this.name);
};

console.log("instantiating fooInstace");
const fooInstance = new FooClass();
console.log("instantiating fooInstace2");
const fooInstace2 = new FooClass();

console.log(
  "fooInstance.constructor == FooClass: ",
  fooInstance.constructor == FooClass
);

console.log(
  "fooInstace2.constructor == fooInstance2.consturctor: ",
  fooInstace2.constructor == fooInstance.constructor
);

// NOTE: Functions aren’t constructors, but function calls are “constructor calls” if and only if new is used
console.error(
  "NOTE: even if instance.constructor references ConstructorClass (or function) it desn't actually mean this object (instance) was constructed by that instance.constructor ",
  "\ninstead instance.constructor just comes from FooClass.prototype and we get it from proto chain by delegation not directly from instance.constructor.",
  "\nwhich means, never believe that instance was `constructed by` it's .constructor",
  "\nfooInstance.hasOwnProperty('constructor'): ",
  fooInstance.hasOwnProperty("constructor"),
  "\nSee? instance.constructor desnt exist, it was all a lie"
);

console.log(
  "fooInstance.differentFunction == fooInstance2.differentFunction: ",
  fooInstance.differentFunction == fooInstace2.differentFunction
);

console.log(
  "fooInstance.myName == fooInstance2.myName: ",
  fooInstance.myName == fooInstace2.myName
);

// CUSTOM CONSTRUCTOR
function Foo2() {
  console.log("[Foo2]: called");
}

Foo2.prototype = {};
function fakeConstructor() {
  console.log("different constructor for Foo2");
}
Object.defineProperty(Foo2.prototype, "constructor", {
  value: fakeConstructor,
  enumerable: false,
});

const foo2Instance = new Foo2();

const obj3 = {
  toString: () => "I am obj3!",
};

// Object.prototype.toString = () => "THIS is an object";

console.log("HI " + obj3);
