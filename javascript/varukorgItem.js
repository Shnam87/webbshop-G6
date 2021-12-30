
const cartItemString= localStorage.getItem("myCart");
const cartItems = JSON.parse(cartItemString) || [];
const cartItems_Element = document.querySelector(".cart-items"); 

//funktion för att det som finns i localStorage ska visas på sidan
function displayCartItems() {
  
    cartItems.forEach(item => {
        cartItems_Element.innerHTML += `
        <hr class="avskiljare">
            <div class="cart-item">
            <img class="imgCart" src="${item.prodImg}" alt="${item.name}">
                <p class="item-name">${item.name}<p>
                

                <p class="item-price">${item.price * 0.75} kr
                </p>
               <button class="removeButton"> <i id="trash-btn" class="fas fa-trash"></i></buttton>
            </div>
           
        `;
    });

}

  var totalSumma = 0;

  // Räknar ihop totalsumman av produkterna
  function totalCost() {
    
    cartItems.forEach(item => {
        totalSumma = totalSumma += item.price * 0.75
     
console.log(totalSumma)
    });

    cartItems_Element.innerHTML += `
    <hr class="avskiljare">
    <p class="totalSumma">Pris för produkter ${totalSumma} kr</p>
    `
}


displayCartItems();
totalCost();









