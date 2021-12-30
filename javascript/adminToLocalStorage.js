// addEventListener som triggar "openFile" fuktionen när man klickar på knappen för att välja en bild
document.querySelector("#objImg").addEventListener("change", openFile);

// addEventListener som triggar "productInfo" fuktionen när man klickar på "Lägg till ny föremål" knappen
document.querySelector("#save").addEventListener("click", productInfo);

// Definirad variabel för bildlistan
var imgList = [];

// 3 Funktioner för att läsa in bilden, konvertera den till en base64 string och till slut spara den på localStorage
function selectImg(event) {
    var files = event.target.files;

    for (var i = 0; f = files[i]; i++) {
        var reader = new FileReader();

        reader.onload = function (e) {
            addImage(e.target.result)
        }
        reader.readAsDataURL(f)
    }
}

function addImage(imgData){
    imgList.push(imgData);

    localStorage.setItem("images", JSON.stringify(imgList));
};

function openFile(e) {
    const input = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(){
        const dataURL = reader.result;

        localStorage.setItem("objImg", dataURL);
    };
    reader.readAsDataURL(input);
};

// Definirad variabel för produktlistan
const products = JSON.parse(localStorage.getItem("productLista")) || [];

// Funktion för att skapa nya produkter, tilldela informationen och till sist spara på localStorage
function productInfo(e) {
    //e.preventDefault();

    const name = document.querySelector("#objName").value;
    const tag = name.toLowerCase();
    const price = document.querySelector("#objPrice").value;
    const description = document.querySelector("#objDescription").value;
    const prodImg = localStorage.getItem("objImg");

    let newProduct = {
        name:name,
        tag: tag,
        price:Number(price),
        description:description,
        prodImg: prodImg,
        inCart:Number(0)
    }
    products.push(newProduct);

    localStorage.setItem("productLista", JSON.stringify(products));
}
