// Några globala variabler
let id = 01;
const productString= localStorage.getItem("productLista");
const products = JSON.parse(productString)

const products_Element = document.querySelector(".product-items");

// Funktionen som skapar element med produktinformation på produkt sidan
function displayInfo() {
    products.forEach( (product) => {
        products_Element.innerHTML += `
      
            <div class="product">
                <div class="product-content">
                    <div class="product-img">
                        <img src="${product.prodImg}" alt="${product.name}">
                    </div>
                    <input type="hidden" id="${id++}">
                    <button type="button" class="btn-wish">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                    <div class="product-btns">
                        
                    </div>
                </div>
                <div class="product-info">
                <button type="button" class="btn-cart"">Lägg till i varukorg</button>
                    <a href="#" class="product-name">${product.name}</a>
                    <div class="product-info-top">
                        <h2 class="sm-title">${product.description}</h2>
                    </div>
                    <p class="product-price">${product.price}</p>
                    <p class="product-price">${product.price * 0.75}<span> kr</span></p>
                </div>
                <div class="off-info">
                    <h2 class="sm-title">25% rabatt</h2>
                </div>
            </div>
        `;
    });
}

displayInfo();
