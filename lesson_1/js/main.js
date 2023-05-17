'use strict'
//task_1
 /*
 let x = 20;
 let y = 58;
 let z = 42;
 let result = x+y+z;

 console.log(result);
 */


//task_2
/*
let secondPerMinute = 60;
let minutesPerHour = 60;
let hoursPerDay = 24;
let daysPerYear = 365;
let myAge = 26;
let myAgeInSeconds = myAge * daysPerYear * hoursPerDay * minutesPerHour * secondPerMinute;
console.log(myAgeInSeconds);
*/

//task_3.1
/*
let count = 42;
let userName = '42';

count = Number.toString(count);
userName = parseInt(userName);
*/

//task_3.2
/*
let count = 42;
let userName = '42';

count = count.toString();
userName = Number(userName);
*/

//task_4
/*
let a = 1
let b = 2
let c = "белых медведей"

console.log(`${a}${b} ${c}`);
*/

//task_5
/*
let firstWord = "доступ";
let secondWord = "морпех";
let thirdWord = "наледь";
let fourthWord = "попрек";
let fifthWord = "рубило";

let lengthWords = firstWord.length + secondWord.length + thirdWord.length + fourthWord.length + fifthWord.length;
console.log(lengthWords);
*/

//task_6
/*
let firstVariable = 43;
console.log(`Variable: firstVariable have type: ${typeof firstVariable}`);

let secondVariable = 'Hello World!';
console.log(`Variable: secondVariable have type: ${typeof secondVariable}`);

let thirdVariable = true;
console.log(`Variable: thirdVariable have type: ${typeof thirdVariable}`);
*/

//task_7
/*
let data = [];
data.push(prompt("Enter your name"));
data.push(prompt("Enter your age"));
console.log(`Your name: ${data[0]}. Your age: ${data[1]}.`);
*/

//task_8.1
/*
let a = 4;
let b = 3;

console.log(a);
console.log(b);

a = `${a}${b}`;
b = parseInt(a[0]);
a = parseInt(a[1]);

console.log(a);
console.log(b);
*/

//task_8.2
/*
let a = 4
let b = 3

console.log(a);
console.log(b);

a = parseInt(a) + parseInt(b);
b = a - b;
a = a - b;

console.log(a);
console.log(b);
*/

//task_9

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = `${codeWord1[1]}${codeWord2[1]}${codeWord3[1]}${codeWord4[1]}${codeWord5[1]}`;
console.log(cipher);