// https://www.youtube.com/watch?v=Qew1GY6sxdY

// obj.function()
// In above case, this refers to the object on which the function is called

function age() {
    console.log(23, this); // it will print 23 and window object
}

age(); // here we didn't assign any object, so by default this refers to window object
//because age() and window.age() is same, so this refers to windows

// window object contains all global var and its value
const obj1 = {
    name: "Raghav",
    age: 23,
};

function agetwo() {
    console.log(this.name);
    console.log(this.age);
}

agetwo.call(obj1);

// its better practice to use call,apply,bind when we use this keyword

// also we can do in this way

const obj3 = {
    name: "Raghav",
    age: 23,
    agetwo: agetwo,
};

obj3.agetwo();

// this is dynamic in scope
// we can call function anywhere and this value will refer to diff obj