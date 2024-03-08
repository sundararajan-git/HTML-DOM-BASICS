
// -------------------- get elements ways------------------

// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. Finding Elements using CSS Selector
// 5. querySelector & querySelectorAll (DOM Query Selector)


// ------------------- 1. getElementById()---------------------
// To add text in list
const input = document.getElementById('in_food')
const btn = document.getElementById('btn')
const list = document.getElementById('list')


btn.addEventListener('click',()=>{
    list.innerText = input.value
})

// --------------2.getElementByClassName()-------------------
// To change the background color
const c = document.getElementsByClassName('container');

btn.addEventListener('click',()=>{
    c[0].style.backgroundColor = "aquamarine";
})

// ---------------  3. getElementsByTagName()------------------
// To  button color changing at touch the button

let button = document.getElementsByTagName('button')
btn.addEventListener('mouseover',()=>{
    button[0].style.backgroundColor='red';
})
btn.addEventListener('mouseout',()=>{
    button[0].style.backgroundColor='blue';
})

// ----------------querySelector & querySelectorAll---------------
// To add text in the list

let li = document.querySelector('.li')
let lis = document.querySelectorAll('.lis')

li.innerText = 'Toys';
for(let i of lis){
    i.innerText = "key"
}

