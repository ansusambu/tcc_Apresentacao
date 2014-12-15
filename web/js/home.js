/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload=maps;
var entrada_dado;
var tabela_temp;
var vec_long;
var vec_lat;
var apaga_pesq;
var html_ant;
var tabela_end="<table id='tabela'><tr><td>Qt_Imoveis</td><td>Endereços</td><td>Tam_do_bairro</td></tr>";
var map;
var geocoder;
var longitude=0;
var latitude=0;
var tipo;
var selecionado=[0,0];


$(document).ready(function(){
    $("#camp_pesq").hide();
    $("#selec").change(function(){
       if($("#selec option:selected").text()==="Selecione tipo de PESQUISA")$("#camp_pesq").slideUp();
       else Format_pesq();          
    });
    $("#entrada").focusin(function(){
    }).focusout(function(){
        
    });
});

function focus_in(){
    if(document.getElementById("entrada").value.split(" ")[0]==="Degite")document.getElementById("entrada").value="";     
}


function alterar_dados_bd(id){
    var tipo_ant = tipo;
    tipo = "valores=ATUALIZA_TODOS/"+id+"--";  
    if(document.getElementById("2").value!=="")tipo=tipo+document.getElementById("2").value+"--";
    else tipo=tipo+" --";
    if(document.getElementById("3").value!=="")tipo=tipo+document.getElementById("3").value+"--";
    else tipo=tipo+" --";
    if(document.getElementById("4").value!=="")tipo=tipo+document.getElementById("4").value+"--";
    else tipo=tipo+" --";
    if(document.getElementById("5").value!=="")tipo=tipo+document.getElementById("5").value+"--";
    else tipo=tipo+" --";
    if(document.getElementById("6").value!=="")tipo=tipo+document.getElementById("6").value+"--";
    else tipo=tipo+" --";
    if(document.getElementById("7").value!=="")tipo=tipo+document.getElementById("7").value+"--";    
    else tipo=tipo+" --";
    if(document.getElementById("8").value!=="")tipo=tipo+document.getElementById("8").value+"--";
    else tipo=tipo+" --";
    if(document.getElementById("9").value!=="")tipo=tipo+document.getElementById("9").value+"--";
    else tipo=tipo+" --";
    if(document.getElementById("10").value!=="")tipo=tipo+document.getElementById("10").value+"--";
    else tipo=tipo+" --";
    if(document.getElementById("11").value!=="")tipo=tipo+document.getElementById("11").value+"--";
    else tipo=tipo+" --";
    document.getElementById("camp_pesq").innerHTML="<center><img src='../css/image/carregando.gif' height='200px'></center>";    
    atualiza_banco();
    tipo = tipo_ant;
    Opera_Banco();        
}
function apresenta_tabela(conteudo){
    document.getElementById("camp_pesq").innerHTML="<div class='tabela' id='tabela'><center>"+conteudo+ "<input type='button' class='boton' value='nova pesquisa'"
            +"onclick='voltar_pesq()'></center></div>";
            $('html, body').animate({scrollTop:800}, 'slow');
}  
function atualiza_banco(){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(ajax.readyState===4){
            alert(ajax.responseText);
        }        
    };
    ajax.open("GET", "../Ponte?"+tipo,true);
    ajax.send();
}
function atualiza_Coordenada(linha,endereco){
    Coordenadas_mapa(endereco); 
    if(latitude===0 && longitude===0) {
        document.getElementById("longitude_"+linha).innerHTML="Nao Encontrado";
        document.getElementById("latitude_"+linha).innerHTML ="Nao Encontrado";        
    }else{
        document.getElementById("longitude_"+linha).innerHTML=longitude;
        document.getElementById("latitude_"+linha).innerHTML=latitude;
        document.getElementById("icon_"+linha).innerHTML="<center><input type='image' \n\
        onclick='localiza_map("+latitude+","+longitude+");' src='../css/image/lupa_procura.png'></center>";
        tipo = "valores=ATUALIZA/"+linha+"/"+latitude+"/"+longitude;
        atualiza_banco();
    }
}

function cancela(){
    document.getElementById("tabela").innerHTML="<center><img src='../css/image/carregando.gif' height='200px'></center>";    
    setTimeout("cancela_comple()",1000);
}
function cancela_comple(){
    document.getElementById("radio").style.display="block";
    document.getElementById("tabela").innerHTML=tabela_temp;    
}
function Coordenadas_mapa(endereco){
    geocoder = new google.maps.Geocoder();    
    geocoder.geocode({ 'address': endereco+ ', Brasil', 'region': 'BR' }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                latitude = results[0].geometry.location.lat();
                longitude = results[0].geometry.location.lng();
            }
        }
    });
}

