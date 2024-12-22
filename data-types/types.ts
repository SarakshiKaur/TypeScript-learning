// defining variables in TS => let <variable_name>: <type> = <variable_value>;
let greetings: string = "sara"; //string

// number
let age: number = 2;
age = 12.5; //can be float too

//boolean
let isAdult: boolean = true; 

console.log(`hi ${greetings}`);

// arrays
let colors: string[] = ["red", "green", "blue"];
console.log(colors[1]);

// any
let car: any = "BMW";
car = 20;
// using any removes type checking from that specific thing
// You can add any type of value in car it won't matter
// but it's not recommended to use any type
// because it defeats the purpose of using typescript


// Also TS is smart enough to recognise the type of variable when you assign values to it
let num = 4.5;
// here TS already detected this as type number we don't have to specify it
// let num: number = 4.5; // this is not needed
// So we must only declare type explicitely to variables when needed
// it's not a good practice to always assign type

export {};