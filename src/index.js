console.log("script launched");
let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector (".details-title");
let mainContentEl = document.querySelector (".main-content");
let anchors = document.querySelectorAll (".thumbnails-anchor"); // все эементы HTML которые принадлежат к этому классу
let selectedItem;

for(let i=0; i< anchors.length; i++) {
    anchors[i].addEventListener("click", function(event){ 
        event.preventDefault(); // отмена дефол - event
        //console.log(anchors[i].getAttribute("href"));// дай мне значение атрибута/ мы перехватываем клик
        console.log( anchors[i]);
        showDetals();
        setDetails ( anchors[i]); //функция вызова 

    } )
}
function setDetails(anchor) {
    console.log("anchor element  was pressed", anchor);
    let hrefValue = anchor.getAttribute("href")
    detailsImage.setAttribute("src",hrefValue);
   // detailsTitle.textContent = anchor.getAttribute("data-details-title");
   // выгрузка элемента с класса details-title внутри этого анкора
   let thumbnailsTitleSelector = `[href="${hrefValue}"] .thumbnails-title`;
    let thumbnailTitleEl = document.querySelector(thumbnailsTitleSelector);
    detailsTitle.textContent = `${thumbnailTitleEl.textContent}: ${anchor.getAttribute('data-details-title')}`;
    anchor.parentElement.classList.add("selected");
    if (selectedItem){
        selectedItem.classList.remove("selected");
    }
    selectedItem = anchor.parentElement;
}

function showDetals () {
    mainContentEl.classList.remove('hidden');
   
}
function hideDetails () {
    mainContentEl.classList.add('hidden');
    if (selectedItem){
        selectedItem.classList.remove("selected");
    }

}