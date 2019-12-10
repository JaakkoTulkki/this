`
MDN:
In arrow functions, this retains the value of the enclosing lexical context's this.

The *this* refers to the this object at the time of declaring the arrow function
`;
global.someValue = 'global';

function foo() {
  const arr = () => console.log(this.someValue);
  arr();
}

const obj = {
  someValue: 'obj value',
  foo,
};

foo();
obj.foo();

