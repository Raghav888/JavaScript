// https://www.youtube.com/watch?v=aVSf0b1jVKk
//Event bubbling and capture/trickling

// addeventlistner("click",functioncallback,useCapture)
//useCapture value is true or false

//if true: Event capturing will work
//if false or not given then event bubbling will work.
//Event bubbling and capturing thery in notebook

//Event bubbling - when child clicked order will -> child,parent, grandparent will be printed

// if parent clicked then -> parent, grandparent
// document
//     .querySelector("#grandparent")
//     .addEventListener("click", () => console.log("Grandparent"));

// document
//     .querySelector("#parent")
//     .addEventListener("click", () => console.log("parent"));

// document
//     .querySelector("#child")
//     .addEventListener("click", () => console.log("child"));

// Now Event Capturing/Trickling
//Order when child clicked-> Grandparent,parent,child
//order when parent clicked-> grandparent,parent

// document
//     .querySelector("#grandparent")
//     .addEventListener("click", () => console.log("Grandparent"), true);

// document
//     .querySelector("#parent")
//     .addEventListener("click", () => console.log("parent"), true);

// document
//     .querySelector("#child")
//     .addEventListener("click", () => console.log("child"), true);

// According to w3, the cycle follows first capturing then bubbling.

// so basically if there are any eventcapture true then it will occur first,after that if any eventcapture is false, the bubbling for it. Lets understand by below example.

// document
//     .querySelector("#grandparent")
//     .addEventListener("click", () => console.log("Grandparent"), true); //capturing

// document
//     .querySelector("#parent")
//     .addEventListener("click", () => console.log("parent"), false); //event bubbling

// document
//     .querySelector("#child")
//     .addEventListener("click", () => console.log("child"), true); //capturing

// so now if you clicked on child, then order in which console will be printed is
// grandparent-child-parent
// As capturing is true in grandparent and child, so acc to cycle capturing is done first then bubbling.

//Cycle starts with capturing phase from top to bootom then bubbling phase bottom to top.

// document
//     .querySelector("#grandparent")
//     .addEventListener("click", () => console.log("Grandparent"), true); //capturing

// document
//     .querySelector("#parent")
//     .addEventListener("click", () => console.log("parent"), false); //event bubbling

// document
//     .querySelector("#child")
//     .addEventListener("click", () => console.log("child"), false); //bubbling

// in this case also order will be
// grandparent-child-parent
// From top it comes as capturing so grandparent is printed
//Then from bottom it starts bubbling and prints child then while going up, it print parent

// //////////////

// We can stop propagation in up hiearchy as well as down the hiearchy.
//As bubbling and capturing are expensive, we need to stop the propagation.

// document
//     .querySelector("#grandparent")
//     .addEventListener("click", () => console.log("Grandparent"), false);

// document
//     .querySelector("#parent")
//     .addEventListener("click", () => console.log("parent"), false);

// document.querySelector("#child").addEventListener(
//     "click",
//     (event) => {
//         // event contains the current click event
//         console.log("child");
//         event.stopPropagation(); // it will stop propagation as this line is executed
//     },
//     false
// );

//when child click, child is printed it will stop propgation and parent, grandparent wont  be printed
// It is also called bubble out
// Here also remember the cycle as it will also will be followed here.

//In this ex, capturing is on all three but stoppropgation is applied on grandparent itself.
// So it will print print grandparent and stop when child is clicked.
document.querySelector("#grandparent").addEventListener(
    "click",
    (event) => {
        console.log("Grandparent");
        event.stopPropagation();
    },
    true
);

document
    .querySelector("#parent")
    .addEventListener("click", () => console.log("parent"), true);

document.querySelector("#child").addEventListener(
    "click",
    () => {
        console.log("child");
    },
    true
);