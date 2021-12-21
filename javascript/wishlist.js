// ARRAY FROM LOCALSTORAGE
console.log(products)


// ADD TO CART
function addToCart(id) {

    console.log(id)
  
    var item = products.find(() => id === id);
    console.log(item)
  
}



/*
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
