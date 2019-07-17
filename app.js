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
titulo.innerHTML = "Enero";
tabla_mes.appendChild(titulo);

//Nombre Meses

var mes_text = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//La función nombrará cada mes

function estructurar(){
    for(m != 0; m <=11; m++){
        //Titulo
        titulo.innerHTML = mes_text[m];
    }
}

//Cabecera, días de la semana
let cabecera = document.createElement("THEAD");
tabla_mes.appendChild(cabecera);
let fila = document.createElement("TR");
var dia_text = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
for (d = 0; d<7; d++){
    let dia = document.createElement("TH");
    dia.innerText = dia_text[d];
    fila.appendChild(dia);
}
let cuerpo = document.createElement("TBODY");
tabla_mes.appendChild(cuerpo);
for (f = 0; f< 6; f++){
    let fila = document.createElement("TR");
    cuerpo.appendChild(fila);
    for (d=0; d < 7; d++){
        let dia = document.createElement("TD");
        dia.innerText = "1";
        fila.appendChild(dia);
    }
}