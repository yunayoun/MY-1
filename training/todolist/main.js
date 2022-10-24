'use strict'

const todo = document.querySelector('#todo-list');
const button =document.querySelector('.submit');
const todoInput =document.querySelector('#todo-input');
const msg =document.querySelector('#msg');

button.addEventListener('click',onsubmit)

function onsubmit(e){
e.preventDefault();//자동새로고침멈춤

if(todoInput.value === ''){//안내메세지
msg.style.display='block'
setTimeout(()=>msg.style.display='none',2000)
return;
}

const li = document.createElement('li');
li.appendChild(document.createTextNode(todoInput.value));
li.classList.add('item');//css기능을 넣으려고
todo.appendChild(li);
todoInput.value='';//입력후 다시 빈칸으로됨
}

