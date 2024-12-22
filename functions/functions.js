"use strict";
// Defining and using functions
// syntax 
// function name(parameters: type): <func_return_type>{};
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(4));
// function signUpUser(name: string, email: string, password: string): number{
//     // Simulating a database operation
//     let UID = Math.round(Math.random()*100);
//     return UID;
// }
// Arrow Function
var signUpUser = function (name, email, password) {
    // Simulating a database operation
    var UID = Math.round(Math.random() * 100);
    return UID;
};
var UID = signUpUser("John Doe", "johndoe@example.com", "password123");
console.log(UID);
// NOTE: In functions it is necessary to define type of parameter and function return type
// because else it take any by default which is not good
// never
var abc = function () {
    throw new Error("hehe");
};
// The never type represents the type of values that never occur. For instance, 
// never is the return type for a function expression or an arrow function expression
//  that always throws an exception or one that never returns.
var xyz = function () {
    while (true) {
        console.log("hehe");
    }
};
// Here we can't use never
// we must use void
// WRONG (TS will show error)
// let ans = (): never => {
//     console.log("abc");
// }
abc();
xyz();
