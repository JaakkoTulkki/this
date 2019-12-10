global.someValue = 'global value';

// functions are first class citizens
function foo() {
  console.log(this.someValue);
}

const obj = {
  someValue: 'obj value',
};

const another = {
  someValue: 'another random value',
};

obj.foo = foo;
obj.foo();
//
// another.hello = foo;
// another.hello();
//
// const lonely = another.hello;
// lonely();
// foo();
