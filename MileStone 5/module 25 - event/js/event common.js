function handleJustFunction(){
    const clickingMethod = document.getElementById("clicking_method");
    clickingMethod.innerText="Set by just clicking functions";
}

const btn = document.getElementById("handle-event");
btn.addEventListener("click", eventHandle);
function eventHandle(){
    const clickingMethod = document.getElementById("clicking_method");
    clickingMethod.innerText="this text is set by actionListener method functions";
}

//changing the value of p as per the value in the field after clicking update btn

document.getElementById("update-name").addEventListener(
    "click", function(){
        const nameField = document.getElementById("input-field");
        //console.log(nameField.value); //for text input we have to use value not inner text
        const p = document.getElementById("clicking_method");
        p.innerText = nameField.value; //p will show the that we will give input into the field
        nameField.value = ""; //making the field empty
    })