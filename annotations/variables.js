var apples = 5;
var speed = 'fast';
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// build in objects
var now = new Date();
// array
var colors = ['red', 'green', 'blue'];
var myNumbers = [1, 2, 3];
var truths = [true, false, true];
// class
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// object literal
var point = {
    x: 10,
    y: 20
};
// function
var logNumber = function (i) {
    console.log(i);
};
// when to use annotations
// 1. function that returns the 'any' type
var json = '{"x": 10, "y":20}';
var coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}
// 2. when we declare a variable on one line
// and initalizate it later
var words = ['red', 'green', 'blue'];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
// 3. Variable whose type cannot be inferred correctly
var numbers = [-10, -1, 12];
var numberAboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
