//MDN JAVASCRIPT PRACTICE...

// const fn = new Function('name', 'profession', 
// `
//     console.log('Hello world');
//     const fname = name.split(' ');
//     return fname;
    
// `
// )
// console.log(fn('Shadhin reza', 'Software-Developer'));



// const h1 = document.getElementById('heading');
// const button = document.getElementById('button1');

// function dataModel(){
//     let user = prompt('Enter your name...');
//     localStorage.setItem('name', user);
//     h1.textContent = 'User is Awesome : ' + user;
// }

// if(!(localStorage.getItem('name'))){
//     dataModel();
// }else{
//     let storeName = localStorage.getItem('name');
//     console.log(storeName)
//     h1.textContent = 'Store name is : '+ storeName;
// }

// button.addEventListener('click', () => {
//     dataModel();
// })

// let a = +'1.1' + +'1.1';
// console.log(a);
// console.log(typeof(a));

// var getCode = (function() {
//     var apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...
//     return function() {
//         return apiCode;
//       };
    
//   })();

// console.log(getCode());

// let obj = {name: 'shad', prof: 'web-dev', age: 30};
// for(let haluwa in obj){
//     console.log(obj[haluwa]);
// }

//JAVASCRIPT NOTES BOOK....

//String custom reverse

// function revrse(str){
//     let mainStr = '';
//     for(let i = str.length-1; i>= 0; i--){
//         mainStr += str[i];
//     }
//     return mainStr;
// }
// console.log(revrse('Hello'));



// const range = {
//     start : 0,
//     stop : 30,
//     step : 5
// }
// range[Symbol.iterator] = function(){
//     let current = this.start;
//     const stop = this.stop;
//     const step = this.step;
//     return{
//         next(){ 
//             let result;
//             if(current <= stop){
//                 result = current;
//             }
//             const obj = {
//                 value: result,
//                 done: current > stop
//             };
//             current += step;
//             return obj;  
//         }
//     }
// }
// const rangeIterator = range[Symbol.iterator]();
// console.log(rangeIterator.next());

const heading = document.getElementById('heading');
heading.innerHTML = 'Hi there, how are you?'