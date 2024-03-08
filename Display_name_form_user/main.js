
// ---------- user1 name  - it's manualy-------------

const person1 = {
    username1 : "Arun Kumar"
}
document.body.children[0].children[1].children[0].innerText = person1.username1;

// ---------- user2 name - form user [prompt method] ---------

const username2 = prompt("Enter your name"); 

document.body.children[0].children[2].children[0].innerText = username2;