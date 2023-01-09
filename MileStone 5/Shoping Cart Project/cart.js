//product and price information
let phoneCaseTotal=59 , phoneTotal=1219;
document.getElementById("plus-p1").addEventListener("click", function(){
    let quantity = plusBtn("quantity-value-p1");
    const unitPrice = 1219;
    updatePrice(unitPrice, quantity, "price-p1");
    phoneTotal = parseFloat(document.getElementById("price-p1").innerText);
    updateOtherInfo();
})
const firstMinus = document.getElementById("minus-p1");
firstMinus.addEventListener("click", function(){
    let quantity = minusBtn("quantity-value-p1");
    const unitPrice = 1219;
    updatePrice(unitPrice, quantity, "price-p1");
    phoneTotal = parseFloat(document.getElementById("price-p1").innerText);
    updateOtherInfo();
})
document.getElementById("plus-p2").addEventListener("click", function(){
    let quantity = plusBtn("quantity-value-p2");
    let unitPrice = 59;
    updatePrice(unitPrice, quantity, "price-p2");
    phoneCaseTotal = parseFloat(document.getElementById("price-p2").innerText);
    updateOtherInfo();
})
document.getElementById("minus-p2").addEventListener("click", function(){
    let quantity = minusBtn("quantity-value-p2");
    let unitPrice = 59;
    updatePrice(unitPrice, quantity, "price-p2");
    phoneCaseTotal = parseFloat(document.getElementById("price-p2").innerText);
    updateOtherInfo();
});


//function for plus minus button

function plusBtn(id){
    const quantity = document.getElementById(id);
    let no_quantity = parseInt(quantity.value);
    no_quantity = no_quantity + 1;
    quantity.value = no_quantity;
    return no_quantity;
}
function minusBtn(id){
    const quantity = document.getElementById(id);
    let no_quantity = parseInt(quantity.value);
    if(no_quantity > 1){
        no_quantity = no_quantity - 1;
    }
    quantity.value = no_quantity;
    return no_quantity;
}

//function for update price

function updatePrice(unitPrice, quantity, id){
    let finalPrice = unitPrice * quantity;
    document.getElementById(id).innerText = finalPrice;
}

//checkout btn
document.getElementById("checkoutBtn").addEventListener("click", function(){
    alert("order completed");
})

//subtotal price

function updateOtherInfo(){
    let subtotal = phoneTotal + phoneCaseTotal;
    let tax = subtotal * 0.1;
    let total = subtotal+tax;
    document.getElementById("subTotal").innerText = subtotal;
    document.getElementById("tax-value").innerText = tax;
    document.getElementById("Total").innerText = total;
}


