let matrix = [
    [2,3,5],
    [5,8,1],
    [3,9,7]
];

let matrix1 = [
    [8,9,8],
    [1,9,5],
    [8,9,3]
];

let matrix2 = [
    [],
    [],
    []
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

const addition = require("./main").addition
const sum = require("./main").sum
const sumOfEachRow = require("./main").sumOfEachRow
const wordCount = require("./main").countWords
const trim = require("./main").trim

console.log(addition(matrix, matrix1, matrix2));
console.log(sum(mat1,mat2,mat3));
console.log(sumOfEachRow(mat));
console.log(wordCount(` Hello World. It's time to Sleep.`));
console.log(trim(string));
