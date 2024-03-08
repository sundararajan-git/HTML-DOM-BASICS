
let h1 = document.getElementById('h1')

// -------------- createing big element ------

let span  = document.createElement('span');
span.textContent = " Create Element ";
span.style.color = "blue";

// ------------------ inserting element ----------
//1.append()
//2.prepend()
//3.before()
//4.after()

// ---------------- append() -----------

h1.append(span)  // back side 

// --------------- prepend ------------

h1.prepend(span)  // fornt side

// ------------------- before -----------

h1.before(span);  //  previes element 

// ------------------- after ------

h1.after(span);  // next element     


