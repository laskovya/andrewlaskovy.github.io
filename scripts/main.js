const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/croc-ididsomething.jpg") {
    myImage.setAttribute("src", "images/croc-tailgator.jpg");
  } else {
    myImage.setAttribute("src", "images/croc-ididsomething.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `I'm ${myName}, I'm Awesome, gotta nine pack.`;
    }
};


if (!localStorage.getItem("name")) {
    setUserName();
    } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `I'm ${storedName}, I'm Awesome, gotta nine pack.`;
};
  
myButton.onclick = () => {
    setUserName();
};
  