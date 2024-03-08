
// enter your favorite food 
//  if cliked the button create element and show it

// ------------------ create elements ---------

let btn = document.getElementById('btn')
let con = document.getElementsByClassName("container")

let Favorite_food = prompt("Enter Your Favorite Food")

btn.addEventListener("click",()=>{

    let list = document.createElement('li');
    let listtext = document.createTextNode(Favorite_food);

    let comment = document.createComment("creating li element");

    // assigning classname

    list.className = "Food_list";

    // assigning id

    list.id ="list";

    // append

    list.append(listtext);
    con[0].append(list);

    // log li element
    console.log(list);  
})