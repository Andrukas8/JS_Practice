let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});

// adding a new button to the page
const newButton = document.createElement("button"); // creating the new element
newButton.textContent = "Button 5"; // addign text to the new element
newButton.classList = "myButtons"; // adding class to the new element
document.body.appendChild(newButton); // appending
buttons = document.querySelectorAll(".myButtons"); // adding new element to the nodelist by reassigning
console.log(buttons);

// removing a button
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons"); // removing from 
        console.log(buttons);
    });
});