let botonRegistrar = document.getElementById("btn_registrar");
document.getElementById("nombre").focus();

botonRegistrar.addEventListener("click", function() {
    let nombre, apellidos, correo, usuario, clave, telefono;
    let respuesta = true;
    let msjValidacion = document.getElementById("msjValidacion");
    const patronEmail = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/";

    msjValidacion.innerHTML = "";

    //Obtener los campos del formulario.
    nombre = document.getElementById("nombre");
    apellidos = document.getElementById("apellidos");
    correo = document.getElementById("correo");
    usuario = document.getElementById("usuario");
    clave = document.getElementById("pass");
    telefono = document.getElementById("telefono");


    //Nombre.
    if (nombre.value.trim().length == 0) {
        msjValidacion.textContent = "El campo nombre es obligatorio.";
        nombre.focus();
        return false;
    } else if (nombre.value.trim().length > 30) {
        msjValidacion.textContent = "El campo nombre no debe superar los 30 caracteres.";
        nombre.focus();
        return false;
    }

    //Apellidos.
    if (apellidos.value.trim().length == 0) {
        msjValidacion.textContent = "El campo apellidos es obligatorio.";
        apellidos.focus();
        return false;
    } else if (apellidos.value.trim().length > 80) {
        msjValidacion.textContent = "El campo apellidos no debe superar los 80 caracteres.";
        apellidos.focus();
        return false;
    }


    //Correo.
    if (correo.value.trim().length == 0) {
        msjValidacion.textContent = "El campo correo es obligatorio.";
        correo.focus();
        return false;
    } else if (correo.value.trim().length > 100) {
        msjValidacion.textContent = "El campo correo no debe superar los 80 caracteres.";
        correo.focus();
        return false;
    } else if (!isValidEmail(correo.value.trim())) {
        msjValidacion.textContent = "El campo correo no posee el formato correcto. <br> Ej: mi.email[@]desafio-latam[.]cl";
        correo.focus();
        return false;
    }

    //Usuario.
    if (usuario.value.trim().length == 0) {
        msjValidacion.textContent = "El campo usuario es obligatorio.";
        usuario.focus();
        return false;
    } else if (usuario.value.trim().length > 20) {
        msjValidacion.textContent = "El campo usuario no debe superar los 20 caracteres.";
        usuario.focus();
        return false;
    }


    //Clave.
    if (clave.value.trim().length == 0) {
        msjValidacion.textContent = "El campo contraseña es obligatorio.";
        clave.focus();
        return false;
    }


    //Telefono.
    if (telefono.value.trim().length == 0) {
        msjValidacion.textContent = "El campo telefono es obligatorio.";
        telefono.focus();
        return false;
    } else if (telefono.value.trim().length > 15) {
        msjValidacion.textContent = "El campo telefono no debe superar los 15 digitos.";
        telefono.focus();
        return false;
    } else if (isNaN(telefono.value)) {
        msjValidacion.textContent = "El campo telefono debe ser numerico.";
        telefono.focus();
        return false;
    }

    //Si todo es correcto, mostrar mensaje de bienvenida.
    if (respuesta) {
        let bienvenida = "Bienvenido/a " + nombre.value.trim() + " " + apellidos.value.trim() + ".<br>" +
            "Tú usuario  es :  " + usuario.value.trim() + " <br>" +
            "Tú contraseña es : " + clave.value.trim();


        msjValidacion.innerHTML = bienvenida;
    }

    return respuesta;
});


/*
 * Función para validar el correo.
 */
const isValidEmail = function(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    //return true;
}