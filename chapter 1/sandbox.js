// alert('hello, world');

/* ----- how to load texts to console ---- */
// console.log(1);
// console.log(2);

/* ------ VARIABLES ------ */
// let age = 25;
// let year = 2023;
// console.log(age, year);

/* to overwrite variables */
// age = 30;
// console.log(age);

/* for constant variables */
// const points = 100;
// console.log(points);

/* older keyword for variables */
// var score = 10;
// console.log(score);


/* ------ STRINGS ------ */
// console.log('hello, world');

// let email = 'ebenezerfalade@gmail.com';
// console.log(email)

/* string concatenation */
// let firstName = 'Ebenezer'; 
// let lastName = 'Falade';
// let fullName = firstName + ' ' + lastName
// console.log(fullName);

/* ---string properties---*/
/* getting characters */
// console.log(fullName[0]);

/* string length */
// console.log(fullName.length);

/* string methods */
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);
/* ------*common string methods*------ */
// let read = email.lastIndexOf('e');
// let read = email.slice(0,8);
// let read = email.substr(0,10);
// let read = email.replace('e','z');

// console.log(read);


/* ------*USE OF NUMBERS*------ */
// let radius = 10;
// const pi = 3.14;
// maths operators +, -, *, **, /, %
// order of operation - B I D M A S 
// console.log(10/2);
// let result = 10 % 3;  /* (the remainder after 10/3) */
// let result = pi * radius ** 2; /* (area of circle)*/
// let result = 5*(10-3)**2;

// console.log(result);

/* short hand notations */
// let likes = 10;
// likes = likes + 1;
// likes ++;
// likes+=20;
// likes-=5
// likes*=2
// likes/=2

// console.log(likes);

/* srting and number addition */
// let result = ' i got ' + likes + ' likes ';

/* template string */
// const title = 'the best reads of 2023';
// const author = 'fejozzz';
// const likes = 500;

/* concatenation way */
// let result = 'the blog called '+ title + ' by ' + author + ' has ' + likes + ' likes.';
// console.log(result);

/* template string way */
// let result = `the blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

/* ------ CREATING HTML TEMPLATES IN CONSOLE ------ */
// let html = `
//   <h2>${title}</h2>
//   <p>By ${author}</p>
//   <span>this blog has ${likes} likes</span>
// `; 
//  console.log(html); 

/* ------ OBJECT ARRAY SYNTAX-----*/
// let file = [ 'tom', 'pat', 'shawn'];

/* to ovverwrite string in array */
// file[1] = 'new pat';
// console.log(file[1]);

// let ages = [ 10, 20, 30, 40 ];
// console.log(ages[2]);

/*  length of array */
// console.log(file.length);

/*  array methods  */
// let result = file.join(',');
// let result = file.indexOf('shawn');
// let result = file.concat(['femi', 'tayo']);
/* push and pop meth */
// let result = file.push('bayo');
// result = file.pop();

// console.log(result);

/* ------ NULL & UNDEFINED ------ */
// let age;

// console.log(age, age + 3, `the age is ${age}`);

/*------ BOOLEAN TRUE/FALSE ------*/
/* booleans and comparisons*/
// console.log(true, false, 'true', 'false');

/* methods can return booleans */
// let email = 'ebenezerfalade@ymail.com';
// let result = email.includes('@');

// let names = [ 'mark', 'tim', 'john'];
// let result = names.includes('tope');
// console.log(result);

/* comparison operators */
// let age = 25;
// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 30);
// console.log(age < 30);
// console.log(age >= 30);
// console.log(age <= 30);

// let name = 'fejozzz'
// console.log(name == 'fejozzz');
// console.log(name == 'Fejozzz');
// console.log(name > 'Fejozzz');
// console.log(name > 'eben');

/* LOOSE comaprison(different types can be equal)*/
// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

/* STRICT comparison(different types cannot be equal)*/
// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

/* ------ TYPE CONVERSION ------*/
// let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = String(100);
// let result = Boolean(100);
// console.log(result, typeof result);


/*   CHAPTER 3   */
/* ------ LOOPS ------*/
/* --FOR LOOPS--*/
/* looping numbers */
// for(let i =0; i < 5; i++){
//     console.log('in loop:', i);
// }
//     console.log('loop finished');

/* looping arrays */
// const names = [ 'bola', 'tayo', 'musa'];
// for (let i=0; i < names.length; i++){
//     // console.log(names[i]);
//     let html = `<div> ${names[i]}</div>;`
//     console.log(html);
// }

/*--WHILE LOOPS--*/
/* for numbets */
// let i = 0;
// while (i < 5){
//     console.log('in loop', i);
//     i++;
// }

