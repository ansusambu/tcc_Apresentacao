<%-- 
    Document   : Credito
    Created on : 05/06/2014, 23:49:45
    Author     : David
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="Master.jsp"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link type="text/css" rel="stylesheet" href="../css/pedido.css">
        <title>Pedido</title>
    </head>
    <body>
        <div class="conteudo">
            <div>
                <center>
                    <table id="pedido">
                        <tr>
                            <td>
                                <span>area:</span>
                                <input type="text" id="">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>bairro:</span>
                                <input type="text" id="">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>data do pedido:</span>
                                <input type="text" id="">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>enteresse:</span>
                                <input type="text" id="">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>finalidade:</span>
                                <input type="text" id="">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>periodo:</span>
                                <input type="text" id="">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>tipo de imovel:</span>
                                <input type="text" id="">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>justificativa:</span>
                                <input id="justificativa" type="text" >
                            </td>
                        </tr>
                    </table>
                    <input type="button" value="Registrar">
                    <input type="button" value="Cancelar">
                </center>
            </div>
        </div>
    </body>
    <%@include file="rodape.jsp"%>
</html>
