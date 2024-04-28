const mainContent = document.createElement("div");
mainContent.classList.add("header");

const logo = document.createElement("div");
logo.innerHTML = "<img src='asset/images/logo.png' alt='Trip' class='logo'>"; 
mainContent.appendChild(logo);


const navDiv = document.createElement("nav");
const navbarDiv = document.createElement("div");
navbarDiv.classList.add("navbar");
const ul = document.createElement("ul");
ul.classList.add("menu");
["Home", "About", "Contact Us"].forEach((text) => {
  const li = document.createElement("li");
  li.classList.add("menu-item");
  li.textContent = text;
  ul.appendChild(li);
});
navbarDiv.appendChild(ul);
mainContent.appendChild(navbarDiv);

const iconDiv = document.createElement("div");
iconDiv.classList.add("icon");
const magnifyingGlassIcon = document.createElement("i");
magnifyingGlassIcon.classList.add("fa-solid", "fa-magnifying-glass");
const userIcon = document.createElement("i");
userIcon.classList.add("fa-regular", "fa-user");
iconDiv.appendChild(magnifyingGlassIcon);
iconDiv.appendChild(userIcon);
navDiv.appendChild(iconDiv);

mainContent.appendChild(navDiv);

const container = document.getElementById("container");
container.appendChild(mainContent);