/* looping arrays */
// const names = ['bola', 'tayo', 'musa'];
// let i = 0;
// while (i<names.length){
//     console.log(names[i]);
//     i++;
// }

/*--DO & WHILE LOOPS--*/
// let i = 3;
// do {
//     console.log('the val of i is', i);
//     i++;
// }
// while(i<5);

/* ----- IF & ELSE statements ----- */
// const age = 20;
// if(age>20){
//     console.log('you are over 20 years old');
// }

// const names = ['bola','john', 'bull'];
// if(names.length>2){
//     console.log("too many names");
// }

// const password = 'joyjoyjoyjoy';
// if (password.length>=12){
//     console.log('mighty strong pass');
// } else if(password.length>=6){
//     console.log('password is long enough!');
// } else {
//     console.log('password is not long enough');
// }

/* AND (&&) - OR (||)  */
// const password = '@';
// if (password.length>=12 && password.includes('@')){
//     console.log('mighty strong password');
// } else if(password.length>=6 || password.includes('@') && password.length >= 5 ){
//     console.log('password is strong enough!');
// } else {
//     console.log('password is not strong enough');
// }

/*- LOGICAL NOT(!) */
// let user = true;
// if(!user){
//     console.log('you are logged in');
// }

/* break and continue */
// const scores = [50, 25, 0, 100, 30, 20, 10];
// for( let i = 0; i<scores.length; i++){

//     if(scores[i] === 0){
//         console.log('youre a dumb ass');
//         continue
//     }

//     console.log('your score:', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats you got top score');
//         break;
//     }
// }


/*----- SWITCH STATEMENTS -----*/
// const grade = 'a';

/* using switch */
// switch(grade){
//     case 'A':
//         console.log('got an A!');
//         break;
//     case 'B':
//         console.log('got an B!');
//         break;
//     case 'C':
//         console.log('got an C!');
//         break;
//     case 'D':
//         console.log('got an D!');
//         break;
//     case 'E':
//         console.log('got an E!');
//         break;
//     default:
//         console.log('failed like a wuz')
// }



/* using IF statements */
// if(grade = 'A'){
//     console.log('good bitch ass niqqa')

// }else if(grade = 'B'){
    
// }else if(grade = 'C'){

// }else if(grade = 'D'){

// }else if(grade = 'E'){

// }else{

// }


/* ----- VARIABLE AND BLOCK SCOPE ---- */
// let age = 30;

// if(true){
//     let age = 20
//     let name = 'carl';
//     console.log('code block value:', age, name);
// }

// console.log('outside code block:', age, name);



/*----- FUNCTIONS -----*/
/* function declaration */
// function goat(){
//     console.log('hello world');
// }
// goat();


/* function expression */
// const speak = function(){
//     console.log('bye now!')
// };
// speak();


/* argument and parameters */
// const speak = function(name = 'pain', time = 'night'){
//     console.log(`good ${time} ${name} !`)
// };

// speak();
// speak('nagato');
// speak('nagato', 'morning ');


/* returning values */
// const calcArea = function(radius){
//     let area = 3.14 * radius **2 ;
//     return area ;
//     /* return 3.14 * radius ** 2 */
// };
 
// const answer = calcArea(2);
// console.log(answer); 


/* regular function */
// const calcArea = function(radius){
//     return 3.14 * radius ** 2;
// }

/* arrow function */
// const calcArea = (radius)=> {
//     return 3.14 * radius ** 2;
// }
// easily simplified to :
// const calcArea = radius => 3.14 * radius ** 2;

// const area = calcArea(10);
// console.log( 'the area is:', area);

/* further practice arrow functions */
// const greet = function(){
//     return 'hello world!';
// };
// to arrow function
// const greet = () => 'hello world!';

// const result = greet()
// console.log(result); 

/* functions & methods */
// const name = 'nagato'
// /* function */
// const greet = () => 'hello pal';
// console.log(greet());

// /* methods */
// console.log(name.toUpperCase());


/*---- callbacks & for each ----*/
// let people = ['mario','luigi','ryu','kyle', 'chun']

// people.forEach(function(person){
//     console.log(person);
//to arrow function
// people.forEach((person, index) =>{
//     console.log(index, person);
// });

/* neater way of doing this*/
// const logPerson = (person, index) =>{
//     console.log(`${index}- hello ${person}`);
// } 
// people.forEach(logPerson)


/* callback; get reference to HTML ul */
// const ul = document.querySelector('.people');

// const people = ['mario','luigi','ryu','kyle', 'chun'];

// let html = ``;

// people.forEach(function(person){
//     // create an html template for each person
//     html += `<li style="color: purple">${person}</li>`;
// })

// console.log(html);
// ul.innerHTML = html