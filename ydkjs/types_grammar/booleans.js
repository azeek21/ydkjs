let falsies = [0, -0, +0, NaN, null, undefined, false, ""]; // and document.all (falsy object)

for (let each of falsies) {
  console.log(each + " - is --" + Boolean(each) + "-- when coerced to boolean");
}

console.log(
  "Everything else in js is truthy except document.all (for historical reasons)"
);

console.log("null == undefined: ", null == undefined);
