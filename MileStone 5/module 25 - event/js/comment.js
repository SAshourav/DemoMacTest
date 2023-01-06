//submitting the comment using button

const submit = document.getElementById("submit");
submit.addEventListener("click", function(){

    const input = document.getElementById("commentBox"); //input box grabbing


    const comment=document.createElement("p"); //creating p tag
    comment.innerText = input.value; //grabbing the value from input box and assigning to the p tag

    const parent = document.getElementById("space") //getting the parent element
    parent.appendChild(comment); //inserting the p tag into the parent element
    input.value = ""; //resetting the value for the input

})