const projectGalleryElement = document.querySelector(".project-gallery");
/* Required Dom Nodes*/
const modalContainer = document.querySelector('#modal');
const modalContent = document.querySelector('#modal-content');
const body = document.querySelector('body');
const closeModalButton = document.querySelector('#closeModalButton');
let globalData;

fetch("projects.json")
  .then((response) => response.json())
  .then((data) => {
    globalData = data;
    createContent(data);
  });

function createContent(data){
    data.forEach(function(item){
        buildElements(item);
    });
};

function buildElements(item){

    // create article element, parent element of the following children...
    var itemID = item.id
    var articleElement = document.createElement("article");
    articleElement.setAttribute("id", itemID);
    articleElement.setAttribute("class", "project")
    
    //create image
    var imageSrc = item.imageSrc;
    var imageAlt = item.imageAlt;
    var imageElement = document.createElement("img");
    imageElement.setAttribute("src", "assets/" + imageSrc);
    imageElement.setAttribute("alt", imageAlt);
    articleElement.append(imageElement)
    
    //create heading
    var name = item.name;
    var headingElement = document.createElement("h3");
    headingElement.innerText = name;
    articleElement.append(headingElement);

    //add event listener
    articleElement.addEventListener("click", function(event){
    });

    projectGalleryElement.append(articleElement);
  };


