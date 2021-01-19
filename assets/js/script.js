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
    let respuesta = true;
    let msjValidacion = document.getElementById("msjValidacion");
    let mensaje = document.getElementById("mensaje");
    let patronEmail = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/";

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
        msjValidacion.innerHTML = "El campo nombre es obligatorio.";
        nombre.focus();
        //return false;
    }

    console.log("Nombre: " + nombre.value.trim().length);
    if (nombre.value.trim().length > 30) {
        msjValidacion.innerHTML = "El campo nombre debe superar los 30 caracteres.";
        nombre.focus();
        return false;
    }

    if (apellidos.value.trim().length == 0) {
        msjValidacion.innerHTML = "El campo apellidos es obligatorio.";
        return false;
    }

    if (apellidos.value.trim().length > 80) {
        msjValidacion.innerHTML = "El campo nombre debe superar los 80 caracteres.";
        nombre.focus();
        return false;
    }

    if (correo.value.trim().length == 0) {
        msjValidacion.innerHTML = "El campo correo es obligatorio.";
        return false;
    }

    if (correo.value.trim().length > 100) {
        msjValidacion.innerHTML = "El campo correo debe superar los 80 caracteres.";
        nombre.focus();
        return false;
    }

    console.log("Valida correo : " + isValidEmail("prueba"));
    if (!isValidEmail("prueba")) {
        msjValidacion.innerHTML = "El campo correo no posee el formato correcto.";
        nombre.focus();
        return false;
    }

    if (usuario.value.trim().length == 0) {
        msjValidacion.innerHTML = "El campo usuario es obligatorio.";
        return false;
    }

    if (usuario.value.trim().length > 20) {
        msjValidacion.innerHTML = "El campo nombre debe superar los 20 caracteres.";
        nombre.focus();
        return false;
    }


    if (clave.value.trim().length == 0) {
        msjValidacion.innerHTML = "El campo contraseña es obligatorio.";
        clave.focus();
        return false;
    }

    if (telefono.value.trim().length == 0) {
        msjValidacion.innerHTML = "El campo telefono es obligatorio.";
        return false;
    }

    if (telefono.value.trim().length > 15) {
        msjValidacion.innerHTML = "El campo nombre debe superar los 15 caracteres.";
        nombre.focus();
        return false;
    }


    if (isNaN(telefono.value)) {
        msjValidacion.innerHTML = "El campo telefono debe ser numerico.";
        nombre.focus();
        return false;
    }

    if (respuesta) {
        //let bienvenida = ("Bienvenidx {0} {1}. Tu usuario es  {2} y tu contraseña es {3}", , apellidos.value.trim(), usuario.value.trim(), clave.value.trim());
        let bienvenida = format("Bienvenidx {0}", apellidos.value.trim());
        mensaje.innerHTML = bienvenida;
    }

    return respuesta;
});



function isValidEmail(mail) {
    // return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    return true;
}