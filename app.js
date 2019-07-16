//https://devcode.la/tutoriales/calendario-con-javascript/

//Creamos el contenedor de Mes

let mes = document.createElement("DIV");
mes.classNaem = "mes";
document.body.appendChild(mes);

//Creamos la tabla, estructura del Mes

let tabla_mes = document.createElement("TABLE");
tabla_mes.className = "tabla_mes";
mes.appendChild(tabla_mes);

//Titulo o nombre de Mes

let titulo = document.createElement("CAPTION");
titulo.className = "titulo";
titulo.innerText = "Enero";
tabla_mes.appendChild(titulo);

//Titulos Meses

var mes_text = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//La función nombrará cada mes

function estructurar(){
    for(m = 0; m <=11; m++){
        //Titulo
        titulo.innerText = mes_text[m];
    }
}