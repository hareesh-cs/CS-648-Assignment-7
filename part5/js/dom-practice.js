/*eslint-env browser*/

// STEP 1: Old school HTML attribute method
function displayMsg1() {
    "use strict";
    alert("I have been clicked (STEP 1)");
}

// STEP 2: Using the DOM Element method to attach an event handler
window.onload = function () {
    "use strict";
    var btn2 = document.getElementById("btn2");
    btn2.onclick = function () {
        alert("I have been clicked (STEP 2)");
    };
}
window.addEventListener("load", function () {
    // STEP 3: Adding an event listener
    var btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", displayMsg3);

    // STEP 4: Inline callback function for the event listener
    var btn4 = document.getElementById("btn4");
    btn4.addEventListener("click", function () {
        alert("I have been clicked (STEP 4)");
    });
});

// STEP 3: User-defined function for event listener
function displayMsg3() {
    "use strict";
    alert("I have been clicked (STEP 3)");
}
