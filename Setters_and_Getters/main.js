

/* 
These are setter/getter
- innerHTML
- innerText // Works with Elements
- textContent // Works with Nodes  , Elememts
*/

// --------------- h1 tag - getter on console log ---
// see console log

let h  =  document.getElementById('h1');

// innerText
console.log(h.innerText);

// innerHTMl
console.log(h.innerHTML);

// textcontent
console.log(h1.textContent);

// ----------------------- setter - h2 tag--------

let h2 = document.querySelectorAll(".h2");

// innerText
h2[0].innerText = "<h2> This is innerText </h2>";

// innerHTMl
h2[1].innerHTML = "<h2> This is innerHtml </h2>";

// textContent 
h2[2].textContent ="<h2> This is TextContent </h2>";
