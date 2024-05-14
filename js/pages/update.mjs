import { createNavbar } from "./navbar.mjs";
import { displaySinglePost } from "../modules/singlepost.mjs";
import { createFooter } from "./footer.mjs";
import { updatePost } from "../modules/updatepost.mjs";
import { deletePost } from "../modules/deletepost.mjs";

async function initPage(){
    createNavbar('container');
    displaySinglePost;
    editIcons();
    createFooter;
}

async function editIcons(){
    const editContainer = document.getElementById('edit-container');

        const editDiv = document.createElement('div')
        editDiv.classList = 'edit-post';

        const editIcon = document.createElement('i');
        editIcon.className = "fa-regular fa-pen-to-square";

        const trashIcon = document.createElement('i');
        trashIcon.className = "fa-regular fa-trash-can";

        editIcon.addEventListener('click', () => updatePost('name', 'postId'));
        trashIcon.addEventListener('click', () => deletePost('postname', 'postid'));

        editDiv.appendChild(editIcon);
        editDiv.appendChild(trashIcon);

        editContainer.appendChild(editDiv);
    }

initPage();