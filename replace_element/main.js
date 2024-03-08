
// -------------- get elements ----------------

const h1 = document.getElementById('h1');

// ----------- create element ---------------

const p = document.createElement('p');

p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, autem pariatur nesciunt hic vel ipsam ullam saepe blanditiis neque totam?";

// ---------------------- replace element -------------


h1.replaceWith(p);
