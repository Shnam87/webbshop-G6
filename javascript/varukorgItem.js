
const cartItemString= localStorage.getItem("myCart");
//console.log(cartItemString);
const cartItems = JSON.parse(cartItemString) || [];
const cartItems_Element = document.querySelector(".cart-items");

function displayCartItems() {
    //cartItems_Element.innerHTML = "";
    cartItems.forEach(item => {
        cartItems_Element.innerHTML += `
            <div class="cart-item">
            <img class="imgCart" src="${item.prodImg}" alt="${item.name}">
                <h4 class="item-name">${item.name}</h4>
                <button onclick="removeProduct()">Ta bort produkt</button>
                <h4 class="item-price">${item.price} SEK
                </h4>
            </div>
        `;
    });


}

function removeProduct() {
    var removeName = document.querySelector(".item-name");
    var removePrice = document.querySelector(".item-price");
    removeName.remove();
    removePrice.remove();
    window.localStorage.removeItem("myCart");
  }

  var totalSumma = 0;


  function totalCost() {
    //cartItems_Element.innerHTML = "";
    cartItems.forEach(item => {
        totalSumma = totalSumma += item.price
     
console.log(totalSumma)
    });

    cartItems_Element.innerHTML += `
    <p class="totalSumma">Din totala kostnad är ${totalSumma} Kr</p>
    `

}


displayCartItems();
totalCost();








