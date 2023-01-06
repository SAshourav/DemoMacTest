function colorChange(){
    document.body.style.backgroundColor = "yellow";
}

//GETTING THE ELEMENT FROM THE HTML USING ID

const BlueBtn = document.getElementById("blue");
BlueBtn.onclick =colorChange2; //just set the name of the function
function colorChange2(){
    document.body.style.backgroundColor = "blue";
}
const dfltBtn = document.getElementById("dflt");
dfltBtn.onclick = function defaultColor(){ //এভাবে কাজ করলে , ফাংশন এর নাম না দিলেও হয় 
    document.body.style.backgroundColor = "white";
}

//using Action Listener

const goldenBtn = document.getElementById("goldenBtn");
goldenBtn.addEventListener("click", goldenBtnClick)
function goldenBtnClick(){
    document.body.style.backgroundColor = "goldenrod";
}

const hotPinkBtn = document.getElementById("hotPink");
hotPinkBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "hotpink";
})