function Format_pesq(){
    $("#camp_pesq").slideDown("200"); 
           temp_tipo = document.getElementById("selec").value.split(" ");
           document.getElementById("camp_pesq").innerHTML=entrada_dado;
           switch (temp_tipo[temp_tipo.length-1]){
               case "REGIAO":
                   tipo="valores=REGIAO";
                   document.getElementById("entrada").value="Degite nome da região, valor do raio ";                   
                   break;
               case "ENDERECO":
                   tipo="valores=ENDERECO";
                   document.getElementById("entrada").value="Degite o endereco ";
                   break;
               case "PRAZO":
                   tipo="valores=PRAZO";
                   document.getElementById("entrada").value="Degite o Prazo ";
                   break;
           }    
}

function get_endereco(){
    if(document.getElementById("entrada").value===""){
        alert("campo invalido");
        return;
    }
    html_ant=document.getElementById("camp_pesq").innerHTML; 
    tipo = tipo +"/"+ document.getElementById("entrada").value;
    $('html, body').animate({scrollTop:600}, 'slow');
    document.getElementById("entrada").value="";
    document.getElementById("camp_pesq").innerHTML="<center><img src='../css/image/carregando.gif' height='200px'></center>";    
    Opera_Banco();
}

function maps(){
    entrada_dado = document.getElementById("camp_pesq").innerHTML;
    html_ant=document.getElementById("camp_pesq").innerHTML;
    var latlng = new google.maps.LatLng(-23.531,-46.698);
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map= new google.maps.Map(document.getElementById("mapa"),myOptions);
}
function Mostrar_todos_no_mapa(){
    var table = document.getElementById("dados");
    var l1=table.rows[1].childNodes[11].innerHTML.split(">");
    var l2=table.rows[1].childNodes[12].innerHTML.split(">");
    var latlng = new google.maps.LatLng(l1[1].split("<")[0],l2[1].split("<")[0]);
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map= new google.maps.Map(document.getElementById("mapa"),myOptions);
    for(var x=2; x <table.rows.length; x++ ){
        temp = table.rows[x].childNodes[11].innerHTML.split(">");
        temp_2=table.rows[x].childNodes[12].innerHTML.split(">");
        if(temp[1].split("<")[0]!=='null' && temp_2[1].split("<")[0]!=='null'){
            var latlng = new google.maps.LatLng(temp[1].split("<")[0], temp_2[1].split("<")[0]);
            var marker = new google.maps.Marker({
                map: map,
                draggable: true
            });
            marker.setPosition(latlng);
        }
    }
}
function listar_alvo(){
    if(selecionado[0]===0 && selecionado[1]===0){
        alert("Selecione um endereco valído");
        document.getElementById("alvo").checked=false;
        return;
    }
    localiza_map(selecionado[0],selecionado[1]);
}
function localiza_map(latitude,longitude){
    selecionado[0]=latitude;
    selecionado[1]=longitude;    
    var latlng = new google.maps.LatLng(latitude, longitude);
    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map= new google.maps.Map(document.getElementById("mapa"),myOptions);
    var marker = new google.maps.Marker({
        map: map,
        draggable: true
    });
    marker.setPosition(latlng);
    $('html, body').animate({scrollTop:80}, 'slow');
    
}

function Opera_Banco(){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(ajax.readyState===4){
            apresenta_tabela(ajax.responseText);
        }        
    };
    ajax.open("GET", "../Ponte?"+tipo,true);
    ajax.send();
}
function removeLinha_banco(linha){
    var ant_tipo=tipo;
    tipo = "valores=REMOVER/"+linha; 
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(ajax.readyState===4){
            alert(ajax.responseText);
            tipo=ant_tipo;
            Opera_Banco();
        }        
    };
    ajax.open("GET", "../Ponte?"+tipo,true);
    ajax.send();
}

function voltar_pesq(){
    document.getElementById("camp_pesq").innerHTML=html_ant;
    Format_pesq();
}


function gera_raio(inicio){
    var y=0;
    var x=y-inicio;
    for(x=inicio; x <inicio; x++  ){
        
    }
}
function pesquisa_por_regiao(){
    if(document.getElementById("entrada").value===""){
        alert("campo invalido");
        return;
    }
    html_ant=document.getElementById("camp_pesq").innerHTML; 
    try{
        var tmp = document.getElementById("entrado").value.split(",");
        tipo = tipo +"/"+ document.getElementById("entrada").value;
        
    }catch(err ){
        alert("Formato Invalido tente região,raio");
        return;
    }
    $('html, body').animate({scrollTop:600}, 'slow');
    document.getElementById("entrada").value="";
    document.getElementById("camp_pesq").innerHTML="<center><img src='../css/image/carregando.gif' height='200px'></center>";    
    Opera_Banco();
}