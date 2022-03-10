// Temporal Dead Zone
let a = 100

function App() {
    console.log('1', a)
    let a = 42
    console.log('2', a) {
        let a = 100
    }
    console.log('3', a)
}


// in above exmaple,  on line 3, it will give error, a used before initailization, bcux it will be
// temporal dead done, as it look in its own lexicalenv, and find that a is defined below
// and it wont look in its parent lexical env.

function something() {
    console.log(a)
    let a = 2
}

something()

// Hoisting

function something() {
    // a = undefined
    console.log(a)
    var a = 2
}

something()

// We cannot chnage value of const
const tanay = 2
tanay = 3

// But in array and object it works differently.
// we can add, update the value in it
// but we cannot chnage the whole object or array

const obj = { a: 1, b: 2 }
obj.a = 22

const array = [1, 2, 3, 4]
array.push(55)
    // above example will work

const obj = { a: 1, b: 2 }
const obj2 = { a: 3, b: 4 }
obj = obj2

const array = [1, 2, 3, 4]
array = array.push(55)
    // in above exm, we are chnging the object and array , so we will get error.
    //TypeError: Assignment to constant variable.

// Arrow Function// called as fat arrow function

// with no parameter
const getNum = () => 2

// with one parameter
// Function
const isOne = (num) => num == 1

// Calling the function
console.log(isOne(12))

/////////////////

const isBigger = (a, b) => a > b
console.log('Is 2 bigger than 3?', isBigger(2, 3))

// How would you write this with the least amount of characters
function Add22andReturn(num) {
    let sum = 0
    sum = num + 22
    return sum
}


const Add22andReturn = (num) => {
    return num + 22
}

// Version 4
const Add22andReturn = num => num + 22

// Doing it on an array
    [(1, 2, 3, 4, 5)].map((num) => num + 22)


///Short arrow funtion while returning an object / object literal syntax
const giveMeAnObject = (a) => ({ value: a })

console.log(giveMeAnObject(5))

// it will return object => value:5
// to return obj, we need to create it in using paranthesis.

/////////////////////

const defaultExample = (a, b) => a + b
console.log(defaultExample(2))

// it will print NaN
// bcuz b value will be nan


const defaultExample = (a, b) => {
    if (b === undefined) {
        b = 5
    }
    return a + b
}

// Instead of above function we can write this, in which we have defaukt value of b as 5,
// if b value is not  passed it will take b value as 5
const defaultExample2 = (a, b = 5) => a + b

console.log(defaultExample(2, 4)) //6
console.log(defaultExample2(3)) // 8

// But note that default paramter must be at most right only
const defaultExample3 = (a, b = 5, c) => a + b + c

console.log(defaultExample3(1, 2, 3)); // it will work
console.log(defaultExample3(1, , 3));

// above exmplae will give error as , is unexpected in middle.

// REST 

const restExample = (a, ...rest) => {
    console.log(a, rest)
}

console.log(restExample(2, 3, 4, 5, 6, 7, 8, 9, 10))

// it will take "a" value as 2 and all rest will go in as array in rest 

// spread with object

const spreadExample = ({ a, b }) => { // here a, b key value are given to those parameters
    // note that parameter name must be same as keys
    console.log(a, b) // it will print value 1 and 2
}

const obj = { a: 1, b: 2 }
console.log(spreadExample(obj))

// spread with array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const spreadExample2 = ([first, second, ...rest]) => { // square brackets are imp if it is array
    console.log(first, second, rest) // 1 2 , [all rest]
}

console.log(spreadExample2(array))

// rest with spread
console.log(spreadExample2([...array, 11, 12, 13]))
    // ouput will be 1 2 [all rest with 11,12,13]



/////
const spreadExample = ({ a: aaloo, b: bhaaloo }) => { // values will be 1 and 2
    // destructuring
    // console.log(a,b)
    console.log(aaloo, bhaaloo) // 1 2
}

const obj = { a: 1, b: 2 }
spreadExample(obj)


/////
const spreadExample = ({ b: bhaaloo, a: aaloo }) => { // b value be 2 and a value be 1
    console.log(aaloo, bhaaloo)
}

const obj = { a: 1, b: 2 }
spreadExample(obj)

///Dynamic fields
// key is always string in obj
let key = 'ram'
const obj = {
        [key]: 122
    } // key will be []
console.log(obj)


// Object literal
let aaloo = 1
let bhaaloo = 2

const obj1 = { aaloo: aaloo, bhaaloo: bhaaloo }
console.log(obj1)
const obj2 = { aaloo, bhaaloo } // it will make keyas those var name and it assigned  value as it value
console.log(obj2) // { aaloo: 1, bhaaloo: 2}


