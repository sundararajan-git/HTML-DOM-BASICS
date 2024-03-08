
document.addEventListener('DOMContentLoaded',()=>{
    alert("domcontent loaded")}
)

window.addEventListener('load',()=>{
    console.log('load event');
})

window.onunload = function () {
    alert('You are about to be unloaded.')
}

window.onbeforeunload = function () {
    alert('You are about to be unloaded before.')
}
