"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// defining variables in TS => let <variable_name>: <type> = <variable_value>;
var greetings = "sara"; //string
// number
var age = 2;
age = 12.5; //can be float too
//boolean
var isAdult = true;
console.log("hi ".concat(greetings));
// arrays
var colors = ["red", "green", "blue"];
console.log(colors[1]);
// any
var car = "BMW";
car = 20;
// using any removes type checking from that specific thing
// You can add any type of value in car it won't matter
// but it's not recommended to use any type
// because it defeats the purpose of using typescript
// Also TS is smart enough to recognise the type of variable when you assign values to it
var num = 4.5;
