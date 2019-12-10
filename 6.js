// bind
global.someValue = 'global';

function foo() {
  console.log(this.someValue);
}

const obj = {
  someValue: 'obj value',
};

const another = {
  someValue: 'another value',
};

const f = foo.bind(obj);
f();
// console.log(f === foo);

// const bar = foo.bind(another);
// bar();
//
// foo();

// what happens below?
// obj.f = bar;
// obj.f();
