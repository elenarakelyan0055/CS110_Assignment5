function addition(matrix, matrix1, matrix2) {

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length;j++){
            matrix2[i][j] = 0;
            for(z = 0; z <matrix.length;z++){
                matrix2[i][j] += matrix[i][z]*matrix1[z][j]; 
            }
        }
    }
    return matrix2;
}



function sum(mat1,mat2,mat3){
    for (let i = 0; i < mat1.length; i++) {
        for (let j = 0; j < mat1[i].length; j++) {
        mat3[i][j] = mat1[i][j] + mat2[i][j];
         }
    }
    return mat3;
}



function sumOfEachRow(mat){
    let array = [];
    for(let i=0; i < mat.length; i++){
        let sum =0;
        for (let j = 0; j < mat[i].length; j++) {
            sum += mat[i][j];
            }
        array.push(sum);
    }
        return array;
}


 function countWords(string) {
    const arr = string.split(' ');
    return arr.filter(word => word !== '').length;
 }



 function trim(string) {
    let done = false;
    let result = "";
     
     for (let index = 0; index < string.length; index++) {
      if (string[index] !== " ") {
        done = true;
       }
       if (done) result += string[index];
     }
     
     return result;
   }


   module.exports = {
    addition :addition,
    sum :sum,
    sumOfEachRow :sumOfEachRow,
    countWords :countWords,
    trim :trim
};