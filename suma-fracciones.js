function sumaDeFracciones (numerador, denominador, exponente) {
    return [
        numerador ** 2,
        denominador ** 2,
        numerador ** 2 / denominador **2,
    ];
}
function tabla (resultados) {
    console.log("| Potencia | Fracción | Suma |");
    console.log("|---|---|---|");
    for (const resultado of resultados) {
        console.log(`| ${resultado[0]}| ${resultado[1]} | ${resultado[2]}|`)
    }
}
const fracciones = [
    [1,2],
    [1,4],
    [1,8], 
    [1,16],
    [1,32],
    [1,64]

];
const resultados = fracciones.map (fraccion => sumaDeFracciones (...fraccion));

tabla(resultados);