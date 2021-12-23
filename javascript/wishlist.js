const productsOnProductPage = JSON.parse(localStorage.getItem("productLista"))


let btnAddToWishlist = document.querySelectorAll(".btn-wish");  //Knapp med hjärta

for (let i=0; i < btnAddToWishlist.length; i++){
    btnAddToWishlist[i].addEventListener("click", () => {   //Loopar alla "hjärt" knappar på produkterna, och varje knapp får ett [i] nummer.
    cartNumbers(productsOnProductPage[i]);                                          

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
        
        addProduct(product)
    }
  })
}


function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers) {
        document.querySelector(".heart-icon span").textContent = productNumbers;
    }
}


function addProduct (product){
    let cartItems = JSON.parse(localStorage.getItem ("productsInWishlist"));

    if(cartItems != null) {  // OM wishlistan i localstorage INTE är tom, körs denna.
        if(cartItems[product.tag] == undefined){    // kontrollerar om OM produkt redan finns i listan. läggs den till i listan.
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
    } else{                                                 // OM wishlist i localstorage ÄR tom lägger den till ny produkt
       // product.inCart = 1
        cartItems = {
            [product.tag]:product
        }
    }
    localStorage.setItem(("productsInWishlist"),JSON.stringify(cartItems));   
}


function displayCart(){
    let cartItems = localStorage.getItem("productsInWishlist")
    cartItems = JSON.parse(cartItems);
    let cartProducts = document.querySelector
    (".favorite-item-list");
    
    if (cartItems && cartProducts) {
        cartProducts.innerHTML = ``;
        Object.values(cartItems).map(item => {
            cartProducts.innerHTML += `
            <li class= "favorite-item">
                <div class="img-wrap">
                    <img src="" alt="">
                </div>
                <div class="favorite-details">
                    <h3>${item.name}</h3>
                    <span class="favorite-product-description">${item.description}></span>
                    <span class="favorite-product-price">${item.price}</span>
                </div>
                <button class="favorit-remove-btn">X</button>
            </li>
           `
        });    
    }
}




onLoadCartNumbers();
displayCart();

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector(".wishlist-page").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".wishlist-page").style.marginLeft= "0";
  }

