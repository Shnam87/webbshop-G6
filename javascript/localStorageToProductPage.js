let productListIndex = localStorage.length -1;
let prodID = "product_" + productListIndex ;
let id= 0;
console.log(prodID);

const productString= localStorage.getItem(prodID);
const products = JSON.parse(productString)


const products_Element = document.querySelector(".product-items");

function displayInfo() {
    products.forEach( (product) => {
        products_Element.innerHTML += `
        
        <div class="product">
            <div class="product-content">
                <div class="product-img">
                    <img src="${product.prodImg}" alt="${product.name}">
                </div>
                <div class="produkt-btns">
                    <button type="button" class="btn-wish"><i class="fa fa-heart-o" aria-hidden="true"></i></button>
                    <button type="button" class="btn-cart">Lägg till i varukorg</button>
                    <input type="hidden" value="${id++}">
                    <button type="button" class="btn-buy">Köp nu</button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-info-top">
                    <h2 class="sm-title">${product.description}</h2>
                </div>
                <a href="#" class="product-name">${product.name}</a>
                <p class="product-price">${product.price * 1.25 } </p>
                <p class="product-price">${product.price}</p>
            </div>
            <div class="off-info">
            <h2 class="sm-title">25% rabatt</h2>
        </div>
    </div>` ;

        
    });
    
}

displayInfo();
