//https://www.youtube.com/watch?v=Zo-6_qx8uxg
// used in search bar, as you type a key word and stop, it will give you suggestion once you stop typing.
// can also be used at scroll  event or lazy event to make api call
// used for optimization of website
let count = 0;
const getData = () => {
    //it calls an api and get data
    console.log("Api called", count++);
};
const debounce = (fun, diff) => {
    let id;
    return function() {
        let context = this; // this will make sure that getData is called within this scope.
        args = arguments; // it will hold arguments if any are passed to getdata function
        clearTimeout(id); // if user ttype within 3 sec, then last settimeout will be killed
        id = setTimeout(() => fun.apply(context, arguments), diff);
    };
};

const betterSearch = debounce(getData, 3000); // it will run the getdata function only if the time diff between two type 3 mili sec or more.