var buttonBreakfast = document.getElementById("startBreakfast");
var startBreakfastPage = document.getElementById("startBreakfastPage");
var breakfastTable = document.getElementById("breakfastTable");
breakfastTable.style.display = "none";

buttonBreakfast.addEventListener('click', function () {
    breakfastTable.style.display = 'block';
    startBreakfastPage.style.display = 'none';
});




var sliceOfBread = {
    type: "food",
    bread: false,
    topping: false,
    butter: false,
    typeOfTopping: ["Cheese","Ham","Salami"],
    vegetablesTopping: ["Cucumber","Paprika","Tomato"],
    maxBites: 5,
    bites: [1,2,3,4,5],
    addBread: function () {
        if (sliceOfBread.bread === false) {
            sliceOfBread.bread = true;
            eatBreadDesign("0%");
            sliceOfBreadDesign.style.display = "flex";
            currentBread = sliceOfBread.maxBites
            showMessage("Bread added");
            ulList.innerHTML +=
            "<li>" + "Bread" + "</li>";
        }
        else {
            showMessage("Bread is there")
        }
    },
    addButter: function () {
        if (sliceOfBread.bread === false) {
            showMessage("Cannot add butter, you need to add bread first.")
            return;
        }
        if (sliceOfBread.bread === true && this.butter === false && this.topping === false) {
            this.butter = true;
            butterDesign.style.display = "flex";
            showMessage("Butter added");
            ulList.innerHTML +=
            "<li>" + "Butter" + "</li>";
            return;
        }
        if (sliceOfBread.topping === true) {
            showMessage("Too late, you have already added topping")
            return;
        }
        else {
        showMessage("Butter is already added");
        }
},
    addTopping: function () {
        if (sliceOfBread.bread === false) {
            showMessage("Cannot add topping, you need to add bread first");
        }
        if (sliceOfBread.bread === true && sliceOfBread.topping === false && selectTopping.value === "") {
            showMessage("You need to pick a topping");
            return;
        }
        if (sliceOfBread.bread === true && sliceOfBread.topping === false) {
            this.topping = true;
            selectToppingValue = selectTopping.value;
            console.log(selectToppingValue + " " + "added");
            showMessage(selectToppingValue + " " + "added");
            ulList.innerHTML +=
            "<li>" + selectToppingValue + "</li>";
            if (selectTopping.value === "Cheese") {
                cheeseDesign.style.display = "flex";
                return;
            }
            if (selectTopping.value === "Ham") {
                hamDesign.style.display = "flex";
                return;
            }
            if (selectTopping.value === "Salami") {
                salamiDesign.style.display = "flex";
                return;
            }
            return;
        }
        if (sliceOfBread.topping === true) {
            showMessage("You can only add topping once")
        }
                    
    },
    eatBread: function () {
        if (currentBread > 0){
            currentBread -= 1;
            return currentBread; 
        }
    }
}

// Buttons and other clicks from html page
var addBreadButton = document.querySelector(".addBreadButton")
var addButterButton = document.querySelector(".addButterButton");
var addToppingButton = document.querySelector(".addToppingButton")
var selectTopping = document.querySelector(".selectTopping");
var ulList = document.querySelector(".ulList");
var eatButton = document.querySelector(".eatButton")
var trashButton = document.querySelector(".trashFoodButton");

// SliceofBread design 
var sliceOfBreadDesign = document.getElementById("sliceOfBreadDesign");
var cheeseDesign = document.getElementById("cheese");
var butterDesign = document.getElementById("butterDesign");
var hamDesign = document.getElementById("hamDesign");
var salamiDesign = document.getElementById("salamiDesign");
var eatDesign = document.getElementById("eatDesign")
var currentBread = sliceOfBread.maxBites;
var trashButtonRunned = false; //Tells the showMessage if the food is eaten or trashed

sliceOfBreadDesign.style.display = "none";
cheeseDesign.style.display = "none";
butterDesign.style.display = "none";
hamDesign.style.display = "none";
salamiDesign.style.display = "none";

function showMessage(message) {
    var messageElement = document.querySelector(".message");
    messageElement.textContent = message;
}
addBreadButton.onclick = function () {
    sliceOfBread.addBread();
}
addButterButton.onclick = function () {
    sliceOfBread.addButter();
}
addToppingButton.onclick = function () {
    sliceOfBread.addTopping ();
}
trashButton.onclick = function () {
    trashButtonRunned = true;
    emptyPlate();
}

function emptyPlate () {
    sliceOfBread.bread = false;
    sliceOfBread.butter = false;
    sliceOfBread.topping = false;
    
    var liElements = ulList.querySelectorAll("li");
    liElements.forEach(function(li) {
        ulList.removeChild(li);
    })
    sliceOfBreadDesign.style.display = "none";
    cheeseDesign.style.display = "none";
    butterDesign.style.display = "none";
    hamDesign.style.display = "none";
    salamiDesign.style.display = "none";
    eatDesign.style.display = "flex";

    if (trashButtonRunned) {
        showMessage("Food trashed");
    }
    else {
        showMessage("Plate is empty");
    }
    trashButtonRunned = false;
}

function eatBreadDesign(width) {
    eatDesign.style.width = width;
}
eatButton.onclick = function () {
    var breadSlice = sliceOfBread.bites[currentBread];
    if (breadSlice === sliceOfBread.bites[5]) {
        sliceOfBread.eatBread();
        eatBreadDesign("20%");
        //eatDesign.style.width = ("80%");
        console.log("nr.1 is working")
        console.log(breadSlice);
    }
    else if (breadSlice === sliceOfBread.bites[4]) {
        sliceOfBread.eatBread();
        eatBreadDesign("40%");
        //sliceOfBreadDesign.style.width = ("60%");
        console.log("nr.2 is working")
    }
    else if (breadSlice === sliceOfBread.bites[3]) {
        sliceOfBread.eatBread();
        eatBreadDesign("60%");
        console.log("nr.3 is working")
    }
    else if (breadSlice === sliceOfBread.bites[2]) {
        sliceOfBread.eatBread();
        eatBreadDesign("80%");
        console.log("nr.4 is working")
    }
    else if (breadSlice == sliceOfBread.bites[1]) {
        sliceOfBread.eatBread();
        eatBreadDesign("0%");
        //sliceOfBreadDesign.style.display = "none";
        emptyPlate();

        console.log("nr.5 is working")
    }
    console.log(breadSlice);
    console.log(currentBread);
    return breadSlice;
    
}



// Adds topping alternative to a select dropdown
for (var i = 0; i < sliceOfBread.typeOfTopping.length; i++) {
    selectTopping.innerHTML +=
      "<option>" + sliceOfBread.typeOfTopping[i] + "</option>";
}




