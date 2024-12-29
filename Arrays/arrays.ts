// two ways we can define arrays
const arr: string[] = [];
const arr2: Array<number> = [];

// 2D arrays
const arr3: string[][] = [];
const arr4: Array<Array<number>> = [];

arr.push("hello");
arr2.push(20);
arr3.push(["hello","sup"]);
arr4.push([2,3,4]);

// syntax in case using arrays in functions
const array = (abc: string[]):Array<number> => {
    return [1,3];
}

console.log(`${arr[0]} world ${arr2[0]}`);
console.log(`${arr3}\n${arr4}`);

export {}