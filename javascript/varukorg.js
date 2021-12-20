
document.querySelectorAll(".btn-cart").forEach(  btn=> { 
     btn.addEventListener("click",  buy)})

 buyList = [];



function buy(e) { e.preventDefault();  
    console.log("hej")
}

//läs value(namn, pris) från productpage och skapa ett object från detta och pusha in i buyList . pusha buylist i localstorage }


 