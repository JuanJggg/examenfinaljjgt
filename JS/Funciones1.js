$(document).ready(function(){
    $("#formularioregistro").validate({
        rules:{
            nombreusuario: {required: true,minlength: 3, maxlength: 10},
            contraseñacrear: {required: true, minlength: 6, maxlength: 15}
        },
        messages:{
            nombreusuario:{
                required: "Este campo es requerido",
                minlength: "Deben existir al menos 3 caracteres",
                maxlength: "No se puede tener mas de 10 caracteres"
            },
            contraseñacrear:{
                required: "Este campo es requerido",
                minlength: "Deben existir al menos 6 caracteres",
                maxlength: "No se puede tener mas de 15 caracteres"
            }

        }
    })
})