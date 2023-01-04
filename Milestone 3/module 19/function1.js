function turnOnFan(){ //function declaration
    console.log("Go towards the fan switch");
    console.log("turn the switch on");
}

turnOnFan(); //function calling

function bringFood(taka){ //function declaration with parameters
    console.log("go to shop");
    console.log("give "+taka+" to the shop");
    console.log("come back home");
    var noOfSingara = taka/10; 
    return noOfSingara; //this will return this value
}

var returnedValue = bringFood(100); //function calling with parameters
console.log("you have got "+ returnedValue + " singara"); //returned value printing


function add(num1 , num2){ //function declaration
    result = num1 + num2;
    return result;
}

var result = add(2,4); //function calling with parameters
console.log(result); //returned value printing