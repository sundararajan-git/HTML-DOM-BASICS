
// Listen for Events using `AddEventListeners`
// window.addEventListener()
// document.addEventListener()
// element.addEventListeners()


//-------------- adding --------------- 
// ------------------- get elements --------------

const btn = document.getElementById('btn');

let colorChange = ()=>{
    const p = document.createElement('p');
    p.textContent = "Hello ! World";
    btn.after(p)
}
btn.addEventListener('click',colorChange)


// --------------------- removing same event ------------------
// after 10sec

setTimeout(()=>
{
    btn.removeEventListener('click',colorChange)
},5000)

