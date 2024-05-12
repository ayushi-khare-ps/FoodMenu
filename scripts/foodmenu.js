"use strict";

window.onload = function () {
    initCategory();
}

let menu = {
    drinks : [
       "Water", "Tea", "Sweet Tea", 
       "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
       "Hamburger w/ Fries", 
       "Grilled Cheese w/ Tater Tots",
       "Grilled Chicken w/ Veggies", 
       "Chicken Fried Steak w/ Mashed Potatoes",
       "Fried Shrimp w/ Coleslaw", 
       "Veggie Plate"
    ],
    desserts: [
       "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
 };
 

 function initCategory(){
    let foodCategory = document.getElementById("category");
    for (let key in menu){
        let theOption = new Option(key, key);
        foodCategory.appendChild(theOption);
    }

    foodCategory.onchange = initItems;
 }

 function initItems(){
    let foodCategory = document.getElementById("category");
    let selectedCategory = foodCategory.value;

    let itemsList = menu[selectedCategory];

    let items = document.getElementById("items");
    while (items.firstChild){
        items.firstChild.remove();
    }

    let itemsListLength = itemsList.length;
    for (let i=0; i<itemsListLength; i++){
        let theOption = new Option(itemsList[i], itemsList[i]);
        items.appendChild(theOption);

    }

 }