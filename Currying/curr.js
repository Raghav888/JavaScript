// Two ways to do currying

// 1.Bind

const multi = (x, y) => console.log(x * y);

multi.bind(this, 2, 3)(); // it will give x=2,y=3

//this is object
const mutibytwo = multi.bind(this, 2); // x value will go 2
mutibytwo(5); // y value will be 5

// currying is used when your next parameter will come in future.

//second way

const multiply = (x) => (y) => console.log(x * y); // x can be accessed with help of closure.
const a = multiply(2);
a(10); //will give 10 output