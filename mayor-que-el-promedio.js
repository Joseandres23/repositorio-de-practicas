const numeros = prompt ("¿Cuántos datos ingresará?");
if (numeros < 0){
    console.log("su número no es valido, coloque números validos");

}
const numeros1 =[];

for (let i= 1; i <= numeros; i++) {

    const numero = prompt ("ingresa el numero" + i + ":");

    numeros1.push(numero);
}
const suma = numeros1.reduce((total, numero)=> total + numero,0);
const promedio = suma / numeros;
 

let cantidadMayores = 0;
for (let numero of numeros1) {
if (numero > promedio){
    cantidadMayores++;
}
}
alert("hay" + cantidadMayores + "datos mayores que el promedio"); 