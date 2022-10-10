let productItems = document.getElementById("product-list");

let basket = JSON.parse(localStorage.getItem("basket")) || [];

let generateProductItems = () => {
    return products.map((data) => {
        let searchItemsLs = basket.find(x => x.id === data.id) || [];
        return `
        <div id="product-${data.id}" class="item">
        <img width="220" height="200" src="${data.image}" alt="">
        <div class="details">
         <h3>
         <a target="_blank" href="cart.html">
            ${data.brand} ${data.name}
         </a>
            </h3>
            <p class="desc">${data.description}</p>
            <div class="price-quantity">
                <h2><i class="bi bi-currency-rupee"></i> ${data.price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${data.id})" class="bi bi-dash-lg"></i>
                        <div id="${data.id}" class="quantity"> ${searchItemsLs.item === undefined ? 0: searchItemsLs.item} </div>
                    <i onclick="increment(${data.id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
        </div>`
    }).join("");
}

if(productItems){
    productItems.innerHTML = generateProductItems();

}

let increment = (id) => {
    let findItem = basket.find((element) => element.id === id);
    if(findItem === undefined){
        basket.push({
            id: id,
            item: 1
        })
    }else{
        findItem.item += 1; 
    }
    update(id);
    localStorage.setItem("basket", JSON.stringify(basket));

}
let decrement = (id) => {
    let findItem = basket.find((element) => element.id === id);
    if(findItem === undefined) { return; }
        else if(findItem.item == 0 ) 
        {
            return;
        }
        else{
        findItem.item -= 1;
    }

    update(id);
    basket = basket.filter((data) => data.item !== 0);
    localStorage.setItem("basket", JSON.stringify(basket));
 }
let update = (id) => {
    let displayQnty = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = displayQnty.item;
    cartItemCalc();
}

const cartItemCalc = () => {
    let getBasketItems = basket.map(x => x.item).reduce((x,y) => x+y, 0);
    console.log(getBasketItems)
    document.getElementsByClassName("totalcart")[0].innerHTML = getBasketItems;
}

cartItemCalc();

