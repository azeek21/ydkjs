/**
 * Iterator function must return an object with next() function;
 * next function must return an {value: any, done: boolan} object;
 * value returned by next() will be used inside loop;
 * done = true means loop ended othervise keep iterating;
 *
 * iterator key: [Symbol.iterator]
 * for ... of loop can only be called on objects: NOT SURE
 */

function range(rangeOrStart, end, step) {
  let start = end === undefined ? 0 : rangeOrStart;
  end = end ?? rangeOrStart;
  let forward = start < end;
  step = step ? (forward ? Math.abs(step) : -Math.abs(step)) : forward ? 1 : -1;
  start -= step;
  return {
    [Symbol.iterator]: () => ({
      next: () => {
        start += step;
        return {
          value: start,
          done: forward ? start >= end : start <= end,
        };
      },
    }),
  };
}

for (let m of range(1, 5, 1)) {
  console.log(m);
}

let obj = {
  a: "a",
};
obj.__proto__ = { b: "b" };

for (let k in obj) {
  console.log(k);
}
