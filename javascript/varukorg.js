

var varukorgProdukter = JSON.parse (localStorage.getItem("myCart")) || [];
let addToCartBtn = document.querySelectorAll(".btn-cart");



for(let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', addToCart)
}

console.log(addToCartBtn)

function addToCart(event) {
   let btn = event.target
   let btn_parent = btn.parentElement
   let btn_parentparent = btn_parent.parentElement

   //let btn_grandparent = btn.parentElement.parentElement
   let itemName = btn_parent.children[1].innerText
   let itemPrice = btn_parent.children[3].innerText
   var prodImg = btn_parentparent.children[0].children[0].children[0].src
  //let prodImg = localStorage.getItem("objImg");
  console.log(prodImg);

  let newProduct = {
      name: itemName, 
      price: Number(itemPrice), 
      prodImg:prodImg
  }

  varukorgProdukter.push(newProduct)
  localStorage.setItem("myCart", JSON.stringify(varukorgProdukter));
  //localStorage.setItem("myCart", JSON.stringify(productLista));
addnum();

}


function addnum () {
const list = JSON.parse(localStorage.getItem("myCart"))
    document.querySelector(".cart-icon div").textContent = list.length 

   

}


addnum();




