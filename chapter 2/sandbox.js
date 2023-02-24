/*---- || editing css classes/styles || -----*/
// const content = document.querySelector('p');

// console.log(content.classList);

/* add/remove classes */
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

/*---- ||sweeping through paragraph list to add class|| -----*/
const list = document.querySelectorAll('p');

/* my method */
// list.forEach(para=>{
//     if(para.innerText.includes('success')){
//         para.classList.add('success')
//         console.log('success');
//     }else if(para.innerText.includes('error')){
//         para.classList.add('error')
//         console.log('error');
//     }else{
//         console.log(para);
//     }
// })

/* ninja method */
list.forEach(p=>{
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
});

/* to toggle classes */
const title = document.querySelector('.title');
title.classList.toggle('test');






 