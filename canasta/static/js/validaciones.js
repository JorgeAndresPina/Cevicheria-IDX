function blanqueadoRegistro(){
    document.getElementById("newUserFirstName").value = "";
    document.getElementById("newUserMiddleName").value = "";
    document.getElementById("newUserName").value = "";
    document.getElementById("newUserMail").value = "";
    document.getElementById("newUserPswd").value = "";
    document.getElementById("ConfirmacionContraseña").value = "";
    document.getElementById("zipCodeNewUser").value = 0;
}

function blanqueadoRegistro(){
    document.getElementById("userName").value = "";
    document.getElementById("userPswd").value = "";
}

$(document).ready(function(){
    $("#formularioNuevoUsuario").validate({
        rules: {
            newUserName:{
                required: true,
                minlength: 2,
                maxlength: 25
            },
            newUserMail:{
                required: true,
                email: true
            },
            newUserPswd:{
                required: true,
                minlength: 8,
            },
            ConfirmacionContraseña: {
                required: true,
                minlength: 8,
                equalTo: "#newUserPswd"
            },
            newUserFirstName : {
                required: true,
                minlength: 2,
                maxlength: 25
            },
            newUserMiddleName : {
                required: true,
                minlength: 2,
                maxlength: 25
            },
            zipCodeNewUser : {
                required: true,
                number : true,
                minlength : 7,
                maxlength : 7
            }
        },
        messages: {
            newUserName : {
                required : "No lo dejes a media ven y pon tu nombre.",
                minlength : "no puede ser menor a dos el largo del nombre",
                maxlength : "no puede ser menor a dos el largo del nombre"
            },
            newUserMail : {
                required : "Podrias rellenar la seccion de mail por favor.",
                email: "Podrias intentar poner un correo con forma de correo por favor."
            },
            newUserPswd : {
                required : "Imagina no tener contraseña que recordar pero tambien imagina como seria un cobro fantasma por que tu cuneta no tiene contraseña.", 
                minlength: "Por favor que sea de mas de 8 digitos, es tu seguridad."
            },
            ConfirmacionContraseña: {
                required : "Si no la confirmas no te dejare que te crees la cuenta",
                minlength :"Mano tiene que tener el mismo largo que la anterior.",
                equalTo : "Si no es igual tampoco te dejare hacer la cuenta,"
            },
            newUserFirstName: {
                required: "Por favor que aunque me gustaria dejarte con el username por siempre, necesitamos tu nombre verdadero por temas de entrega.",
                minlength:"Son dos caracteres",
                maxlength:"Que tan largo es tu nombre?"
            },
            newUserMiddleName:{
                required: "Son las mismas reglas que en todo por que todo es obligatorio.",
                minlength:"Son dos caracteres",
                maxlength:"Que tan largo es tu nombre?"
            },
            zipCodeNewUser:{
                required: "Donde quiere que llegue tu pedido, si con el codigo postal es imposible que no lleguemos",
                number : "Mano solo numeros",
                minlength : "tiene que ser de 7 digitos",
                maxlength : "tiene que ser de 7 digitos"
            }
        }
    }),
    submit
})

$(document).ready(function(){
    $("#formularioNuevoUsuario").validate({
        rules: {
            userName:{
                required: true,
                email : true
            },
            userPswd:{
                required: true
            }
        },
        messages: {
            userName:{
                required: "Si no ingresas tu usuario yo no pienso dejarte entrar",
                email : "por favor que sea con formato de correo."
            },
            userPswd:{
                required: "Quieres entrar sin una contraseña."
            }
        }
    }),
    submit
})