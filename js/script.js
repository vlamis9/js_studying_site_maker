"use strict"

//change layout by clicking on radio button
const radiosEvent = function(event){
   const landing = document.querySelector(".layout");
   const eventClassName = event.target.value;
   const classNameStartsWith = "layout--";
   const classToDelete = landing.classList[1];
   if(!classToDelete.endsWith(eventClassName)){
        landing.classList.remove(classToDelete);
        landing.classList.add(classNameStartsWith + eventClassName);
   }   
}
const radios = document.querySelectorAll('.grid-select > input[type="radio"]');
radios.forEach(element => {element.addEventListener("change", radiosEvent)});

//show and hide button content by click on "+" button
const buttonPlusEvent = function(event){
    event.target.nextElementSibling.classList.toggle("hidden");
 }
 const buttonsPlus = document.querySelectorAll('.add-btn');
 buttonsPlus.forEach(element => {element.addEventListener("click", buttonPlusEvent)});

 //add content
 const addButtonsEvent = function(event){
    
    const containerName = event.target.getAttribute("data-container");
    const type = event.target.getAttribute("data-type");
    const templ = document.querySelector(`#${type}-template`);    
    const content = templ.content.cloneNode(true);
    const container = event.path[1].nextElementSibling; //go to DOM path up and set next element
    container.appendChild(content);
    const parent = (event.target.closest(`.${containerName}`));
    parent.classList.remove(`${parent.classList[0]}--empty`);
 }
 const addButtons = document.querySelectorAll(".choose-elem__btn");
 addButtons.forEach(element => {element.addEventListener("click", addButtonsEvent)});

 //delete content 
 const delButtonsEvent = function(event){
    event.target.parentNode.remove();
    const container = event.path[2];
    if(container.children.length === 0) {
        container.parentNode.classList.add(`${container.parentNode.classList[0]}--empty`);
    }
 }

  //edit content
 const editContentEvent = function(event){
    if(event.target.localName !== "img"){
        const text = event.target.innerText;
        const ans = prompt("Вы хотите изменить текст?", text);
        if(ans){
            event.target.innerText = ans;
        } 
    } else {
        const src = event.target.src;
        const ans = prompt("Вы хотите изменить адрес картинки?", src);
        if(ans)
            event.target.innerText = ans;
    }
 }

  const inspectDelButtons = function(event){
    const arrDelBtns = document.querySelectorAll(".delete-btn");
    if(arrDelBtns.length > 0){
        arrDelBtns.forEach(element => {element.addEventListener("click", delButtonsEvent)});
    }

    const arrTextFields = document.querySelectorAll(".template-content");
    if(arrTextFields.length > 0){
        arrTextFields.forEach(element => {element.addEventListener("dblclick", editContentEvent)});
    }
 }
 
 document.addEventListener("click", inspectDelButtons);

 
 
  