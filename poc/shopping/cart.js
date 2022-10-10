let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket1 = JSON.parse(localStorage.getItem('basket')) || [];
let generateCartItems = () => {
    if(basket1 !== 0){
        console.log("Basket is not Empty");
    }else{
        console.log("Basket is total Empty");
    }


}