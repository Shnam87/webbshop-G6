
const productsOnProductPage = JSON.parse(localStorage.getItem("productLista")) 
const headerHeartIcon = document.querySelector(".heart-icon span")
const btnAddToFavoritelist = document.querySelectorAll(".btn-wish"); 
const favoriteUl = document.querySelector(".favorite-item-list");

for (let i=0; i < btnAddToFavoritelist.length; i++){
    btnAddToFavoritelist[i].addEventListener("click", () => {   //Loopar alla "hjärt" knappar på produkterna, och varje knapp får ett [i] nummer.
    addProduct(productsOnProductPage[i]); 
    })
}


let cartItemslist = JSON.parse(localStorage.getItem ("productsInWishlist")) || [];   

function addProduct (product){  
    cartItemslist.push(product);     
    localStorage.setItem(("productsInWishlist"),JSON.stringify(cartItemslist));  

    displayFavoritelist();
    displayNumber();
}
 


function displayNumber () {
    headerHeartIcon.textContent = cartItemslist.length;
}


function displayFavoritelist(){
    let favoriteItems = JSON.parse (localStorage.getItem("productsInWishlist"));
    
    if (favoriteItems && favoriteUl) {
        favoriteUl.innerHTML = ``;
        Object.values(favoriteItems).map(item => {
            favoriteUl.innerHTML += `
            <li class= "favorite-item">
                <div class="img-wrap">
                    <img src="${item.prodImg}" alt="">
                </div>
                <div class="favorite-details">
                    <h3>${item.name}</h3>
                    <span class="favorite-product-description">${item.description}</span>
                    <span class="favorite-product-price">${item.price *0.75} Kr</span>
                </div>
                <button class="favorite-remove-btn">X</button>
            </li>
           `
        });    
    } 
}

displayNumber();
displayFavoritelist();



let btnRemove = document.querySelectorAll(".favorite-remove-btn"); 

for (let i=0; i < btnRemove.length; i++){
    btnRemove[i].addEventListener("click", () => {   //Loopar alla "hjärt" knappar på produkterna, och varje knapp får ett [i] nummer.
    remove(cartItemslist[i]); 
    //console.log (productsOnProductPage[1].tag)
    })
}

function remove (product){
    console.log("klick", product)
} 




function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.querySelector("body").style.marginRight = "300px";
    //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector("body").style.marginRight= "0";
    //document.body.style.backgroundColor = "white";
}









/*

const productsOnProductPage = JSON.parse(localStorage.getItem("productLista")) 

let btnAddToWishlist = document.querySelectorAll(".btn-wish");  //Knapp med hjärta

for (let i=0; i < btnAddToWishlist.length; i++){
    btnAddToWishlist[i].addEventListener("click", () => {   //Loopar alla "hjärt" knappar på produkterna, och varje knapp får ett [i] nummer.
    addProduct(productsOnProductPage[i]); 
    console.log (productsOnProductPage[1])
    
    

        
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
        
        //addProduct()
    })
}
*/

/*
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers) {
        document.querySelector(".heart-icon span").textContent = productNumbers;
    }
}
*/


//onLoadCartNumbers();

/*

function addProduct (product){
    let cartItems = JSON.parse(localStorage.getItem ("productsInWishlist")) || [];
    

    if(cartItems != null) {  // OM wishlistan i localstorage INTE är tom, körs denna.
        if(cartItems[product.tag] == undefined){    // kontrollerar om OM produkt redan finns i listan. läggs den till i listan.
            cartItems = {
                ...cartItems,
                [product.tag]:product
            } 
        }  
    } 
    
    else{                                                 // OM wishlist i localstorage ÄR tom lägger den till ny produkt
       // product.inCart = 1
        cartItems = {
            [product.tag]:product
        }
        
    }

    //cartItems.push(cartItems)
    localStorage.setItem(("productsInWishlist"),JSON.stringify(cartItems));  
    displayCart();  
    
}

*/


/*


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
                    <span class="favorite-product-description">${item.description}</span>
                    <span class="favorite-product-price">${item.price} Kr</span>
                </div>
                <button class="favorite-remove-btn">X</button>
            </li>
           `
        });    
    }

    
}

displayCart();
*/