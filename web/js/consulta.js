/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var html ;

function carrega(){
    html = document.getElementById("con").innerHTML;
}

function seleciona(){
    if(document.getElementById("select_cons").value==="Consultar_Disponibilidade"){
        document.getElementById("con").innerHTML = "<center><div id='consulta_comp'> <span class='titulo'>"
        +"Consultar diponibilidade de Imoveis</span><table class='pedido'><tr><td><span>degite endereço:</span>"
        +"<input type='text'></td></tr></table></div></center>";
    }
    else{
        document.getElementById("con").innerHTML = html;
    }
}


window.onload=carrega;

