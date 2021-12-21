
var imgList = [];

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

    console.log(imdData);
    localStorage.setItem("images", JSON.stringify(imgList));
};



document.querySelector("#objImg").addEventListener("change", openFile);

function openFile(e) {
    const input = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(){
        const dataURL = reader.result;

        console.log(dataURL);

        localStorage.setItem("objImg", dataURL);
    };
    reader.readAsDataURL(input);
};

document.querySelector("#save").addEventListener("click", productInfo);


const productsListLocal = JSON.parse(localStorage.getItem("productInfo")) || [];

function productInfo(e) {
    //e.preventDefault();

    const id = document.querySelector("#objId").value;

    const name = document.querySelector("#objName").value;

    const price = document.querySelector("#objPrice").value;

    const description = document.querySelector("#objDescription").value;

    const prodImg = localStorage.getItem("objImg");

    let newProduct = {
        id:id,
        name:name,
        price:price,
        description:description,
        prodImg:prodImg
    }

    productsListLocal.push(newProduct);

    localStorage.setItem("productInfo", JSON.stringify(productsListLocal));
}
 



console.log(productsListLocal);
