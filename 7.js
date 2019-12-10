// call and apply
const obj = {
  someValue: 'obj value',
};

function foo() {
  console.log(this.someValue);
}

foo.call(obj);
foo.apply(obj);
