//https://rohitdhatrak.notion.site/ES6-Assignment-Questions-533721cd486b4a1d87d4403089429a81
let aloo = 1;
if (aloo == 1) {
    let a = 2;
    console.log(a);
}
console.log(aloo);

const multiply = (x, y) => x * y;


const customer = {
    name: "Bhaalo"
};
const card = {
    amount: 20,
    product: "Aaalo",
    unitprice: 50
};
const message = `Hello ${customer.name} wants to buy   ${card.amount}  ${card.product} for price of ${card.unitprice}  per piece`


const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
CEO = Neog[0]
Mentor = Neog[2]


const arr = ["MA", "TA", "PA", "CA"];
let firstName = arr[0]
let surname = arr[1];
console.log(firstName);
console.log(surname);

const Aaloo = "Tasty";
const Bhaloo = "Cute";
const Obj = {
    Aaloo,
    Bhaloo
};


let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and n0t ${2 * a + b}`)

const arithmeticsObj = {
    sum: (num1, num2) => num1 + num2,
    multiply: (num1, num2) => num1 * num2
};


const avengers = {
    operation: "Assemble",
    members: [{
            ironMan: "Tony Stark"
        },
        {
            captainAmerica: "Steve Rogers"
        },
        {
            blackWidow: "Natasha Romanoff"
        }
    ]
};
let operation = avengers.operation;
let members = avengers.members;


function packIt() {
    console.log(arguments)
}
packIt(1, 2, 3, 5, 5)

const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)

// Output will be :>Namaste Welcome


const obj = {
    aloo: 1,
    bhallo: 2
}

const { c: aloo = [2, 3, 4].push(5), aloo } = obj

console.log(aloo)
    // error