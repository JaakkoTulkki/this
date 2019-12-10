// functions inside functions and this
const obj = {
  someValue: 'obj value',
  foo: function foo() {
    function bar() {
      console.log(this.someValue);
    }

    console.log(this.someValue);

    bar();

  },
};

obj.foo();
