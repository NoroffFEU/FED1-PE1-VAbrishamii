
import { createLogo } from "../modules/logo.mjs";

export function createNavbar(containerId){
  const container = document.getElementById(containerId);


const mainContent = document.createElement("div");
mainContent.classList.add("header");

const logo = createLogo("../asset/images/logo.png", "Trip", "logo");
mainContent.appendChild(logo);


// Create the icons
const iconDiv = document.createElement("div");
iconDiv.classList.add("icon");

const iconList = document.createElement("ul");
iconList.classList.add("icon-item");

const addIcon = document.createElement('li');
const addIconContent = document.createElement('i');
addIconContent.classList.add("fa-solid", "fa-plus", "add-icon");
addIcon.appendChild(addIconContent);

const homeIcon = document.createElement("li");
const homeIconContent = document.createElement("i");
homeIconContent.classList.add("fa-solid", "fa-house");
homeIcon.appendChild(homeIconContent);

const userIcon = document.createElement("li");
const userIconContent = document.createElement("i");
userIconContent.classList.add("fa-solid", "fa-user");
userIcon.appendChild(userIconContent);

const searchIcon = document.createElement("li");
const searchIconContent = document.createElement("i");
searchIconContent.classList.add("fa-solid" , "fa-magnifying-glass");
searchIcon.appendChild(searchIconContent);



// Append icons to each other and to the document
addIcon.appendChild(addIconContent);
homeIcon.appendChild(homeIconContent);
userIcon.appendChild(userIconContent);
searchIcon.appendChild(searchIconContent);

iconList.appendChild(addIcon);
iconList.appendChild(homeIcon);
iconList.appendChild(userIcon);
iconList.appendChild(searchIcon);

if (isAdmin()) {
  const editIcon = document.createElement('li');
  const editIconContent = document.createElement('i');
  editIconContent.classList.add("fa-solid", "fa-edit");
  editIcon.appendChild(editIconContent);

  // Append the edit icon to the icon list
  iconList.appendChild(editIcon);

  // Add event listener for the edit icon
  editIcon.addEventListener('click', function() {
    window.location.href = '../post/edit.html';
  });
}



iconDiv.appendChild(iconList);
mainContent.appendChild(iconDiv);
container.appendChild(mainContent);


function LoginPage() {
  window.location.href = "../account/login.html";
}
userIcon.addEventListener("click", LoginPage);

function addPost(){
  window.location.href = "../post/index.html";
}
addIcon.addEventListener('click', addPost);

homeIcon.addEventListener('click', function() {
  window.location.href = '../index.html';
});

function isAdmin() {
  return localStorage.getItem('isAdmin') === 'true';
}



}

