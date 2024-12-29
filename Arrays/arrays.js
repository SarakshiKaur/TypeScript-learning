"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// two ways we can define arrays
var arr = [];
var arr2 = [];
// 2D arrays
var arr3 = [];
var arr4 = [];
arr.push("hello");
arr2.push(20);
arr3.push(["hello", "sup"]);
arr4.push([2, 3, 4]);
// syntax in case using arrays in functions
var array = function (abc) {
    return [1, 3];
};
console.log("".concat(arr[0], " world ").concat(arr2[0]));
console.log("".concat(arr3, "\n").concat(arr4));
