$(document).ready(function(){
    $("#formulario").validate({
        rules:{
            nombres:{required: true,minlength: 3,maxlength: 10},
            contraseña:{required: true,minlength: 5, maxlength: 15}
        },
        messages:{
            nombres:{
                required: "Este campo es requerido",
                minlength: "El campo debe tener minimo 3 letras",
                maxlength: "El campo debe tener maximo 10 letras"

            },
            contraseña:{
                required: "Este campo es requerido",
                minlength: "El campo debe tener minimo 5 caracteres",
                maxlength: "El campo debe tener maximo 15 caracteres"
            }
        } 
    })
})

