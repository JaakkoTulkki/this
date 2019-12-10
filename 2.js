global.someValue = 'global value';

const obj = {
  someValue: 'obj value',
  foo: function () {
    console.log(this.someValue);
  },
};

obj.foo();

const foo = obj.foo;
foo();
