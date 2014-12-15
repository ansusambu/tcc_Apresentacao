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
        <link type="text/css" rel="stylesheet" href="../css/home.css">
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
        <script type="text/javascript" src="../js/home.js"></script>
    </head>
    <body>
        <div class="conteudo">
            <div id="mapa"></div>
            <div class="selet">
                <center>
                    <select id="selec">
                        <option>Selecione tipo de PESQUISA</option>
                        <option>Pesquisa Por ENDERECO</option>
                        <option>Pesquisa Por REGIAO</option>
                        <option>Pesquisa Por PRAZO</option>
                    </select>
                </center>
            </div>
            <div id="camp_pesq">
                <center>
                    <div id="titulo"></div>
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

