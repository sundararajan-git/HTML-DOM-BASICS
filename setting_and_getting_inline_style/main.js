
// --------------- get element ------------
const btn = document.getElementById('btn');


// style="padding: 10px 20px;font-size:15px;background-color:royalblue;border:none;border-radius:5px;color:#FFF;"

// 1. setAttribute
btn.setAttribute('style',"padding: 10px 20px;font-size:15px;background-color:royalblue;border:none;border-radius:5px;color:#FFF;");

// ---------------------- or ----------------

// 2. Direct Property access
console.log(btn.style.cssText);
btn.style.padding = "10px 20px";
btn.style.fontSize = "15px";
btn.style.backgroundColor = "royalblue";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.color = "#FFF";

// ---------------------------- or ------------------------

// 3. cssText
btn.style.cssText =
  "padding: 10px 20px;font-size:15px;background-color:royalblue;border:none;border-radius:5px;color:#FFF;";


  // Getting the style
console.log(btnEl.style.backgroundColor);

// getComputedStyle()
console.log(window.getComputedStyle(btnEl, ":hover"));
