const numbers = [1,2,3,4,'f',5,6,7,8,9];

function findOddNumbers(v) {
    if(typeof v === "number"){
        return v % 2 !== 0;
    }
    return false;
}

let newNumbers = numbers.filter(v => findOddNumbers(v));

console.log(newNumbers);


