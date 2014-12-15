/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
    apaga_pesq = document.getElementById("camp_pesq").innerHTML;
    $("#mapa").hide();
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
  

function alterar_dados(linha, linha_bd){
    tabela_temp= document.getElementById("tabela").innerHTML;
    var table = document.getElementById("dados");
    var col = table.rows[linha].childNodes;
    document.getElementById("tabela").innerHTML="<center>"
    +"<table class='table_alter'><tr><td><span>Beneficiario:</span><input id='2' type='text' value='"+col[0].innerHTML+"' ></td><td><span>Endereco:</span><input id='3' type='text' value='"+col[1].innerHTML+"' ></td></tr>"
    +"<tr><td><span>Decreto:</span><input id='4' type='text' value='"+col[2].innerHTML+"' ></td><td><span>Lavrado_em:</span></span><input id='5' type='text' value='"+col[3].innerHTML+"' ></td></tr>"
    +"<tr><td><span>Processo:</span><input id='6' type='text' value='"+col[4].innerHTML+"' ></td><td><span>Planta:</span><input id='7' type='text' value='"+col[5].innerHTML+"' ></td></tr>"
    +"<tr><td><span>Croquis</span><input id='8' type='text' value='"+col[6].innerHTML+"' ></td><td><span>Area</span><input id='9' type='text' value='"+col[7].innerHTML+"' ></td></tr>"
    +"<tr><td><span>Prazo:</span><input id='10' type='text' value='"+col[8].innerHTML+"' ></td><td><span>Finalidade:</span><input id='11' type='text' value='"+col[9].innerHTML+"' ></td></tr>"
    +"<tr><td colspan=2><center><input class='boton' id='boton_conf' type='button' value='Confirmar' onclick='alterar_dados_bd("+linha_bd+")' >"
    +"<input class='boton' id='boton_canc' type='button' value='Cancelar' onclick='cancela()'></td></tr></center>"
    +"</table></center>";    
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
    document.getElementById("camp_pesq").innerHTML="<div class='tabela' id='tabela'><center>"+conteudo+ "</center></div>"
            +"<center><div class='tabela'><input type='button' class='boton' value='nova pesquisa' onclick='voltar_pesq()'></center></div>";
}  
function atualiza_banco(){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(ajax.readyState===4){
            alert(ajax.responseText);
        }        
    };
    ajax.open("GET", "../Ponte_avancado?"+tipo,true);
    ajax.send();
}
function atualiza_Coordenada(lin,lin_bd,endereco){
    Coordenadas_mapa(endereco); 
    if(latitude===0 && longitude===0) {
        document.getElementById("longitude_"+lin_bd).innerHTML="Nao Encontrado";
        document.getElementById("latitude_"+lin_bd).innerHTML ="Nao Encontrado";        
    }else{
        var table = document.getElementById("dados");
        var col = table.rows[lin].childNodes;        
        col[11].innerHTML="<div id=longitude_"+lin_bd+" >"+longitude+"</div>";
        col[12].innerHTML="<div id=latitude_"+lin_bd+" >"+latitude+"</div>";
        document.getElementById("icon_"+lin_bd).innerHTML="<center><input type='image' \n\
        onclick='localiza_map("+latitude+","+longitude+");' src='../css/image/lupa_procura.png'></center>";
        tipo = "valores=ATUALIZA/"+lin_bd+"/"+latitude+"/"+longitude;
        atualiza_banco();
    }
}

function cancela(){
    document.getElementById("tabela").innerHTML="<center><img src='../css/image/carregando.gif' height='200px'></center>";    
    setTimeout("cancela_comple()",1000);
}
function cancela_comple(){
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
           document.getElementById("camp_pesq").innerHTML=apaga_pesq;
           temp_tipo = document.getElementById("selec").value.split(" ");
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
               case "BENEFICIARIO":
                   tipo="valores=BENEFICIARIO";
                   document.getElementById("entrada").value="Degite o Beneficiario ";
                   break;
               case "AREA":
                   tipo="valores=AREA";
                   document.getElementById("entrada").value="Degite a Area ";
                   break;
               case "CONTRAPARTIDA":
                   tipo="valores=CONTRAPARTIDA";
                   document.getElementById("entrada").value="Degite a Contrapartida ";
                   break;                   
               case "DECRETO":
                   tipo="valores=DECRETO";
                   document.getElementById("entrada").value="Degite o Decreto ";
                   break;
               case "FINALIDADE":
                   tipo="valores=FINALIDADE";
                   document.getElementById("entrada").value="Degite a Finalidade ";
                   break;
               case "PLANTA":
                   tipo="valores=PLANTA";
                   document.getElementById("entrada").value="Degite a Planta ";
                   break;
           }
}
function fecha_mapa(){
    $("#mapa").slideUp("0");
}

function get_endereco(){
    if(document.getElementById("entrada").value===""){
        alert("campo invalido");
        return;
    }
    html_ant=document.getElementById("camp_pesq").innerHTML; 
    tipo = tipo +"/"+ document.getElementById("entrada").value;
    document.getElementById("entrada").value="";
    document.getElementById("camp_pesq").innerHTML="<center><img src='../css/image/carregando.gif' height='200px'></center>";    
    Opera_Banco();
}


function Mostrar_todos_no_mapa(){
    var table = document.getElementById("dados");
    var latlng = new google.maps.LatLng(-23.531,-46.698);
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map= new google.maps.Map(document.getElementById("c_mapa"),myOptions);
    marca=0;
    for(var x=1; x <table.rows.length; x++ ){
        temp = table.rows[x].childNodes[11];
        temp_2=table.rows[x].childNodes[12];
        
        if(temp.innerText.length!==5 && temp_2.innerText.length!==5 && temp_2.innerText!=='Nao Encontrado'){
            marca=marca+1;
            latlng = new google.maps.LatLng(temp.innerText, temp_2.innerText);
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
    $("#mapa").slideDown("200");
    selecionado[0]=latitude;
    selecionado[1]=longitude;    
    var latlng = new google.maps.LatLng(latitude, longitude);
    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map= new google.maps.Map(document.getElementById("c_mapa"),myOptions);
    var marker = new google.maps.Marker({
        map: map,
        draggable: true
    });
    marker.setPosition(latlng);
    
}
function Opera_Banco(){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(ajax.readyState===4){
            apresenta_tabela(ajax.responseText);
        }        
    };
    ajax.open("GET", "../Ponte_avancado?"+tipo,true);
    ajax.send();
}
function removeLinha_banco(linha){
    html_ant=document.getElementById("camp_pesq").innerHTML; 
    document.getElementById("camp_pesq").innerHTML="<center><img src='../css/image/carregando.gif' height='200px'></center>";    
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
    ajax.open("GET", "../Ponte_avancado?"+tipo,true);
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