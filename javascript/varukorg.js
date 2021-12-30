
let addToCartBtn = document.querySelectorAll(".btn-cart");
var varukorgProdukter = JSON.parse (localStorage.getItem("myCart")) || [];


// loopar igenom alla knappar
for(let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', addToCart)
}

console.log(addToCartBtn)


//funktion för att lägga till i varukorg
function addToCart(event) {
   let btn = event.target // för att kunna hämta ett visst element
   let btn_parent = btn.parentElement
   let btn_parentparent = btn_parent.parentElement
   let itemName = btn_parent.children[1].innerText
   let itemPrice = btn_parent.children[3].innerText
   var prodImg = btn_parentparent.children[0].children[0].children[0].src
  
  console.log(prodImg);

  let newProduct = {
      name: itemName, 
      price: Number(itemPrice), 
      prodImg:prodImg
  }

  varukorgProdukter.push(newProduct) // objektet newProduct pushas in i variabeln varukorgProdukter
  localStorage.setItem("myCart", JSON.stringify(varukorgProdukter));  // setItem för att 'varukorgProdukter' ska hamna i 'myCart' i localStorage
  
addnum();

}

//funktion för att visa antal produkter som ligger i varukorgen
function addnum () {
const list = JSON.parse(localStorage.getItem("myCart"))
    document.querySelector(".cart-icon div").textContent = list.length 

}


addnum();




