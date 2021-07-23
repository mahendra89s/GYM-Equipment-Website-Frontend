var add = document.getElementById("addbtn");
var cart1 = document.getElementById("cart1");
var diff = document.getElementById("diff1");
var price = document.getElementById("price");
var subprice = document.getElementById("subprice");
var totprice = document.getElementById("totprice");
var priceInitial = parseInt(price.innerHTML);
function add1(){
    cart1.stepUp(1);
    var price1 = parseInt(price.innerHTML) +  priceInitial;
    var totprice1 = price1 + 825;
    price.innerHTML = price1;
    subprice.innerHTML = price1;
    totprice.innerHTML = totprice1;
    
}
function diff1(){
    if(cart1.value >1){
        cart1.stepDown(1);
        var price1 = parseInt(price.innerHTML) -  priceInitial;
        var totprice1 = price1 + 825;
        price.innerHTML = price1;
        subprice.innerHTML = price1;
        totprice.innerHTML = totprice1;
    }
}
