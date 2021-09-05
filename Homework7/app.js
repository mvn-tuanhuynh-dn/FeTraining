// Javascript ES6 Exercise
// ​
// Convert the code below from ES5 to ES6 and answer the question
// ​
// 1. Define a variable
//   - ES5
//   ```
//   var MAX_SIZE = 25 * 1024 * 1024;
//   var title = 'Hello World';
//   title = 'Hello ES6'
//   ```
//   - Question: Let and Const – What's the Difference?

// Answer
//   - ES6
const MAX_SIZE = 25 * 1024 * 1024;
let title = 'Hello World';
title = 'Hello ES6';

// let cho phép chúng ta cập nhật giá trị của biến và không cho phép chúng ta tái khái báo lại biến đó.Tuy nhiên, đối với các block khác nhau thì việc tái khai báo biến sẽ không sinh ra lỗi vì đối với từng scope, mỗi biến sẽ được xem xét là 1 biến riêng khác biệt.
// const nếu trường hợp kiểu của biến là primitive (bao gồm string, number, boolean, null, và undefined) thì chúng ta sẽ không thể tái khai báo hay cập nhật giá trị mới để thay thế cho giá trị trước đó của biến.Đối với trường hợp kiểu biến là reference (bao gồm object, array, và function) thì tuy không thể tái khai báo hay cập nhật giá trị của biến nhưng chúng ta vẫn có thể cập nhật giá trị cho thuộc tính của biến đó.

// 2. String Interpolation
//   - ES5
//   ```
//   var user = { name: 'David' };
//   var card = { amount: 7, product: "Bar", unitprice: 42 };
//   var message = "Hello " + user.name + ",\n" +
//   "want to buy " + card.amount + " " + card.product + " for\n" +
//   "a total of " + (card.amount * card.unitprice) + " bucks?";
//   ```
// Answer
//   - ES6
let user = { name: 'David' };
let card = { amount: 7, product: "Bar", unitprice: 42 };
let message = `Hello ${user.name},
                want to buy ${card.amount} ${card.product} for
                a total of ${card.amount * card.unitprice} bucks?`;

// 3. Rest Parameter
// - ES5
// ```
// function foo(x, y) {
//     var a = Array.prototype.slice.call(arguments, 2);
//     return (x + y) * a.length;
// };
// foo(1, 2, 'hello', true, 7) === 9;
// ```
// Answer
//   - ES6
function foo(x, y, ...a) {
	return (x + y) * a.length;
};
foo(1, 2, 'hello', true, 7) === 9;

// 4. Default Parameter Values
//   - ES5
//   ```
//   function sum(x, y, z) {
//     if (y === undefined) {
//       y = 7;
//     }
//     if (z === undefined) {
//       z = 42;
//     }
//     return x + y + z;
//   };
//   ```
// Answer
//   - ES6
function sum(x, y=7, z=42) {
    return x + y + z;
}

// 5. Arrow Functions
//   - ES5
//   ```
//   var evens = [1, 2, 3, 4, 5, 6];
//   var odds  = evens.map(function (v) { return v + 1; });
//   var pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
//   var nums  = evens.map(function (v, i) { return v + i; });
//   var fives = [];
//   nums.forEach(function (v) {
//     if (v % 5 === 0) {
//       fives.push(v);
//     }
//   });
//   ```
// Answer
//   - ES6
let evens = [1, 2, 3, 4, 5, 6];
let odds  = evens.map(v => v + 1);
let pairs = evens.map(v => {even: v; odd: v + 1});
let nums  = evens.map((v, i) => v + i);
let fives =[];
nums.forEach(v => {
    if (v % 5 === 0) {
        fives.push(v);
    }
});

// 6. Classes
//   - ES5
//   ```
//   var Shape = function(id, x, y) {
//     this.id = id;
//     this.move(x, y);
//   };
//   Shape.prototype.move = function(x, y) {
//     this.x = x;
//     this.y = y;
//   };
//   ```
// Answer
//   - ES6
class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
  
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

// 7. Modules
//   - ES5
//   ```
//  lib/utils.js
//   Utils = {};
//   Utils.sum = function(x, y) { return x + y };
//   Utils.pi = 3.141593;
// ​
//  someApp.js
//   var math = Utils;
//   console.log("2π = " + math.sum(math.pi, math.pi));
// ​
//  otherApp.js
//   var sum = Utils.sum, pi = Utils.pi;
//   console.log('2π = ' + sum(pi, pi));
//   ```
// Answer
//   - ES6
//  lib/utils.js
//  lib/math.js
export function sum (x, y) { return x + y };
export var pi = 3.141593;

//  someApp.js
import * as math from "lib/math";
console.log("2π = " + math.sum(math.pi, math.pi));

//  otherApp.js
import { sum, pi } from "lib/math";
console.log("2π = " + sum(pi, pi));

// 8. Promise
//   - ES5
//   ```
//   function showMessAfterTimeout(msg, who, timeout, onDone) {
//     setTimeout(function () {
//       onDone(msg + ' Hi ' + who + '!');
//     }, timeout);
//   }
//   showMessAfterTimeout('', 'Foo', 100, function(msg) {
//     showMessAfterTimeout(msg, 'Bar', 200, function(msg) {
//       console.log('Finish after 300ms:' + msg);
//     });
//   });
//   ```
// Answer
//   - ES6
function showMessAfterTimeout(msg, who, timeout, onDone) {
    setTimeout(() => {
        onDone(`${msg} Hi ${who}!`);
    }, timeout);
}
    showMessAfterTimeout('', 'Foo', 100, msg => {
    showMessAfterTimeout(msg, 'Bar', 200, msg => {
        console.log(`Finish after 300ms:${msg}`);
    });
});

// 9. Loops
//   - Give an example for each method: 
//     + for…of
//     + findIndex()
// Answer
//   - ES6
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}

const array = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array.findIndex(isLargeNumber));
