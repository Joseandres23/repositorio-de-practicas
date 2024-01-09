let boton = document.getElementById("btn-enviar")
let resultado = document.querySelector(".resultado")
boton.addEventListener("click",(e)=>{
    e.preventDefault();
    const email = document.getElementById("correo electronico").value;
validarCorreo(email);
})
    const validarCorreo = (correo) =>{
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let aceptar = expReg.test(correo);
    if (aceptar){
        resultado.innerHTML = "correo validado";
    } else {
            resultado.innerHTML = "correo no validado";
        }
    } 