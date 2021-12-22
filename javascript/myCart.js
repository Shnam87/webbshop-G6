const cartItemString= localStorage.getItem("myCart");
console.log(cartItemString);
const cartItems = JSON.parse(cartItemString)

const cartItems_Element = document.querySelector(".cart-items");


function displayCartItems() {
    //cartItems_Element.innerHTML = "";
    cartItems.forEach((item) => {
        cartItems_Element.innerHTML += `
            <div class="cart-item">
                <div class="item-info">
                    <img src=".${item.imgUrl}" alt="${item.name}">
                </div>
                <h2>${item.name}</h2>
                <div class="item-price">${item.price}<span> SEK</span>
                </div>
            </div>
        `;
    });
}

displayCartItems();
