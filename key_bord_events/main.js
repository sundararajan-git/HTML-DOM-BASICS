
// ----------- key board Events ------------

// --------------------- keydown - when the user presses a key on the keyboard.

// -- get element ------

const i = document.getElementById('i');

i.addEventListener('keydown',(e)=>{
    const p1 = document.createElement('p');
    p1.textContent = "You pressed a key inside the input field";
    i.after(p1);
})


// --------- key press - when the user presses a key on the keyboard. --

const i1 = document.getElementById('i1');

i1.addEventListener('keypress',(e)=>{
    const p1 = document.createElement('p');
    p1.textContent = "You pressed a key inside the input field";
    i1.after(p1);
})


// ---------- key up - when the user releases a key on the keyboard.--

const i2 = document.getElementById('i2');

i2.addEventListener('keyup',(e)=>{
    const p1 = document.createElement('p');
    p1.textContent = "You pressed a key inside the input field";
    i2.after(p1);
})

// --------- customize key button ------- 

const input = document.getElementById('input');
const btn = document.getElementById('btn1');

let fun = ()=>{
    const p = document.createElement("p");
    p.textContent = input.value;
    btn.after(p);
    input.value ="";
}

const enter = input.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        fun();
    }
})

const button = btn.addEventListener("click",()=>{
    fun();
})
