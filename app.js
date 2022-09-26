window.onload = iniciar;
let experienciaLaboral = [
    "Bachiller Académico",
    "Ingeniero de Sistemas",
    "Programador Frontend (Prácticas)",
    "Programador Fullstack",
    "Programdor Backend",
];
let descripExpeLab = [
    "Graduado de bachiller en la Escuela Normal Superior San Pedro Alejandrino",
    "Graduado de ingeniero de sistemas en la Universidad del Magdalena",
    "Prácticas realizadas en la empresa PROGACO durante 6 meses",
    "Programador Fullstack en la empresa WEBPROGRAMMING en Colombia durante 1 año",
    "Programador Backend en la empresa Google desde el 2028 hasta hoy"
];


function iniciar(){
    llenarExperiencia();
    let btnEnviar = document.getElementById("btnEnviar");
    btnEnviar.addEventListener("click",validContact);
}

function llenarExperiencia(){
    let listaExperiencia = document.getElementById("expLaboral");
    for(let i=0;i<experienciaLaboral.length;i++){
        listaExperiencia.innerHTML += "<li><b>"+experienciaLaboral[i]+":</b>"+descripExpeLab[i]+".</li>";
    }
}

function llenarHab(){
    let tablaHab=document.getElementById();
}

function validContact(){
    let asuntoTxt=document.getElementById("asunto");
    let correoTxt=document.getElementById("correo");
    let mensajeTxt=document.getElementById("mensaje");
    
    if(correoTxt.value && asuntoTxt.value && mensajeTxt.value){
        contacto(correoTxt.value,asuntoTxt.value,mensajeTxt.value);
    }else{
        document.getElementById("error").innerHTML = "Por favor, rellene todos los espacios.";
    }
}