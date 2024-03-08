
// --------------------- get attributes -------------

const label = document.getElementById('l');
const input = document.getElementById('name');

console.log(label.id);

console.log(input.id);
console.log(input.type);
console.log(input.placeholder);
console.log(input.name);

// ------------ or

let one  = input.getAttribute('name')
console.log(one);


// -------------------- set attributes ----------------

const div = document.getElementById('set');

label1 = div.firstElementChild;


label1.id = "lab";
label1.for = 'age';
input1 = div.lastElementChild;

input1.id = 'age';
input1.name = 'name';
input1.placeholder = 'Your Age';
input1.type = 'text';

console.log(div.firstElementChild);

console.log(div.lastElementChild);

// ------------------ or -------------

div.setAttribute("class", "two"); 

console.log(div); 

// ---------------- check attribute ---------

console.log(div.hasAttribute('id'));

// ------------------ remove attribute -----------

div.removeAttribute('class');

console.log(div);