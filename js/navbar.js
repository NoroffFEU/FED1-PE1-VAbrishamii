const mainContent = document.createElement("div");
mainContent.classList.add("header");

const logo = document.createElement("div");
logo.innerHTML = "<img src='asset/images/logo.png' alt='Trip' class='logo'>"; 
mainContent.appendChild(logo);

// Create the menu
const navDiv = document.createElement("nav");
const navbarDiv = document.createElement("div");
navbarDiv.classList.add("navbar");
const ulMenu = document.createElement("ul");
ulMenu.classList.add("menu");
["Home", "About", "Contact Us"].forEach((text) => {
  const li = document.createElement("li");
  li.classList.add("menu-item");
  li.textContent = text;
  ulMenu.appendChild(li);
});
navbarDiv.appendChild(ulMenu);
navDiv.appendChild(navbarDiv);

// Create the icons
const iconDiv = document.createElement('div');
iconDiv.classList.add('icon');

const iconList = document.createElement('ul');
iconList.classList.add('icon-item');

const magnifyingGlassIcon = document.createElement('li');
const magnifyingGlassIconContent = document.createElement('i');
magnifyingGlassIconContent.classList.add('fa-solid', 'fa-magnifying-glass');
magnifyingGlassIcon.appendChild(magnifyingGlassIconContent);

const userIcon = document.createElement('li');
const userIconContent = document.createElement('i');
userIconContent.classList.add('fa-solid', 'fa-user');
userIcon.appendChild(userIconContent);

const barsIcon = document.createElement('li');
const barsIconContent = document.createElement('i');
barsIconContent.classList.add('fa-solid', 'fa-bars', 'burger');
barsIcon.appendChild(barsIconContent);

// Append icons to each other and to the document
magnifyingGlassIcon.appendChild(magnifyingGlassIconContent);
userIcon.appendChild(userIconContent);
barsIcon.appendChild(barsIconContent);

iconList.appendChild(magnifyingGlassIcon);
iconList.appendChild(userIcon);
iconList.appendChild(barsIcon);
iconDiv.appendChild(iconList);

mainContent.appendChild(navDiv);
mainContent.appendChild(iconDiv);

const container = document.getElementById("container");
container.appendChild(mainContent);
