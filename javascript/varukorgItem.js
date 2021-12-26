

const cartItemString= localStorage.getItem("myCart");
//console.log(cartItemString);
const cartItems = JSON.parse(cartItemString) || [];
const cartItems_Element = document.querySelector(".cart-items");



function displayCartItems() {
    //cartItems_Element.innerHTML = "";
    cartItems.forEach((item) => {
        cartItems_Element.innerHTML += `
            <div class="cart-item">
                <h4 class="item-name">${item.name}</h4>
                <h4 class="item-price">${item.price} SEK
                </h4>
            </div>
        `;
    });

   
}






function totalCost(item) {
    //console.log("The product price is", product.price)
    let cartCost = localStorage.getItem("myCart")
    
    console.log ("My cartCost is", cartCost)
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + item.price);
    } else{
        localStorage.setItem("totalCost", item.price)
    }
 
}


displayCartItems();
totalCost();
