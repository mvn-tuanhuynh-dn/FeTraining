//What are the differences between a variable that is: `null`, `undefined`?
//undefined
var testVar;
console.log(typeof testVar);

//null
var testVar = null;
console.log(typeof testVar);


var array = [1, 2, 3, 4];
//map
var map = array.map(function(e) {
    return e + 5;
});
console.log(map);

//filter
var filter = array.filter(function(e) {
    return e % 2;
});
console.log(filter);

//find
var find = array.find(function(e) {
    return e = 1;
});
console.log(find);

//some
var some = array.some(function(e) {
    return e % 3;
});
console.log(some);

//reduce
var reduce = array.reduce(function(a, b) {
    return a + b;
});
console.log(reduce);


//Give an example for add a new element to an array[] (at the end)
var pushLastArry = array.push(25);
console.log(pushLastArry);

//Give an example for add a new element to an array[] (at the beginning)
var pushFirstArray = array.unshift(1);
console.log(pushFirstArray);

//Give an example for removing an element in array[]
var removeLastaArray = array.pop();
console.log(removeLastaArray);

var removeFirstArray = array.shift();
console.log(removeFirstArray);

//1. 
function sumOf(x, y) {
    if (x != y) {
        return (x + y);
    } else {
        return 3 * (x + y);
    }
}
console.log(sumOf(5, 20));
console.log(sumOf(5, 5));

// 2. 
function differNum(num) {
    let result;
    result = Math.abs(num - 19);
    if(num > 19) {
        return result * 3;
    }
    return result;
}
console.log(differNum(12));
console.log(differNum(22));

//3. 
function num(a) {
    var array = [];
    arrnew = null;
    for (var i = 0; i < 10; i++) {
        arrnew = a.replace("*", i);
        if (arrnew % 3 === 0) {
            array.push(arrnew);
        }
    }
    return array;
}
console.log(num('15*6'));

//4. 
function num(a) {
    var array = [];
    arrnew = null;
    for (var i = 0; i < 10; i++) {
        arrnew = a.replace("*", i);
        if (arrnew % 6 === 0) {
            array.push(arrnew);
        }
    }
    return array;
}
console.log(num('1*9')); 