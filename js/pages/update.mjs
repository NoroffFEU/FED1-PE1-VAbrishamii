import { createNavbar } from "./navbar.mjs";
import { createFooter } from "./footer.mjs";
import { updatePost } from "../modules/updatepost.mjs";
import { deletePost } from "../modules/deletepost.mjs";
import { displaySinglePost } from "../modules/singlepost.mjs";



async function initPage(){
    createNavbar('container');

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    console.log('id', postId)
    const name = urlParams.get('name');
    console.log('name', name);
    displaySinglePost(name ,postId);
    
    const editIcon = document.querySelector('.fa-pen-to-square');
    const trashIcon = document.querySelector('.fa-trash-can');
    editIcon.addEventListener('click', handleEdit(name, postId));
    trashIcon.addEventListener('click',handleDelete(name, postId));

    createFooter(); 
}

function handleEdit(name,postId){
    updatePost(name, postId);
}
function handleDelete(name, postId){
    deletePost(name, postId);
}

initPage();