
var btn = document.querySelectorAll(".btn-wish");

for (var i = 0; i <btn.length; i++) {
    var button = btn[i];
    
    button.addEventListener("click", function (event){
        buttonClicked = event.target

        var input = buttonClicked.parentElement;
        console.log (input)
    })

}

/*


const proName = document.querySelector(".product-name").innerHTML;
const proImg = document.querySelector("#img").src;
 

const prolist = [];

const prodoc = {
    Name: proName,
    Img: proImg,
}

prolist.push(prodoc);

console.log (prolist);



const proName = document.querySelectorAll(".product-name").innerHTML;
const proImg = document.querySelectorAll("#img").src;

const prolist = [];

const addContact=()=>{
  
    
    const prodoc = {
        Name: proName,
        Img: proImg,
    }
    
    
    prolist.push(prodoc);
    
    console.log (prolist);
}
  
addContact();
*/









  

    


    



