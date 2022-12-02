let matrix = [
    [2,3],
    [5,8]
];

let matrix1 = [
    [8,9,],
    [1,9,]
];

let matrix2 = [
    [],
    [],
    
];

let mat1 = [
    [6, 9], 
    [24, 4]
];
let mat2 = [
    [87, 3], 
    [4, 55]
];
let mat3 = [
    [],
    []
];

let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const readlineSync = require('readline-sync');
let string = readlineSync.prompt();

const addition = require("./utils").addition
const sum = require("./utils").sum
const sumOfEachRow = require("./utils").sumOfEachRow
const wordCount = require("./utils").countWords
const trim = require("./utils").trim

console.log(addition(matrix, matrix1, matrix2));
console.log(sum(mat1,mat2,mat3));
console.log(sumOfEachRow(mat));
console.log(wordCount(` Hello World. We Love Programming and Computer Science`));
console.log(trim(string));
