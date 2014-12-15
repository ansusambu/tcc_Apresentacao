<%-- 
    Document   : Consulta
    Created on : 05/06/2014, 23:50:38
    Author     : David
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="Master.jsp"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link type="text/css" rel="stylesheet" href="../css/consulta.css">
        <script type="text/javascript" src="../js/consulta.js" ></script>
        <title>Consulta</title>
    </head>
    <body>
        <div class="conteudo">
            <center>
                <div>
                    <select id="select_cons" onchange="seleciona()">
                        <option>Consultar_Processo</option>
                        <option>Consultar_Disponibilidade</option>
                    </select>
                </div>
            </center>
            <div id="con">
                <div id="consulta_comp">    
                    <center><span class="titulo">Consulta Por Dados Do Processo</span></center>
                    <center>
                        <table class="pedido">
                            <tr>
                                <td>
                                    <span>Processo:</span>
                                    <input type="text" id="">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Numero:</span>
                                    <input type="text" id="">
                                </td>
                            </tr>
                        </table>
                    </center>
                </div>
                <br><br>
                <div id="consulta_processo">
                    <center><span class="titulo">Consulta Por Numero De Protocolo</span></center>
                    <center>
                        <table class="pedido">
                            <tr>
                                <td>
                                    <span>Protocolo:</span>
                                    <input id="input_protocolo">
                                </td>
                            </tr>
                        </table>
                    </center>
                </div>
            </div>
            <center><input type="button" class="boton" value="enviar"></center>
        </div>
    </body>
    <%@include file="rodape.jsp"%>
</html>
