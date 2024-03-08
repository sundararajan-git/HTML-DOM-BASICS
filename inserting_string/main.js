
// How it will get inserted?
// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->

// --------------------- get p element ----------

const p = document.getElementById('p');

// ---------------- create element ----------------

const h1 = document.createElement('h1');
h1.textContent = " heading 1 ";
h1.style.color = "red" ;

// ---------- beforebegin ----------------

p.insertAdjacentElement('beforebegin' , h1)

p.insertAdjacentHTML('beforebegin',`<span> hello</span>`)

p.insertAdjacentText('beforebegin', ` jack`)

// ------------------------  afterbegin ---------------

p.insertAdjacentElement('afterbegin' , h1) ;

// ---------------------------- befreend --------------

p.insertAdjacentElement('beforeend',h1);
p.insertAdjacentHTML('beforeend' ,`<p>sjjdv dhvjfh weuhfuhvcx </p>`);

// ----------------------- after end ---------------

p.insertAdjacentElement('afterend' , h1);