"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myObj = {
    name: "sara",
    email: "sara@abc.com",
    number: 80
};
var addUser = function (_a) {
    var name = _a.name, email = _a.email;
    return {
        name: name,
        email: email
    };
};
// Ts not showing error even though object being passed doesn't follow the format function 
// is asking
console.log(addUser(myObj));
var user = {
    name: "sara",
    email: "sara@abc.com",
};
var addUser2 = function (obj) {
    return obj;
};
console.log(addUser2(myObj));
