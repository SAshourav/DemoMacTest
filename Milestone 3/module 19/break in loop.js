var i = 0;
while (i < 10){
    if(i == 4){
        break;  //after coming into this point the loop will end
    }
    console.log(i);
    i++;
}

i=0;
arr = [10,20,30,40,50,60,70];
for(i=0; i<arr.length; i++){
    var number = arr[i];
    if(number == 30){
        continue;
    }
    console.log(number);
    i++;
}