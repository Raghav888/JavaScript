//Conisder a  expensive function thta make api call and gets data
// So, now we want to apply limit on its execution
// so we will use throttle for it

const loggerFunc = () => {
    //  this  will make api call
    console.count("Throttled Function");
};

const throttle = (fn, limit) => {
    let flag = true;
    // returns a function that will be in betterlogger
    return function() {
        let context = this; // it refers to obj, if loggerfunc required an object
        let arg = arguments;
        if (flag) {
            // when flag is true then only logger function will called
            fn.apply(context, arg); // apply method so that we can send obj and args
            flag = false; // once api is made we will make it false
            setTimeout(() => {
                flag = true; // will change flag value after timer expires
            }, limit);
        }
    };
};

// betterloggerfunc will get an function that will be called in addeventlistner
const betterLoggerFunction = throttle(loggerFunc, 3000); //this function will be trigged , this will handle throttling
// it contains timer, aftwer which next call should be made

document
    .querySelector("#clickme")
    .addEventListener("click", betterLoggerFunction);