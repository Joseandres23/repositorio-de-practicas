function resultadoInterno (lista1, lista2) {
    if (lista1.length !== lista2.length){

    }let resultadoInterno = 0;
    for (let i = 0; i< lista1.length; i++){
        resultadoInterno += lista1[i]*lista2[i];
    }
    return resultadoInterno

}
 const lista1 = [3, 4, 5];
 const lista2 = [3, 2, 5];
 const resultado = resultadoInterno (lista1, lista2);
 console.log (resultado)
 if (resultado ==0){
    console.log ("el resultado es un ortogonal")
 } else{
    console.log ("el resultado no es ortogonal")
 }
