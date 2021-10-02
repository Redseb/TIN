const typeOf = (x) => {
  return typeof x;
};

console.log(`A string is of type: ${typeOf("string")}`);
console.log(`An int is of type: ${typeOf(123)}`);
console.log(`An NaN is of type: ${typeOf(NaN)}`);
console.log(`An null is of type: ${typeOf(null)}`);
console.log(`An undefined is of type: ${typeOf(undefined)}`);
