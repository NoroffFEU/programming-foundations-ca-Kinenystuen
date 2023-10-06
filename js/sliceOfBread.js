// Front page
var buttonBreakfast = document.getElementById("startBreakfast");
var startBreakfastPage = document.getElementById("startBreakfastPage");
var breakfastTable = document.getElementById("breakfastTable");
breakfastTable.style.display = "none";

buttonBreakfast.addEventListener("click", function () {
  breakfastTable.style.display = "block";
  startBreakfastPage.style.display = "none";
});

// Object Slice of brad/sandwich 
var sliceOfBread = {
  type: "food",
  bread: false,
  topping: false,
  butter: false,
  typeOfTopping: ["Cheese", "Ham", "Salami"],
  vegetablesTopping: ["Cucumber", "Paprika", "Tomato"],
  maxBites: 5,
  bites: [
    { biteNumber: 5, name: "Bite five"},
    { biteNumber: 4, name: "Bite four"},
    { biteNumber: 3, name: "Bite three"},
    { biteNumber: 2, name: "Bite two"},
    { biteNumber: 1, name: "Bite one"},
  ],
  addBread: function () {
    if (sliceOfBread.bread === false) {
      sliceOfBread.bread = true;
      eatBreadDesign("0%");
      sliceOfBreadDesign.style.display = "flex";
      currentBread = sliceOfBread.maxBites;
      showMessage("Bread added");
      ulList.innerHTML += "<li>" + "Bread" + "</li>";
    } else {
      showMessage("Bread is there");
    }
  },
  addButter: function () {
    if (sliceOfBread.bread === false) {
      showMessage("Cannot add butter, you need to add bread first.");
      return;
    }
    if (
      sliceOfBread.bread === true &&
      this.butter === false &&
      this.topping === false &&
      currentBread === sliceOfBread.maxBites
    ) {
      this.butter = true;
      butterDesign.style.display = "flex";
      showMessage("Butter added");
      ulList.innerHTML += "<li>" + "Butter" + "</li>";
      return;
    }
    if (sliceOfBread.topping === true) {
      showMessage("Too late, you must add butter before topping");
      return;
    } else {
      if (currentBread !== sliceOfBread.maxBites) {
        showMessage("Too late to add butter now, trash it or eat it up");
      } else {
        showMessage("Butter is already added");
      }
    }
  },
  addTopping: function () {
    if (sliceOfBread.bread === false) {
      showMessage("Cannot add topping, you need to add bread first");
    }
    if (
      sliceOfBread.bread === true &&
      sliceOfBread.topping === false &&
      selectTopping.value === "" &&
      currentBread === sliceOfBread.maxBites
    ) {
      showMessage("You need to pick a topping");
    }
    if (
      sliceOfBread.bread === true &&
      sliceOfBread.topping === false &&
      currentBread === sliceOfBread.maxBites
    ) {
      this.topping = true;
      selectToppingValue = selectTopping.value;
      //console.log(selectToppingValue + " " + "added");
      showMessage(selectToppingValue + " " + "added");
      ulList.innerHTML += "<li>" + selectToppingValue + "</li>";
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
      showMessage("You can only add topping once");
    }
    if (currentBread !== sliceOfBread.maxBites) {
      showMessage("Too late to add topping now, trash it or eat it up");
    }
  },
  eatBread: function () {
    if (currentBread > 0) {
      currentBread -= 1;
      return currentBread;
    }
  },
};

// Buttons and other clicks from html page
var addBreadButton = document.querySelector(".addBreadButton");
var addButterButton = document.querySelector(".addButterButton");
var addToppingButton = document.querySelector(".addToppingButton");
var selectTopping = document.querySelector(".selectTopping");
var ulList = document.querySelector(".ulList");
var eatButton = document.querySelector(".eatButton");
var trashButton = document.querySelector(".trashFoodButton");

// SliceofBread design
var sliceOfBreadDesign = document.getElementById("sliceOfBreadDesign");
var cheeseDesign = document.getElementById("cheese");
var butterDesign = document.getElementById("butterDesign");
var hamDesign = document.getElementById("hamDesign");
var salamiDesign = document.getElementById("salamiDesign");
var eatDesign = document.getElementById("eatDesign");
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
};
addButterButton.onclick = function () {
  sliceOfBread.addButter();
};
addToppingButton.onclick = function () {
  sliceOfBread.addTopping();
};
trashButton.onclick = function () {
  if (sliceOfBread.bread === true) {
    trashButtonRunned = true;
    emptyPlate();
  } else {
    showMessage("Nothing to trash here!");
  }
};

function emptyPlate() {
  sliceOfBread.bread = false;
  sliceOfBread.butter = false;
  sliceOfBread.topping = false;

  var liElements = ulList.querySelectorAll("li");
  liElements.forEach(function (li) {
    ulList.removeChild(li);
  });
  sliceOfBreadDesign.style.display = "none";
  cheeseDesign.style.display = "none";
  butterDesign.style.display = "none";
  hamDesign.style.display = "none";
  salamiDesign.style.display = "none";
  eatDesign.style.display = "flex";

  if (trashButtonRunned) {
    showMessage("Food trashed");
  } else {
    showMessage("Plate is empty");
  }
  trashButtonRunned = false;
}

function eatBreadDesign(width) {
  eatDesign.style.width = width;
}
eatButton.onclick = function () {
  var breadSlice = sliceOfBread.bites[currentBread];
  if (sliceOfBread.bread === true) {
    if (breadSlice === sliceOfBread.bites[5]) {
      sliceOfBread.eatBread();
      eatBreadDesign("20%");
      showMessage(sliceOfBread.bites[currentBread].name);
    } else if (breadSlice === sliceOfBread.bites[4]) {
      sliceOfBread.eatBread();
      eatBreadDesign("40%");
      showMessage(sliceOfBread.bites[currentBread].name);
    } else if (breadSlice === sliceOfBread.bites[3]) {
      sliceOfBread.eatBread();
      eatBreadDesign("60%");
      showMessage(sliceOfBread.bites[currentBread].name);
    } else if (breadSlice === sliceOfBread.bites[2]) {
      sliceOfBread.eatBread();
      eatBreadDesign("80%");
      showMessage(sliceOfBread.bites[currentBread].name);
    }
    if (breadSlice === sliceOfBread.bites[1]) {
      sliceOfBread.eatBread();
      eatBreadDesign("0%");

      emptyPlate();
    }
  }
  else {
    showMessage("Can't eat air")
  }
  return breadSlice;
};

// Adds topping alternative to a select dropdown
for (var i = 0; i < sliceOfBread.typeOfTopping.length; i++) {
  selectTopping.innerHTML +=
    "<option>" + sliceOfBread.typeOfTopping[i] + "</option>";
}
