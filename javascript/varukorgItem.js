
const cartItemString= localStorage.getItem("myCart");
//console.log(cartItemString);
const cartItems = JSON.parse(cartItemString) || [];
const cartItems_Element = document.querySelector(".cart-items");

function displayCartItems() {
    //cartItems_Element.innerHTML = "";
    cartItems.forEach(item => {
        cartItems_Element.innerHTML += `
        <hr class="avskiljare">
            <div class="cart-item">
            <img class="imgCart" src="${item.prodImg}" alt="${item.name}">
                <p class="item-name">${item.name}<p>
                

                <p class="item-price">${item.price * 0.75}:-
                </p>
               <button class="removeButton"> <i class="fas fa-trash"></i></buttton>
            </div>
           
        `;
    });


}

/*
function removeProduct() {
    var removeName = document.querySelector(".item-name");
    var removePrice = document.querySelector(".item-price");
    removeName.remove();
    removePrice.remove();
    window.localStorage.removeItem("myCart");
  }

   <button onclick="removeProduct()">Ta bort produkt</button>
*/
  var totalSumma = 0;


  function totalCost() {
    //cartItems_Element.innerHTML = "";
    cartItems.forEach(item => {
        totalSumma = totalSumma += item.price * 0.75
     
console.log(totalSumma)
    });

    cartItems_Element.innerHTML += `
    <hr class="avskiljare">
    <p class="totalSumma">Pris för produkter ${totalSumma}:-</p>
    `

}


displayCartItems();
totalCost();









