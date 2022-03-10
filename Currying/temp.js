const numList = [
    { type: "odd", payload: 1 },
    { type: "odd", payload: 3 },
    { type: "odd", payload: 55 },
    { type: "even", payload: 22 },
    { type: "even", payload: 44 },
];

const red = (acc, curr) => {
    switch (curr.type) {
        case "odd":
            return {...acc, odd: acc.odd + curr.payload };
        case "even":
            return {...acc, even: acc.even + curr.payload };
        default:
            return acc;
    }
};

console.log(numList.reduce(red, { odd: 0, even: 0 }));