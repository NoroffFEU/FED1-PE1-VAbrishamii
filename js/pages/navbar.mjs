import { createLogo } from "../modules/logo.mjs";

export function createNavbar(containerId){
  const container = document.getElementById(containerId);


const mainContent = document.createElement("div");
mainContent.classList.add("header");

const logo = createLogo("../asset/images/logo.png", "Trip", "logo");
mainContent.appendChild(logo);

// Create tabs for Add Post and Edit Post
const menu = document.createElement("div");
menu.classList.add("tab-container");

const addPostTab = document.createElement("div");
addPostTab.classList.add("tab");
addPostTab.textContent = "Add Post";

const editPostTab = document.createElement("div");
editPostTab.classList.add("tab");
editPostTab.textContent = "Edit Post";

menu.appendChild(addPostTab);
menu.appendChild(editPostTab);

mainContent.appendChild(menu);

// Create the icons
const iconDiv = document.createElement("div");
iconDiv.classList.add("icon");

const iconList = document.createElement("ul");
iconList.classList.add("icon-item");

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
homeIcon.appendChild(homeIconContent);
userIcon.appendChild(userIconContent);
searchIcon.appendChild(searchIconContent);


iconList.appendChild(homeIcon);
iconList.appendChild(userIcon);
iconList.appendChild(searchIcon);
iconDiv.appendChild(iconList);

mainContent.appendChild(iconDiv);
container.appendChild(mainContent);


function LoginPage() {
  window.location.href = "../account/login.html";
}

userIcon.addEventListener("click", LoginPage);

function addPost(){
  window.location.href = "./post/index.html";
}
addPostTab.addEventListener('click', addPost);

function editPost(){
  window.location.href = "./post/edit.html";
}
editPostTab.addEventListener('click', editPost);

}

