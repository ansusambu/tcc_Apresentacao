/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var html_ant;
var geocoder;
var map;
var valor=null;
var longitude;
var lotitude;

function Mostrar_no_mapa(endereco){
    var latlng = new google.maps.LatLng(-18.397, 150.644);
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map= new google.maps.Map(document.getElementById("mapa"),myOptions);
    geocoder = new google.maps.Geocoder();    
    var marker = new google.maps.Marker({
        map: map,
        draggable: true
    });
    geocoder.geocode({ 'address': endereco+ ', Brasil', 'region': 'BR' }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    latitude = results[0].geometry.location.lat();
                    longitude = results[0].geometry.location.lng();
                    var location = new google.maps.LatLng(latitude, longitude);
                    marker.setPosition(location);
                    map.setCenter(location);
                    map.setZoom(16);
                }
            }
        });
}

function Voltar(){
    document.getElementById("conteudo").innerHTML=html_ant;
}

function get_cadastro(){
    if(document.getElementById("beneficiario").value===''){
        alert("Campo Beneficiario não pode ficar vazio");
        return;
    }
    if(document.getElementById("endereco").value===''){
        alert("Campo Endereco não pode ficar vazio");
        return ;
    }
    if(document.getElementById("decreto").value===''){
        alert("Campo Decreto não pode ficar vazio");
        return ;
    }
    if(document.getElementById("lavrado_em").value===''){
        alert("Campo Lavrado_em não pode ficar vazio");
        return ;
    }
    if(document.getElementById("processo").value===''){
        alert("Campo Processo não pode ficar vazio");
        return ;
    }
    if(document.getElementById("planta").value===''){
        alert("Campo Planta não pode ficar vazio");
        return ;
    }
    if(document.getElementById("croquis").value===''){
        alert("Campo Croquis não pode ficar vazio");
        return ;
    }
    if(document.getElementById("area").value===''){
        alert("Campo Area não pode ficar vazio");
        return ;
    }
    if(document.getElementById("prazo").value===''){
        alert("Campo Prazo não pode ficar vazio");
        return ;
    }
    if(document.getElementById("finalidade").value===''){
        alert("Campo Finalidade não pode ficar vazio");
        return ;
    }
    if(document.getElementById("ContraPartida").value===''){
        alert("Campo ContraPartida não pode ficar vazio");
        return ;
    }
    
    var beneficiario = document.getElementById("beneficiario").value;
    var endereco= document.getElementById("endereco").value;
    var decreto = document.getElementById("decreto").value;
    var lavrado_em = document.getElementById("lavrado_em").value;
    var processo = document.getElementById("processo").value;
    var planta = document.getElementById("planta").value;
    var croquis = document.getElementById("croquis").value;
    var area = document.getElementById("area").value;
    var prazo = document.getElementById("prazo").value;
    var finalidade = document.getElementById("finalidade").value;
    var contrapartida = document.getElementById("ContraPartida").value;
    //var tipo = document.getElementById("tipo").value;
    valor = "valores="+beneficiario+"/"+endereco+"/"+decreto+"/"+lavrado_em+"/"+processo+"/"+planta+"/"+croquis+"/"+area+"/"+prazo+"/"+finalidade+"/"+contrapartida;
    apaga_campos();
    Guarda_endereco( valor);
}

function apaga_campos(){
    document.getElementById("beneficiario").value="";
    document.getElementById("endereco").value="";
    document.getElementById("decreto").value="";
    document.getElementById("lavrado_em").value="";
    document.getElementById("processo").value="";    
    document.getElementById("planta").value="";    
    document.getElementById("croquis").value="";    
    document.getElementById("area").value="";    
    document.getElementById("prazo").value="";    
    document.getElementById("finalidade").value="";    
    document.getElementById("ContraPartida").value="";    
}

function resultado_cadastro(bairro, rua, cep){
    html_ant = document.getElementById("conteudo").innerHTML;
    document.getElementById("conteudo").innerHTML = "<center><h1 style='color: chartreuse'>Confirmação de Endereco</h1>"+
            "<div id='mapa' Style='width: 400px; height: 400px; border:solid' ></div><br><br>"+
            "<input type='button' class='boton' onclick='confirma_cadastro()' value='Confirnar'>"+
            "<input type='button' class='boton' onclick='Voltar()' value='Cancelar'></center>";  
    Mostrar_no_mapa(bairro+", "+rua);
    
}

function confirma_cadastro(){
    Guarda_endereco(valor+"/"+latitude+"/"+longitude);
    Voltar();
}

function Guarda_endereco( valor){
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "../Ponte?"+valor,true);
    ajax.onreadystatechange = function(){
        if(ajax.readyState===4)alert(ajax.responseText);
    };
    ajax.send();    
}




