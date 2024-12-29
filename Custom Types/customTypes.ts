type User = {
    readonly id: number, // readonly property means can't be edited later
    name: string,
    email: string
}

type Address = {
    street: string,
    city: string,
    state: string,
    zip?: string // question mark means optional property it is not strictly required
}


// combining more than one type into a single type
type UserData = User & Address;

const obj: UserData = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
}

console.log(obj);

export {}