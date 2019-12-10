// new!
// with new keyword creates a new "this" object in the execution context
// sets __proto__ property into "this" that links to the foo()'s prototype property
// implicitly returns this
function foo(value) {
  this.someValue = value;
}

foo('first');
console.log(global.someValue);

// new foo('second');
// console.log(global.someValue);

// const f = new foo('third');
// console.log(f.someValue);
