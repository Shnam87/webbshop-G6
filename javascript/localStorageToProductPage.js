
const products_Element = document.querySelector(".product-items");

let products = JSON.parse(localStorage.getItem("productInfo"));
console.log(products)

function displayInfo() {
    products.forEach( (product) => {
        products_Element.innerHTML += `
      
            <div class="product">
                <div class="product-content">
                    <div class="product-img">
                        <img src="${product.prodImg}" alt="${product.name}">
                    </div>
                    <button type="button" class="btn-wish" onclick="addToCart(${product.id})">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                    <div class="product-btns">
                        <button type="button" class="btn-cart">Lägg till i varukorg</button>
                    </div>
                </div>
                <div class="product-info">
                    <a href="#" class="product-name">${product.name}</a>
                    <div class="product-info-top">
                        <h2 class="sm-title">${product.description}</h2>
                    </div>
                    <p class="product-price">${product.price} </p>
                    <p class="product-price"></p>
                </div>
                <div class="off-info">
                    <h2 class="sm-title">25% rabatt</h2>
                </div>
            </div>
        `;
    });
}

displayInfo();
