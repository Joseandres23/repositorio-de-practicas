function cuadroMagico (matriz){
    if (matriz.length !== matriz [0].length){
        return {consecutiva: false, magico: false};
    }
    const n = matriz.length;
    const buscar = new Array (n*n).fill(false);
    const sumaDeFilas =  new Array (n).fill(0);
    const sumaDeColumnas = new Array (n).fill(0);
     let sumaDeLasDiagonales = 0;

    
    for (let i = 0; i< n; i++){
        for (let j = 0; j < n; j++){
            const valor = matriz [i] [j]
            if (valor < 1 || valor > n * n){
                return {consecutiva: false, magico: false};
            }
            if (buscar[valor - 1]){
                return {consecutiva: false, magico: false}
            }
            buscar[valor - 1] = true;
            sumaDeFilas[j]+= valor;
            sumaDeColumnas[j]+= valor;
            if(i === j){
                sumaDeLasDiagonales += valor
            }
        }

    }
    const consecutiva = true;
    const magico =
    sumaDeFilas.every((suma) => suma === sumaDeLasDiagonales)&& sumaDeColumnas.every ((suma)=> suma === sumaDeLasDiagonales);
    return {consecutiva, magico}

}
const matriz = [[3,1,5],[4,7,2],[9,8,6]]
const resultado =cuadroMagico(matriz)
console.log (resultado)