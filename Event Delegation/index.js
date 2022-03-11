//https://www.youtube.com/watch?v=3KJI1WZGDrg

const clickevent = document.querySelector("#category");
const showDetailpage = (event) => {
    console.log(event.target.id); // this gives the id of item on which it is clicked

    // window.location.href = "/" + event.target.id; // this will take to item page ex: /camera
    // but this will make issue as on every click on any part it will redirect user to random url
    // so we will check whether the clicked item is in li tag or not
    // if it is li tag then only it should redirect
    if (event.target.tagName === "LI") {
        //tag name should be in captial
        window.location.href = "/" + event.target.id;
    }
};

clickevent.addEventListener("click", showDetailpage);

//Benefits
// 1. Saves alot memory and increase performance
// Less code as addeventlistner only on parent
//More useful in infinite scrolling

// Limitation

// All events are not bubbled up like blur, chnaging screen size
// so in those cases event delegation wont work
// as those have risk
// stoppropagation will stop event delegation as propgataion get stopped.