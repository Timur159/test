'use strict';

var a = 5;
console.log(a);

// - to string 
console.log(typeof(String(null)));

console.log("" + true);
console.log('http://vk.com/catalog' + 5);


// - to number
// console.log(typeof(Number('4')));

// console.log(typeof(5 + +'3'));

// console.log(typeof(parseInt('15px', 10)));

// let ans = +prompt("hello?", '');

// let switcher = null;

// if (switcher) {
//     console.log("Working..");
// }

// switcher = 1;

// if (switcher) {
//     console.log("Working..");
// }


// //--------------
// console.log(typeof(!!5));

// let answer = confirm("Are you here?");

// console.log(answer);

// let answer = !!prompt("Вам есть 18?", "");

// console.log(answer);

// тернарные условия 

let num = 50;

(num == 50) ? console.log('Верно!') : console.log('Не верно!');