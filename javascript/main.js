/*---------------------------Unsplash API Image-------------------------------------------------*/

const numImagesAvailable = 258  //how many photos are total in the collection
const numItemsToGenerate = 1; //how many photos you want to display
const collectionID = 460091  //Collection ID
const ImageContainer = document.querySelector(".image-container")


function renderGalleryItem(randomNumber){
  fetch(`https://source.unsplash.com/collection/${collectionID}/?sig=${randomNumber}`)
    .then((response) => {
        ImageContainer.innerHTML = `<img class="gallery-image" src="${response.url}" alt="gallery image"/>`
  })
}

for(let i=0; i < numItemsToGenerate; i++){
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
    renderGalleryItem(randomImageIndex);
}

