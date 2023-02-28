var btn_0 = document.getElementById('btn_0');
var caja_0 = document.getElementById('caja_0');
var btn_1 = document.getElementById('btn_1');
var caja_1 = document.getElementById('caja_1');
var btn_2 = document.getElementById('btn_2');
var caja_2 = document.getElementById('caja_2');
var btn_3 = document.getElementById('btn_3');
var caja_3 = document.getElementById('caja_3');
var btn_4 = document.getElementById('btn_4');
var caja_4 = document.getElementById('caja_4');
var btn_5 = document.getElementById('btn_5');
var caja_5 = document.getElementById('caja_5');
var contador=0;

btn_0.addEventListener('click',() => ver_mas('btn_0',caja_0),true);
btn_1.addEventListener('click',() => ver_mas('btn_1',caja_1),true);
btn_2.addEventListener('click',() => ver_mas('btn_2',caja_2),true);
btn_3.addEventListener('click',() => ver_mas('btn_3',caja_3),true);
btn_4.addEventListener('click',() => ver_mas('btn_4',caja_4),true);
btn_5.addEventListener('click',() => ver_mas('btn_5',caja_5),true);


function ver_mas(btn, caja){
    if(contador==0){
    caja.classList.add('ver');
        document.getElementById(btn).innerHTML="Ocultar";
        document.getElementById(btn).style.marginTop=0;
        contador=1;
    }
    else{
        caja.classList.remove('ver');
        document.getElementById(btn).innerHTML="Leer Más";
        contador=0;
    }
}









    
