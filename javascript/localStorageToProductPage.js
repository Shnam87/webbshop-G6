let cartID = 1;
let wishID = 1;
let id = 01;
const productString= localStorage.getItem("productLista");
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
                    <input type="hidden" id="${id++}">
                    <button type="button" class="btn-wish" id="btn-wish-${wishID++}">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                    <div class="product-btns">
                        <button type="button" class="btn-cart" id="btn-cart-${cartID++}">Lägg till i varukorg</button>
                    </div>
                </div>
                <div class="product-info">
                    <a href="#" class="product-name">${product.name}</a>
                    <div class="product-info-top">
                        <h2 class="sm-title">${product.description}</h2>
                    </div>
                    <p class="product-price">${product.price} </p>
                    <p class="product-price">${product.price * 0.75}</p>
                </div>
                <div class="off-info">
                    <h2 class="sm-title">25% rabatt</h2>
                </div>
            </div>
        `;
    });
}

displayInfo();


// lägg till varukorgen:

document.querySelector("#btn-cart-0").addEventListener("click", addToCart);

const cart = JSON.parse(localStorage.getItem("myCart")) || [];

function addToCart() {

    const name = document.querySelector(".product-name").innerText;
    const price = document.querySelector(".product-price").innerText.slice(0,2);
    const imgUrl = document.querySelector(".product-img>img").src.slice(122,200);

    let cartItem = {
        //cartID:cartID,
        name:name,
        price:Number(price),
        imgUrl:imgUrl
    }

    cart.push(cartItem);


    localStorage.setItem("myCart", JSON.stringify(cart));
}
