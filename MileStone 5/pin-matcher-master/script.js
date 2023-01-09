let inputNumber = '';
let fourDigit;
function pin(){
    let randomNum = (Math.random() * 10000) + '';
    fourDigit = randomNum.split('.')[0];
    while(fourDigit.length != 4){
        randomNum = (Math.random() * 10000) + '';
        fourDigit = randomNum.split('.')[0];
    }
    return fourDigit;
}
document.getElementById("pinGenBtn").addEventListener("click", function(){
    document.getElementById("randomPin").value = pin();
})
document.getElementById("inputNumber").addEventListener("click", function(e){
    if(isNaN(e.target.innerText)){
        if(e.target.innerText == "C"){
            fourDigit = '';
            document.getElementById("randomPin").value = fourDigit;
            inputNumber = '';
            document.getElementById("inputScreen").value = '';
        }
    }else{
        inputNumber = inputNumber + e.target.innerText;
        document.getElementById("inputScreen").value = inputNumber;
        console.log(inputNumber);
    }
    
})

document.getElementById("submitBtn").addEventListener("click", function(){
    let count=0;
    if(inputNumber.length == fourDigit.length){
        for(let i=0; i<4; i++){
            if(inputNumber[i] != fourDigit[i]){
                count++;
            }
        }
        if(count == 0){
            document.getElementById("validate").style.display = "block";
            document.getElementById("notValidate").style.display = "none";
            alert("tui parchis bhai!!!");
        }else{
            alert("Bhodai Shala!");
            document.getElementById("notValidate").style.display = "block";
        }
    }else{
        alert("Bhodai Shala!");
        document.getElementById("notValidate").style.display = "block";
    }
    
    inputNumber = '';
    document.getElementById("inputScreen").value = '';

})
