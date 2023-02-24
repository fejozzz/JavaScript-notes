/* ----OBJECT LITERALS--- */ 
// let user = {
//     name : 'fejozzz',
//     age : 30,
//     email : 'fejoz@dmail.com',
//     location : 'paris',
//     blogs : ['how thw world works','get rich or die trying']
    
// };

// console.log(user);
// console.log(user.name);
// console.log(user['name']);

// /* to make changes */
// user.age = 35;
// user['age'] = 25;
// console.log(user.age);

// console.log(typeof user);




/* futher examples */
// let user = {
  
//     blogs : ['how the world works','get rich or die trying'],
    
//     login: function(){
//         console.log('user logged in!')
//     },
//     logout: function(){
//         console.log('user logged out!')
//     },
//     logBlogs: function(){
//         console.log(this.blogs);

//         console.log('user has written the following blogs:');
//         this.blogs.forEach(blog =>{
//             console.log(blog);
//         });
//     }
// };

// user.login();
// user.logout();
// user.logBlogs();




/* objects in arrays */
/* part 1 */
// const blogs = [
//     {title:'why i hate cheese', likes:50},
//     {title:'how to jack a plane', likes:100}
    
// ];
// console.log(blogs);

/* part 2*/
// let user = {
  
//     blogs : [    
//         {title:'why i hate cheese', likes:50},
//         {title:'how to jack a plane', likes:100}
//     ],
    
//     logBlogs: function(){

//         console.log('user has written the following blogs:');
//         this.blogs.forEach(blog =>{
//             console.log(blog.title, blog.likes);
//         });
        
//     }
// };

// user.logBlogs();






/* -----|| MATHS OBJECT ||----- */
/* constants */
// console.log(Math);

// console.log(Math.PI);
// console.log(Math.E);

// /* methods */
// const area = 7.3;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// /* to GENERATE RANDOM numbers  */
// const random = Math.random();

// console.log(random);
// console.log(Math.round(random));
// console.log(Math.round(random * 100));


/* ----|| primitive & reference values ||----*/
/* primitive values*/
// let scoreOne = 50;
// let scoreTwo =  scoreOne

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); 

// scoreOne = 100
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);  // score two remains 50, its stored in stack

/* reference values*/
// const userOne = {name: 'carl', age: 20};
// const userTwo = userOne;

// console.log(userOne,userTwo);

// userOne.age = 50