let obja = {
  a: "a",
  num: 1,
  set setable(val) {
    console.log("[obja.setable]: " + val);
  },
  get setable() {
    return this._setted;
  },
};

Object.defineProperty(obja, "ronly", {
  value: "I am read only",
  writable: false,
});

let objb = Object.create(obja);
objb.b = "b";

console.log("r only in the proto chain before set: ", objb.ronly);

// setting r only will be ignored even if it exists in proto chain, throws in strickt mode
objb.ronly = "Opps, I didnt change";
console.log("r only in the proto chain after set: ", objb.ronly);

// no matter from which level you try to access but if prop has setter/getter in proto chain or itself, it'll be called always
// which means js will never create shadow prop in original object,
// but you can inside setter func with this.smth
obja.setable = "obja.setable calls setter cuz it`s direct call";
objb.setable =
  "objb.setable also callls setter from proto chain (a`s setter) instead of creating shadowed prop";

console.log("obja.num = ", obja.num);
console.log(
  "incrementing obja.num via objb.num++ cuz they proto chained (objb -> obja)"
);
objb.num++;
console.log(
  "result of incrementig [objb.num]: ",
  objb.num,
  " - [obja.num]: ",
  obja.num,
  " WHOOPS, its actually a get and set operatin so it does this stupid shit"
);
console.log(
  "ony way to increment obja.num without craeting shadow property is directly calling increment on obja. MEANS: no way through proto chain."
);
