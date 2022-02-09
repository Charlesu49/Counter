//set initail count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//the forEach method takes a callback function used to access each item in a list and we can give these items any name like "btn" in this case, as we loop through the list we add event listeners and we will be listening for our click. An we will use the event object to find out which button the user clicked and get access the classList method.
//Documentation: The currentTarget read-only property of the Event interface identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached, as opposed to Event.target, which identifies the element on which the event occurred and which may be its descendant.

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        //count.contains checks if the specified word is found in the classList
        if(styles.contains("decrease")) {
            count --;
        } else if(styles.contains("increase")) {
            count ++;
        } else {
            count = 0;
        }
        
        if(count > 0) {
            value.style.color = "green";
        }
        if(count < 0) {
            value.style.color = "red";
        }
        if(count === 0) {
            value.style.color = "black";
        }
        
        value.textContent = count;
    });
});