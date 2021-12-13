
let addToCart = document.querySelectorAll(".btn-cart");

let products = [
    {
        namn: "knut",
        pris: 65, 
        inCart: 0
    }, 
    {
        namn: "pyramid", 
        pris: 89,
        inCart: 0
    }, 
    {
        namn: "bubbla",
        pris: 89,
        inCart: 0
    }, 
    {
        namn: "bubbla mini",
        pris: 45,
        inCart: 0
    },
    {
        namn: "snäcka stor",
        pris: 89,
        inCart: 0
    },
    {
        namn: "snäcka mini",
        pris: 45,
        inCart: 0
    },
    {
        namn: "julgran",
        pris: 59,
        inCart: 0
    },
    {
        namn: "kotte",
        pris: 59,
        inCart: 0
    },
    {
        namn: "trepack",
        pris: 135,
        inCart: 0
    }
];

for (let i=0; i < addToCart.length; i++) {
    addToCart[i].addEventListener("click", () => {
        cartNumbers(products[i]);
       // totalKostnad(products[i]);
        
    })
}

function onLoadCartNumber() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if(productNumbers) {
        document.querySelector(".icons").textContent = productNumbers;
    }
}
    function cartNumbers(product) {
        console.log("my product is", product)
        let productNumbers = localStorage.getItem("cartNumbers");
        
        productNumbers = parseInt(productNumbers);

        if (productNumbers) {
            localStorage.setItem("cartNumbers", productNumbers + 1);
            document.querySelector(".icons").textContent =  productNumbers + 1;
        } else {
            localStorage.setItem("cartNumbers", 1);
            document.querySelector(".icons").textContent = 1;
        }

        setItems(product);
        
    }

    function setItems(product) {
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        
         if(cartItems != null) {
          
            if(cartItems[product.tag] == undefined) {
                cartItems = {
                    ...cartItems, 
                    [product.tag]: product
                }
            }
            cartItems[product.tag].inCart += 1; 
        } else {
            product.inCart = 1;
            cartItems =  {
                [product.tag]: product
        }
    }
        
        localStorage.setItem("productsInCart", JSON.stringify (cartItems));
    } 
    /*

    function totalKostnad(products) {
       // console.log("totalkostnaden för produkterna är", product.pris);
       let cartCost = localStorage.getItem('totalKostnad');
       cartCost = parseInt(cartCost);
        console.log("My cartCost is", cartCost);
        console.log(typeof cartCost );


        if(cartCost != null) {
            
            localStorage.setItem("totalKostnad", cartCost + product.pris);
        } else {
            localStorage.setItem("totalkostnad", product.pris);
        }

        
    }
    */
    
    onLoadCartNumber();
    
    





