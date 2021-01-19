let persona = {
    nombre: '',
    apellidos: '',
    correo: '',
    usuario: '',
    pass: '',
    telefono: ''
}

let botonRegistrar = document.getElementById("btn_registrar");


botonRegistrar.addEventListener("click", function() {
    let nombre, apellidos, correo, usuario, clave, telefono;
    let respuesta = false;
    let msjValidacion = document.getElementById("msjValidacion");


    msjValidacion.innerHTML = "";

    //Campos del formulario.
    nombre = document.getElementById("nombre");
    apellidos = document.getElementById("apellidos");
    correo = document.getElementById("correo");
    usuario = document.getElementById("usuario");
    clave = document.getElementById("pass");
    telefono = document.getElementById("telefono");


    console.log("nombre : " + nombre.value.trim().length);
    console.log("Respuesta : " + respuesta);

    //1- Validar que los campos no esten vacios
    if (nombre.value.trim().length == 0) {

        //msjValidacion.innerHTML("dddddd");
        //msjValidacion.addClass("alert-warning");
        // msjValidacion.append("");
        msjValidacion.innerHTML = "El campo nombre es obligatorio.";
        nombre.focus();
        //return false;
    }


    if (apellidos.value.trim().length == 0) {

        //msjValidacion.innerHTML("dddddd");
        //msjValidacion.addClass("alert-warning");
        // msjValidacion.append("");
        msjValidacion.innerHTML = "El campo apellidos es obligatorio.";
        return false;
    }

    if (correo.value.trim().length == 0) {

        //msjValidacion.innerHTML("dddddd");
        //msjValidacion.addClass("alert-warning");
        // msjValidacion.append("");
        msjValidacion.innerHTML = "El campo correo es obligatorio.";
        return false;
    }

    if (usuario.value.trim().length == 0) {

        //msjValidacion.innerHTML("dddddd");
        //msjValidacion.addClass("alert-warning");
        // msjValidacion.append("");
        msjValidacion.innerHTML = "El campo usuario es obligatorio.";
        return false;
    }

    if (clave.value.trim().length == 0) {

        //msjValidacion.innerHTML("dddddd");
        //msjValidacion.addClass("alert-warning");
        // msjValidacion.append("");
        msjValidacion.innerHTML = "El campo contraseña es obligatorio.";
        clave.focus();
        return false;
    }

    if (telefono.value.trim().length == 0) {

        //msjValidacion.innerHTML("dddddd");
        //msjValidacion.addClass("alert-warning");
        // msjValidacion.append("");
        msjValidacion.innerHTML = "El campo telefono es obligatorio.";
        return false;
    }

    //return respuesta;
});