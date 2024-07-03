

// practice DOM
const form101 = document.querySelector("#my-form");
const  name =document.querySelector("#name");
const email =  document.querySelector("email");

const msg  = document.querySelector(".msg");
const useList =document.querySelector()



//single selector  


const form =document.getElementById('my-form');

const formed =document.querySelector('.container');
console.log(formed);

const selectingAll=document.querySelectorAll(".item");
console.log(selectingAll);

console.log("Element by class name ",document.getElementsByClassName("item"));
console.log("Element by tag Name",document.getElementsByTagName("li"));


const ul =document.querySelector('.items')
ul.lastElementChild.remove();
ul.firstElementChild.textContent="haider"

ul.children[3].innerHTML="service Area of Some Country"

ul.lastElementChild.innerHTML="<h4>Hello To the World</h4>"

const btn=document.querySelector(".btn");
btn.style.background="red"

btn.addEventListener('mouseover',(e)=>{
  e.preventDefault()
  console.log("button is  clicked ");
   console.log(e.target);//givethe  element  on which  event is  on

   document.querySelector("#my-form").style.background="#ffff"

   document.querySelector('body').classList.add('bg-dark');
   document.querySelector('body').style.color="#FF0000";
   document.querySelector(".items").lastElementChild.innerHTML="<strong>Cola Next</strong>"
})