/// Template literal

let name = 'Tanay'
let line = 'Helloo ' + name + ' !'
console.log(line)

const helloTemp = `Hello ${name} !`
console.log(helloTemp)

const giveMeFive = () => 5
const line2 = `Hey, my roll is ${giveMeFive()}`
console.log(line2)

// Question: variable 5 // "odd" ->> write this function, using arrow
// Question: use this function in a sentence using template literal

// Shivam's answer
const oddOrEven = (num) => (num % 2 === 0 ? 'even' : 'odd')
const res = `The number 5 is ${oddOrEven(5)} ${name}`

//Module system

// import/export
//  →  /utils.js
export const add = (a, b) => a + b
export const square = (a) => a * a


//  →  /app.js
import { add, square } from './utils'

console.log(add(1, 2))
console.log(square(2))

//default export

//  →  /utils.js

const square = (a) => a * a
export default square


//  →  /app.js
import square from './utils'

console.log(square(2))


//import/export with rename
//  →  /utils.js

const add = (x, y) => x + y

export { add as sum }
//  →  /app.js

import { sum as xyz } from './utils'

console.log(xyz(2, 5))

// But when we use this second js (in which we have imported ) file in html code,
// we need to mention the type as module
//ex: <script type="module" src="filname.js"></script>

// export default 

// 1st js file

export default function() {} // default function dont have function name

//in 2nd js file

import yahoo from "./1stfile.js" // the default function will be called as yahoo in this code
yahoo()

// Second way is 
import { default as yahoo } from "./1stfile.js" // the default function will be called as yahoo in this code
yahoo()



/////////////////////
// Nullish coalescing operator (??)
//The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, 
//and otherwise returns its left-hand side operand.
//This can be contrasted with the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined


const foo = null ? ? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ? ? 42;
console.log(baz);
// expected output: 0

const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ? ? "default for A";
const valB = emptyText ? ? "default for B";
const valC = someNumber ? ? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42

//Temporal dead zone
// https://bhavika-tibrewal.hashnode.dev/temporal-dead-zone


//REst vs spread
//https://dikshadhote.hashnode.dev/rest-vs-spread-operator-in-javascript-whats-the-difference

// Compiler vs transpiler
// Transpiler converts code  from one version to another or one langugae to another but both have same level of abstraction (we can say having similar syntx)
// Transpiler also called as source to source compiler.
// Ex: Typescript transpiler converts typescrit code to js code
// Transpiler= ex: Bable convets es6 to es5
// It is used bcuz our browser doesnot understand latest version all rules, so we need to convert
// it into old version, that will be understandable by browser.

// Compiler converts code from one langugae to another but both have different level of abstraction
// ex: java code in byte code
// a compiler produces machine-executable code

// == vs ===
// == is Abstract equality and === is strict equality

// == checsk only data is same or not
// === checsk data as well as its type

var a = ""
var b = ""
console.log(a === b) // true

console.log(3 == "3") // true, it will convert "3" in 3 while checking
console.log(1 == "True") //true
    // == explicilty change the datatype while checking.

var a = {}
var b = {}
console.log(a === b) // false as object is complex and its location is aiff in memory
console.log(a == b) // true

/*
A shim is a piece of code used to correct the behavior of code that already exists,
usually by adding new API that works around the problem. This differs from a polyfill, 
which implements a new API that is not supported by the stock browser as shipped.
*/

// Diff between arrow function vs regular fucntion
// https://betterprogramming.pub/difference-between-regular-functions-and-arrow-functions-f65639aba256#:~:text=Regular%20functions%20created%20using%20function,be%20used%20as%20constructor%20functions.


// this is a keyword. It basically returns a reference to the object it is placed within

const user = {
    name: 'Mike';
    call() {
        console.log(this);
    }
}
user.call();

// ⚙️ Output: {name: 'Mike, call: f} 

//But when we call the function alone, outside the object this returns the global object (browser window) and hence we get the result as undefined 👇

const user = {
    name: 'Mike';
    call() {
        console.log(this);
    }
}

const myCall = user.call;

myCall();

// ⚙️ Output: undefined


//Function Declarations must begin with “function”.
//e.g.
function bar() {
    return 3;
}
//function is only declared here .For using it, it must be invoked using function name. e.g bar();

//A function expression can be stored in a variable:
var x = function(a, b) { return a * b };

x(12, 56)

//Function declarations load before any code is executed while
// Function expressions load only when the interpreter reaches that line of code.

// Hoisting works for function declartion bot for function ecpression.