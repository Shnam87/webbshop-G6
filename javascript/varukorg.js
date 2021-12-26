
var varukorgProdukter = JSON.parse (localStorage.getItem("myCart")) || [];
let addToCartBtn = document.querySelectorAll(".btn-cart");
//var productLista = JSON.parse(fromLocalStorage)


for(let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', addToCart)
}

console.log(addToCartBtn)

function addToCart(event) {
   let btn = event.target
   let btn_parent = btn.parentElement
   //let btn_grandparent = btn.parentElement.parentElement
   let itemName = btn_parent.children[1].innerText
   let itemPrice = btn_parent.children[3].innerText
  // const imgUrl = document.querySelector(".product-img").src.slice(122,200);

  let newProduct = {
      name: itemName, 
      price: Number(itemPrice), 
     // imgUrl: imgUrl
  }

  varukorgProdukter.push(newProduct)
  localStorage.setItem("myCart", JSON.stringify(varukorgProdukter));
  //localStorage.setItem("myCart", JSON.stringify(productLista));


 // productLista.push(itemName)
  //productLista.push(itemPrice)

 //Number(itemPrice)
  // let itemContainer = document.createElement()
  //console.log(newProduct)

   // console.log(itemImage)
}


//console.log(varukorgProdukter)





/*
var btn = document.querySelectorAll(".btn-cart");
 var fromLocalStorage = localStorage.getItem("productLista")
 var productLista = JSON.parse(fromLocalStorage)

for (var i = 0; i <btn.length; i++) {

    var button = btn[i];

   // console.log(proName[i].innerHTML)
   


    button.addEventListener("click", function (event){
        
       
       var found = products.find(function(list) {
           if(list.name == "pyramid")
           return true;
       })
       
       
       console.log(found)
        
    
    })

    
}


*/

/*

// ARRAY FROM LOCALSTORAGE
console.log(products)


// ADD TO CART
function addToCart(id) {

    console.log(id)
    
    
  
 //   var item = products.find(() => id === id);
  //  console.log(item)

  
} 
*/