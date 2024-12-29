const myObj = {
    name: "sara",
    email: "sara@abc.com",
    number: 80 
}

const addUser = ({name,email}: {name: string, email: string}):{name: string, email: string} => {
    return {
        name,
        email
    };
}

// Ts not showing error even though object being passed doesn't follow the format function 
// is asking
console.log(addUser(myObj));


// To avoid these behaviours in TS we use custom types
type MY_OBJ = {
    name: string,
    email: string,
}

const user: MY_OBJ = {
    name: "sara",
    email: "sara@abc.com",
    number: 10 // showing error here that we can't add number property
    // this gives clarity over what can be passed in object or not
};

const addUser2 = (obj: MY_OBJ):MY_OBJ => {
    return obj;
}

console.log(addUser2(user));

// It still doesn't give error here even though myObj doesn't match with
// MY_OBJ type
// This is due to structural type system that TS has
// Structural type system means TS only checks if required fields like
// name and email are present with correct format which MY_OBJ type needs and doesn't care
// about extra data being passed
console.log(addUser2(myObj));

export {}