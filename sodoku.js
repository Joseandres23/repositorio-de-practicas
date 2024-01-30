function hacerUnSudoku (){
    const sudoku = Array (9).fill(null).map(()=> Array(9).fill(null));

    for (let i = 0; i < 9; i++){
        sudoku[0][i] = Math.floor(Math.random() * 9) + 1;

    }
    resolviendoSudoku(sudoku);

    for (let i = 0; i < 40; i++) {
        const fila = Math.floor(Math.random() * 9);
        const columna = Math.floor (Math.random() * 9);

        if (esCorrecto(sudoku, fila, columna, sudoku [fila][columna])) {
            sudoku [fila][columna] = null;
        }
    }

    return sudoku;
}
function resolviendoSudoku (sudoku){
    let celdasVacias = true;
    while (celdasVacias){
        celdasVacias = false;

        for (let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
                if (sudoku[1][j] === null) {
                    for (let num = 1; num <= 9; num++){
                        if (esCorrecto(sudoku, 1, j, num)){
                            sudoku [i][j] = num;
                            celdasVacias = true;
                            break;
                        }
                    }
                    if (!celdasVacias){
                        break;
                    }
                }
            }
            if (celdasVacias){
                break
            }
        }
    }
}
function esCorrecto (sudoku, fila, columna, valor){
    for (let i = 0; i < 9; i++) {
        if (sudoku[fila][i] === valor){
            return false;
        }
    }
    for (let j = 0; j < 9; j++) {
        if (sudoku [j][columna] === valor) {
            return false;
        }
    }
    const filaInicio = Math.floor (fila / 3)* 3;
    const columnaInicio = Math.floor (columna / 3)* 3;
    for (let i = filaInicio; i < filaInicio + 3; i++) {
        for (let j = columnaInicio; j < columnaInicio + 3; j++) {
            if (sudoku[i][j] === valor) {
                return false;
            }
        }
    }
    return true;
}
const sudoku = hacerUnSudoku()
console.log(sudoku);