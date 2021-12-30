// SELECTOR ELEMENTS
const productsOnProductPage = JSON.parse(localStorage.getItem("productLista")) 
const headerHeartIcon = document.querySelector(".heart-icon span")
const btnAddToFavoritelist = document.querySelectorAll(".btn-wish"); 
const favoriteUl = document.querySelector(".favorite-item-list");


// DEFINED VARIABLES
let cartItemslist = JSON.parse(localStorage.getItem ("productsInWishlist")) || [];   


/*------------------------FUNCTIONS--------------------------------------*/

//Loops through all Add to favoritelist buttons an adds an Click event.
for (let i=0; i < btnAddToFavoritelist.length; i++){
    btnAddToFavoritelist[i].addEventListener("click", () => {  
    addProduct(productsOnProductPage[i]); 
    })
}

//Adds products to array in Local Storage
function addProduct (product){  
    cartItemslist.push(product);     
    localStorage.setItem(("productsInWishlist"),JSON.stringify(cartItemslist));  
    displayFavoritelist();
    displayNumber();
}
 
//Displays the number of products in the favoriteslist
function displayNumber () {
    headerHeartIcon.textContent = cartItemslist.length;
}

//Creates elements with productsinfo in the favoritesist
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

// Side navigation menu for showing and closing favoritlist
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}