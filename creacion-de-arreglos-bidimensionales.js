function arregloBidimensional(array){
    const matriz = []
        for (const elemento of array) {
matriz.push ([elemento]);
        }
        
    
    return matriz; 
}
const numeros = ([0,1,2,3], [4,5,6,7],[8,9,10,11]);

const matrizDesdeArray= arregloBidimensional(numeros, ); 
console.log(matrizDesdeArray);

const numeros2 = ([0,1,4,9], [16,25,35,49],[64,81,100,121]);
const matrizDesdeArray2= arregloBidimensional(numeros2)
console.log(matrizDesdeArray2)

const numeros3 = ([0,4,8], [1,5,9],[2,6,10],[3,7,11]);
const matrizDesdeArray3= arregloBidimensional(numeros3)
console.log(matrizDesdeArray3)

const numeros4 = ([0,1,2], [4,5,6],[8,9,10]);
const matrizDesdeArray4= arregloBidimensional(numeros4)
console.log(matrizDesdeArray4)

const numeros5 = ([11.5,10.5,9.5], [8.5,10.5,6.5],[2.5,1.5,0.5]);
const matrizDesdeArray5= arregloBidimensional(numeros5)
console.log(matrizDesdeArray5)
const numeros6 = ([100,201,302,403], [104,205,206,407],[108,209,310,411]);
const matrizDesdeArray6= arregloBidimensional(numeros6)
console.log(matrizDesdeArray6)

const numeros7 = ([100,101,102,103], [204,205,206,207],[308,309,310,311]);
const matrizDesdeArray7= arregloBidimensional(numeros7)
console.log(matrizDesdeArray7)


