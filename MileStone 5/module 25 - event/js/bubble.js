 //bubble effect is the effect of multiple events effect
 document.getElementById("second-item").addEventListener("click", function(event){
    event.stopPropagation(); //this will stop the bubble effect
    console.log("Second item clicked");
})
document.getElementById("second-item").addEventListener("click", function(event){
    console.log("Second item clicked 2");
})
document.getElementById("first-item").addEventListener("click", function(event){
    event.stopImmediatePropagation();
    console.log("First item clicked");
})
document.getElementById("first-item").addEventListener("click", function(event){
    event.stopImmediatePropagation();
    console.log("First item clicked 2");
})
document.getElementById("first-item").addEventListener("click", function(event){
    event.stopImmediatePropagation();
    console.log("First item clicked 3");
})
//list container
document.getElementById("list-container").addEventListener("click", function(){
    console.log("ul clicked");
})
document.getElementById("section-container").addEventListener("click", function(){
    console.log("section clicked");
})