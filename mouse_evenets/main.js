
// --------------------- mouse events --------------------

// --- ------------------click event - The user clicks on an element ---

// ----- get element--

const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    const p = document.createElement('p');
    p.textContent = "This is clik event";
    btn.after(p);
})

// ----------contextmenu event - The user right-clicks on an element ------------

// -------- disable right clik menu  ------

// --------- get elements ---------

const div = document.querySelector('.div');

div.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
})


// -------------- double click event - The user double-clicks on an element ----------

// ------ get elements ---------------------------

const btn1 = document.getElementById('btn1');

btn1.addEventListener('dblclick',()=>{
    const p = document.createElement('p');
    p.textContent = "This is  double clik event";
    btn1.after(p);    
})

// -------------------- mouse down event - 	A mouse button is pressed over an element--

//------------------------- get elements

const btn2 = document.getElementById('btn2');

btn2.addEventListener("mousedown",(e)=>{
    btn2.style.backgroundColor = "red";
})

// ------------------ mouse up - The mouse button is released over an element--

// -------------------- get elements --
const btn3 = document.getElementById('btn3');

btn3.addEventListener("mouseup",(e)=>{
    btn3.style.backgroundColor = "green";
})

// ------------- mouse enter - The pointer is moved onto an element -------
// --------------- mouse leave - The pointer is moved out of an element
//------------------- get elements ----------

const btn4 =  document.getElementById('btn4');
btn4.addEventListener("mouseenter" ,(e)=>{
    btn4.style.padding = "20px";
})

//----------------- mouse leave - 

btn4.addEventListener("mouseleave",(e)=>{
    btn4.style.padding = "10px";
})

// ------ mouse move and mouse out event -------------

// ---- mouse move - The pointer is moving over an element --

// ------ get elements --------

const btn5 = document.getElementById('btn5');
let arr = ["red","blue","green","coral","black","orangered","crimson"]

btn5.addEventListener("mousemove",(e)=>{
   let a = Math.round(Math.random()*arr.length)
   btn5.style.backgroundColor = arr[a]
})

// --------- mouse out -- The mouse pointer moves out of an element 

// ------ reset the color ---------

btn5.addEventListener("mouseout",(e)=>{
    btn5.style.backgroundColor = "";
})

// ------ mouse over - The mouse pointer is moved over an element -----------

// ------ get element ------

const btn6 = document.getElementById("btn6");

btn6.addEventListener("mouseover",(e)=>{
    btn6.style.padding = "20px";
})