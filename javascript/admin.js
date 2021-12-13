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

const products = [];

function productInfo(e) {
    e.preventDefault();

    const name = document.querySelector("#objName").value;

    const price = document.querySelector("#objPrice").value;

    const description = document.querySelector("#objDescription").value;

    const prodImg = localStorage.getItem("objImg");

    let newProduct = {
        name:name,
        price:price,
        description:description,
        prodImg:prodImg
    }

    products.push(newProduct);

    var prodID = "product_" + localStorage.length;

    localStorage.setItem(prodID, JSON.stringify(products));
}
