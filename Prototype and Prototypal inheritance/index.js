//https://www.youtube.com/watch?v=wstwjQ1yqWQ
//When we create any function, array, obj,etc, we get access to many other properties
// those properties are length,push,etc.
//Those are inbuilt
// When we create any obj, JS put all those properties in an objct and attcahes to that obj.

// Array

const arr = [1, 2, 3, 4];
// arr.__proto__   this is an object that conatins all those properties

// arr.__proto__ is same as Array.prototype
// Also arr.__proto__ has its own prototype as it is object
// That means arr.__proto__.__proto__ is also an object
// It is same to Object.prototype
//But arr.__proto__.__proto__.__proto__ is null
// That means Object.prototype is null
// This whole sequence is called prototype chain

//Object

const obj = { a: 1, b: 2 };
// obj.__proto__   this is an object that conatins all those properties
//obj.__proto__ is similar to Object.prototype
// So, obj.__proto__.__proto__ is null

//Function

function func() {
    console.log("Hi");
}

//func.__proto__  this is an object that conatins all those properties
// It is similar to Function.prototype
// func.__proto__.__proto__ is similar to Object.prototype
// So, func.__proto__.__proto__.__proto__ is null

// So we can now say that prototype chain ends in object and its last value is null

//Prototypal Inheritance

//In it what we do is  we change the proto of one object. We asisgn it proto to another object.
// So, basically then we can access all propeties of that object in current object.

//Ex

const obj2 = {
    name: "Raghav",
    age: 23,
    getIntro: function() {
        console.log(this.name);
    },
};

const obj3 = {
    name: "Ravi",
};

//Prototpal Inheritance

obj3.__proto__ = obj2;

console.log(obj3.name); // will print "Ravi"
console.log(obj3.age); //will print 23 as it will first check in own object as it wont find, then it will look into its proto i.e obj2

console.log(obj3.getIntro()); // it will print "Ravi" as the name is in obj3 itself, so "this" of that function will refer to obj3.

// Important

//Function.prototype.functionname=fucntion()={}

//writing function in such way will add that function in function.prototype
//Due to which every function can have access to it
//Generally used while writing polyfills
//ex

Function.prototype.example = () => console.log("I am called");

function fun() {}

fun.example(); // It will print "I am called" as example is in proto of fun