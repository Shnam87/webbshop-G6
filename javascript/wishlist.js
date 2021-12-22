
/*
const productsOnProductPage = JSON.parse(localStorage.getItem("productLista"))
//console.log(productsOnProductPage)

let btnAddToWishlist = document.querySelectorAll(".btn-wish");


for (let i=0; i < btnAddToWishlist.length; i++){
    btnAddToWishlist[i].addEventListener("click", () => {
    cartNumbers(productsOnProductPage[i]);
    totalCost(productsOnProductPage[i])
  })
}


function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers) {
        document.querySelector(".heart-icon span").textContent = productNumbers;
    }
}


function cartNumbers (product){
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers)
    
    if(productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1)
        document.querySelector(".heart-icon span").textContent = productNumbers + 1;
    }else{
        localStorage.setItem("cartNumbers", 1)
        document.querySelector(".heart-icon span").textContent = 1;
    }
    setItems(product)
}


function setItems (product){
    let cartItems = localStorage.getItem ("productsInWishlist");
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else{
        product.inCart = 1
        cartItems = {
            [product.tag]:product
        }
    }
    localStorage.setItem(("productsInWishlist"),JSON.stringify(cartItems));
}


function totalCost(product) {
    //console.log("The product price is", product.price)
    let cartCost = localStorage.getItem("totalCost")
    
    console.log ("My cartCost is", cartCost)

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else{
        localStorage.setItem("totalCost", product.price)
    }
 

}

console.log(("productsInWishlist"))

function displayCart(){
    let cartItems = localStorage.getItem("productsInWishlist")
    cartItems = JSON.parse(cartItems);
    let cartProducts = document.querySelector
    (".cart-products");

    console.log(cartItems);
    if (cartItems && cartProducts) {

        console.log("running")
        cartProducts.innerHTML = ``;
        Object.values(cartItems).map(item => {
            cartProducts.innerHTML += `
            <div class= "cart-product">
                <button class="remove-product"></button>
                <img src="" alt="">
                <span>${item.name}</span>
            </div>
            <div class="cart-price"></div>
            <div class="cart-quantity">
                <button> - </button>
                <span>${item.inCart}</span>
                <button> + </button>
            </div>
            <div class="cart-total">
                ${item.inCart * item.price}
            </div>
           `
        });
        
        
            
    }
}

onLoadCartNumbers();
displayCart();
*/
