for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    buttonInnerHTML = this.innerHTML;
    playAudio(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
  document.addEventListener("keydown", function (event) {
    playAudio(event.key);
    buttonAnimation(event.key);
  });
}

function playAudio(button) {
  switch (button) {
    case "w":
      crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      break;
  }
}

function houseKeeper(name, age, yearsOfExperience, clean) {
  this.name = name;
  this.age = age;
  this.yearsOfExperience = yearsOfExperience;
  this.clean = function () {
    console.log("Cleaning in Progress!");
  };
}
function buttonAnimation(currentKey){
  activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");
  setTimeout(() => activeButton.classList.remove("pressed"), 100);
}
