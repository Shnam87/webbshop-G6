
console.log(products)

let btnCart = document.querySelectorAll(".btn-cart");


for (let i=0; i < btnCart.length; i++){
  btnCart[i].addEventListener("click", () => {

    cartNumbers(products[i]);
  })
}

function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem("cartNumbers");

  if(productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers (product){
 // console.log("The product clicked is", product)
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers)
  
  if(productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1)
    document.querySelector(".cart span").textContent = productNumbers + 1;
  }else{
    localStorage.setItem("cartNumbers", 1)
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product)
}


function setItems (product){
 console.log ("Min produkt är:", product)
  
}

onLoadCartNumbers();

//console.log (products[1].id) 








/*

// ADD TO CART
function addToCart(id) {

    console.log(id) 

}

// ARRAY FROM LOCALSTORAGE

let localStorageList = JSON.parse(localStorage.getItem("product_1"))  //const productsEl = document.querySelector(".products");
console.log(localStorageList)


//EVENTLISTENERS

let btn = document.querySelectorAll(".btn-wish");



for (var i = 0; i <btn.length; i++) {
    btn[i].addEventListener("click", () =>{
        let id = btn.id;
        console.log(id)
        //addToCart(id)
    })
}
   // console.log(proName[i].innerHTML)

// SELECT ELEMENTS


// cart array
//let cart = JSON.parse(localStorage.getItem("CART")) || [];
let cart = [];

//updateCart();


// ADD TO CART
function addToCart(id) {
    // check if prodcut already exist in cart
    if (cart.some((item) => item.id === id)) {
        return;
       //changeNumberOfUnits("plus", id);
    } else {
      const item = products.find((product) => product.id === id);
  
      cart.push({
        ...item,
        //numberOfUnits: 1,
      });
    }
    console.log (cart)
    //updateCart();
  }

*/
