type Admin = {
    name: string;
    id: number;
}

type User = {
    username: string;
    id: number;
}

// with union we are saying that new_user can be of user type or of Admin type
// with union we can define a variable to have more then one type
let new_user: Admin | User = { 
    username: 'John',
    id: 1
}

// now made new_user an admin
new_user = {
    name: 'John',
    id: 1
}


let id: string | number = 3;
id = '3'; // this is fine

const func = (id: string | number):string | number => {
    if (typeof id === 'string') { // this is type narrowing 
        return id.toUpperCase(); // we are making sure that id is a string as it could also be number
    }
    // Type narrowing is important in TS as we want to be sure what type are we receiving
    // in order to manipulate it

    // Basically we narrow down to what type our parameter is in order
    // to make sure we are doing the right thing

    return id; // if id is number it is returned normally
}

console.log(func(id));


// Arrays with unions
const arr: (string | number)[] = ["1",3,5,"hello"]; // this is how we define a mixed array
console.log(arr); // this is how we print it


 // this definition means either this will be an array with only numbers
 // or an array with only strings
const arr2: string[] | number[] = [];


// this is wrong definition as it's saying value must be string and number simultaneously 
// which is impossible and hence results in an array with type never
const arr3: (string & number)[] = [];



// one more usecase of union
let payment: "Credit" | "Debit" | "Cash"; // we are defining that payment variable can only have
// one of these three values

payment = "Cash"; // correct
payment = "hjbj"; // TS will give error

export {}