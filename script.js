const projectGalleryElement = document.querySelector(".project-gallery");
/* Required Dom Nodes*/
const modalContainer = document.querySelector('#modal');
const modalContent = document.querySelector('#modal-content');
const modalItems = document.querySelector("#modal-items");
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

    //on article elements, I add an click event listener
    articleElement.addEventListener("click", function(event){

      //when my user clicks on the article element, I will add the following classes to each of the elements below. I've stored the elements in the following variables

      body.classList.add("modal-active");
      modalContainer.classList.add("active");
      modalItems.classList.add('active');

      //add event listener to my modal close button
      closeModalButton.addEventListener("click",function(){
        //when someone clicks on my modal close button, I will remove all of the classes that I previously added
        body.classList.remove("modal-active");
        modalContainer.classList.remove("active");
        modalItems.classList.remove('active');
      });
      getSelectedArticleContent(event);
    });

    projectGalleryElement.append(articleElement);
    
    
  };

  function getSelectedArticleContent(event){  

    
    globalData.find(function(item){
      //check every item in this array 
      if(item.id == event.currentTarget.id){ //compare the id of that item with the id that I give you. If the ids match, this conditional statement becomes true
        console.log(item.id)
        console.log(item.description)
        console.log(item.imageSrc)

      } else {
        //If the ID that i give you doesn't match the id of the item, log the following to the console
        console.log('keep looking');
      }
    });

  };


