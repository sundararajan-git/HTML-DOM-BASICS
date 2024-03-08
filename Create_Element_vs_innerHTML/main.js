
// ----------------- create Element- ----------
let div  = document.getElementById('div');

function createElement(msg){
 let h1 = document.createElement('h1');
 let text = document.createTextNode(msg);
 
//   injecting texnode in h1
     h1.append(text);
     div.append(h1);   
// it's can  use style property and it's give object .
}
createElement("Welcome to DOM World");


// ------------------ innerHtml-------------------

function createinnerHtml(msg){
    let template =`<h1>${msg}</h1>`;
    div.innerHTML += template;
    // it's can not use style property and it's give string
}
createinnerHtml("Wlecome to anothor World");