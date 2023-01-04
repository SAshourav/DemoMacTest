var student1 = {
    id: 201, name:"sabbir", mark: 93, phone: 013031406, height: 5.5
} //creating object
var mobile1 = {
    brand: "apple", 
    price: 55000, 
    screen_size: 6.1, 
    model: "iphone 12"
}
var mobile2 = {
    brand: "oneplus",
    price: 45000,
    screen_size: 6,
    model: "oneplus 9t"
}

//ways to print the value of a object
console.log(student1);
console.log(mobile1.brand);
var price = mobile2.price;
console.log(price);


//ways to assign values to objects
mobile2.price = 50000;
console.log(mobile2.price);
mobile2["price"] = 40000;
console.log(mobile2.price);

mobile2["heightElement"] = 4.6; //include this property to the mobile2 object
console.log(mobile2);