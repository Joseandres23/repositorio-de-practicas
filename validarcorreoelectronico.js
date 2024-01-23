function esCorreoValido (correo){
    if (correo.indexOf("@") < 0) {
        return false;
    }
    var extensionesValidas = [".com", ".com.mx", ".mx"];
    var terminacion = correo.substring(correo.length - 4);
    for (var i = 0; i < extensionesValidas.length; i++) {
        if (terminacion == extensionesValidas[i]) {
            return true;
        }
    }
    return false;
}
var correo =  "jose@gmail.com";
var esValido = esCorreoValido(correo);
console.log(esValido);

var correo = "pepe@gmail.edu.mx"
var esValido = esCorreoValido(correo)
console.log(esValido);
