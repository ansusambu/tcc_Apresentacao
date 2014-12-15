<%-- 
    Document   : index.jsp
    Created on : 06/06/2014, 01:43:24
    Author     : David
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <%@include file="Master.jsp" %>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Home</title>
        <script type="text/javascript" src="../js/jquery-1.8.0.min.js"></script>
        <script type="text/javascript" src="../js/jquery.flexslider-min.js" ></script>
        <link type="text/css" rel="stylesheet" href="../css/pesquisa_avancado.css">
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
        <script type="text/javascript" src="../js/pesquisa_avancado.js"></script>
    </head>
    <body>
        <div id="mapa">
            <center>
                <div id="c_botton">
                    <input type="button" value="Fechar" title="fechar" onclick="fecha_mapa()">
                    <input type='button' value="mostrar todos" onclick='Mostrar_todos_no_mapa()'>
                </div>
                <div id="c_mapa"></div>
            </center>
        </div>
        <div class="conteudo">
            <div class="selet">
                <center>
                    <select id="selec">
                        <option>Selecione tipo de PESQUISA</option>
                        <option>Pesquisa Por AREA</option>
                        <option>Pesquisa Por BENEFICIARIO</option>
                        <option>Pesquisa Por CONTRAPARTIDA</option>
                        <option>Pesquisa Por DECRETO</option>
                        <option>Pesquisa Por ENDERECO</option>
                        <option>Pesquisa Por FINALIDADE</option>
                        <option>Pesquisa Por PRAZO</option>
                        <option>Pesquisa Por REGIAO</option>
                        <option>Pesquisa Por PLANTA</option>
                    </select>
                </center>
            </div>
            <div id="camp_pesq">
                <center>
                    <div id="campo">
                        <input id="entrada" type="text" onfocus="focus_in()">
                    </div>
                    <input class="boton" type="button" value="enviar" onclick="get_endereco()">
                </center>                                 
            </div>
        </div>
    </body>
    <%@include file="rodape.jsp" %>
</html>

