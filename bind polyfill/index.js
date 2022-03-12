// https://www.youtube.com/watch?v=ke_y6z0xRpk
//consider your browser dont have bind function
// at that time you need to write polyfill for bind method

function calc() {
    console.log(this.name);
}

Function.prototype.mybind = function(...args) {
    let obj2 = this; // it will refer to calc
    let param = args.slice(1); // it will  have parameters sent by mybind methods
    return (...args2) => {
        // it will return this function
        //args2 will have param sent by cal2() method
        obj2.apply(args[0], [...param, ...args2]); //apply apply on calc when cal2 is called
    };
};
const obj = { name: "Raghav" };

const cal2 = calc.mybind(obj);
cal2();