/* ------|| DOM INTERACTION WITH HTML ||-----*/
/* to grab single elements */
// const para = document.querySelector('p');
// const para = document.querySelector('.error');
// const para = document.querySelector('div.error');
// const para = document.querySelector('body > h1');

// console.log(para);

/* to grab multiple elements*/
// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');
// paras.forEach(para =>{
//     console.log(para);
// });

// console.log(paras[2]);
// console.log(errors);



// /* get element by ID */
// const title = document.getElementById('page-title');
// console.log(title);

// /* get elements by class name */
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// /* get elements by their tag name */
// 



/* -----|| to change contnets in elements||-----*/
/* single */
// const para = document.querySelector('p');

// console.log(para.innerText)
// para.innerText = 'fejozzz is awesome'; //change text
// para.innerText += 'fejozzz is awesome'; //append to text

/* multiple */
// const paras = document.querySelectorAll('p');

// paras.forEach(para =>{
//     para.innerText += '!!!'
//     console.log(para);
// })

/* the html */
// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2> h2 replaced content</h2>' ;
  

// const people = ['mario', 'luigi','shug'];

// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`;
   
// });



// /*  edit html attribute e.g class, id, href */
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'fejozzz.com');
// link.innerText = 'its fejozz site now';

// const mssg = document.querySelector('div > .error');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class','success');
// mssg.setAttribute('style','color: red');


/* to add styles without overwriting */
const title = document.querySelector('h1');

// title.setAttribute('style','margin: 50px');  // overwrites color

console.log(title.style);         //root property
console.log(title.style.color);

/* to ADD style*/
title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';

/* to DELETE style*/
title.style.margin = '';

