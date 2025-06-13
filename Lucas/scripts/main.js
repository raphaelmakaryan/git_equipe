/*
let myHeading = document.querySelector("h1");
myHeading.textContent = "Bonjour, monde !";

let myVariable = "Bob";

document.querySelector("html").addEventListener("click", function () {
    alert("Aïe, arrêtez de cliquer !!");
  });
*/

let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {

  let mySrc = myImage.getAttribute("src");

  if (mySrc === "images/tatou.jpg") {
    myImage.setAttribute("src", "images/ragondin.webp");
  } else {
    myImage.setAttribute("src", "images/tatou.jpg");
  }

});

/*

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "Mozilla est cool, " + myName;
}
  
if (!localStorage.getItem("nom")) 
{
    setUserName();
} 
else 
{
    let storedName = localStorage.getItem("nom");
    myHeading.textContent = "Mozilla est cool, " + storedName;
}

myButton.addEventListener("click", function () {
    setUserName();
});

*/