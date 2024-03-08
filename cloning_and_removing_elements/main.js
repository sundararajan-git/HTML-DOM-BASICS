
// -------------- get elements --------------

const div  = document.getElementById('div')

console.log(div);

// ----------------------- cloning elements ---------------

// cloneNode(false) only clones the top element // if false = only parent element

const duplicateDiv = div.cloneNode();

console.log(duplicateDiv);

// cloneNode(true) clones all elements and subtrees.  // if true = parent and child element

const duplicateDiv1 = div.cloneNode(true);

console.log(duplicateDiv1); 



// ----------------- removing elements -----------------

// ----------------- get element ------------------------
 
const p = document.getElementById("p");
const btn = document.getElementById('btn');

// ------------ remove p element ------------
// if clike remove btn  , remove the p element 

btn.addEventListener('click',()=>{
    p.remove();
})