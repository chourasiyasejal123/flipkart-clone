import {
    featureProductNav
} from "./Data/featureProductNav.js";
import { imageSlider } from "./Data/imageSlider.js";
import { electronicProductData } from "./Data/electronicProduct.js";
import {topDeal} from "./Data/topDeal.js";

let input_search = document.getElementById("search_input");
let form_search = document.getElementById("search_form");
let recent_SearchEl = document.querySelector(".recent_Search");

let recentArray = ["mobile", "phone"];

form_search.addEventListener("submit", (e) => {
    e.preventDefault();
    recentArray.unshift(input_search.value);
    console.log(recentArray);
    renderRecent();
});



function renderRecent() {
    let recent_Search_html = ''
    recentArray.forEach(el => {
        recent_Search_html += ` <div class="recent_list">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <p>${el}</p>
                    </div>`
    })
    recent_SearchEl.innerHTML = recent_Search_html;
}
renderRecent();

/*****************feature product js****************/

let featureProduct_listE1 = document.querySelector('.featureProduct_list');
let featureProductListHTML = '';

//console.log(featureProductNav);

featureProductNav.forEach(el => {
    featureProductListHTML += `
        <div class="featureProduct_item">
            <a href="${el.link}">
                <div class="featureProduct_image">
                    <img src="${el.img}"/>
                </div>
                <p class="featureProduct_name">
                    ${el.name}

                ${ el.subNavigation ? `<i class="fa-solid fa-angle-down featureProduct_icon_more"></i>` :  ""}
                </p>
            </a>
        </div>`
});

featureProduct_listE1.innerHTML = featureProductListHTML

// console.log(featureProductListHTML);

/************************image slider**************************/
let imageSliderListEl = document.querySelector(".imageSliderList");
let imageSliderListHTML = ''

// console.log(imageSlider);
imageSlider.forEach(el => {
    imageSliderListHTML += `
    <div class="imageSliderItem">
        <a href="${el.link}">
            <img src="${el.img}"/>
        </a>    
    </div>`
})
imageSliderListEl.innerHTML = imageSliderListHTML

let preve_imageBtnEl = document.getElementById("preve_imageBtn")
let next_imageBtn = document.getElementById("next_imageBtn")
let start = 0;
let end = -400;

preve_imageBtnEl.addEventListener("click", handlePreveImage)
next_imageBtn.addEventListener("click", handleNextImage)
function handlePreveImage(){
    let imageallList = document.querySelectorAll(".imageSliderItem")
    console.log(imageallList);
    if(start < 0)

    start+=100;

    imageallList.forEach(el => {
        el.style.transform = `translateX(${start}%)`
    })
}
function handleNextImage(){
    let imageallList = document.querySelectorAll(".imageSliderItem")
    console.log(imageallList);
    if(start > end)

    start-=100;

    imageallList.forEach(el => {
        el.style.transform = `translateX(${start}%)`
    })

    // document.querySelectorAll(".imageSliderItem").style.transform = `translateX(${start}%)`
}

function  renderImageSlider(){
    if(start > end){
        handleNextImage()
    }
    else{
        start = 100; 
    }
}
setInterval(renderImageSlider,4000)

/********************************bestOfElectronic_product_item******************************/
let bestOfElectronic_product_itemE1 = document.querySelector(".bestOfElectronic_product_item")
let bestOfElectronicProduct_HTML = ""

electronicProductData.forEach(el =>{
    bestOfElectronicProduct_HTML += `
    <div class="bestOfElectronic_items">
                        <div class="bestOfElectronic_image_product">
                            <img
                                src="${el.img}" />
                        </div>
                        <div class="bestOfElectronicMoreOption">
                            <p class="bestOfElectronicProduct_name">${el.ProductName}</p>
                            <p class="bestOfElectronic_discount">${el.discount}</p>
                            <p class="bestOfElectronic_brand">${el.brand}</p>
                        </div>

                    </div>
    `
})

bestOfElectronic_product_itemE1.innerHTML = bestOfElectronicProduct_HTML

let bestOfTopDeal_product_itemE1 = document.querySelector(".bestOfTopDeal_product_item")
let bestOfTopDeal_HTML = ""

topDeal.forEach(el =>{
    bestOfTopDeal_HTML += `
     <div class="bestOfTopDeal_items">
                        <div class="bestOfTopDeal_image_product">
                            <img
                                src="${el.img}" />
                        </div>
                        <div class="bestOfTopDealMoreOption">
                            <p class="bestOfTopDealProduct_name">${el.ProductName}</p>
                            <p class="bestOfTopDeal_discount">${el.discount}</p>
                        </div>

                    </div>
    `
})
bestOfTopDeal_product_itemE1.innerHTML = bestOfTopDeal_HTML
