`
From MDN:
A property of an execution context (global, function or eval) that, in non–strict mode,
is always a reference to an object


Every where JS runs, it runs inside execution context:

When you run something globally, the code runs in the global execution context.
When you invoke a function, a new execution context is created for the function.

The execution context has *this* property in it.

In Node, this in global context is "global", on browser the "window".

The value of *this* depends how the function called.
`;

global.someValue = 'hello world';

function f() {
  console.log(this.someValue);
}
f();