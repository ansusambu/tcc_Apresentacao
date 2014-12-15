<%-- 
    Document   : Cadastrar
    Created on : 05/06/2014, 23:49:27
    Author     : David
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="Master.jsp"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="../css/CadastroImovel.css" type="text/css">
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
        <script type="text/javascript" src="../js/cadastrar.js"></script>
        <title>Cadastro Imoveis</title>
    </head>
    <body>
        <div class="conteudo" id="conteudo">
            <table>
                <tr>
                    <td colspan="2">
                        <label>beneficiario:</label>
                        <input type="text" id="beneficiario" >
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <label>endereco:</label>
                        <input type="text" id="endereco" >
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <label>decreto:</label>
                        <input type="text" id="decreto" >
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <label>lavrado em:</label>
                        <input type="text" id="lavrado_em" >
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <label>processo:</label>
                        <input type="text" id="processo" >
                    </td>
                </tr> 
                <tr>
                    <td colspan="2">
                        <label>planta:</label>
                        <input type="text" id="planta" >
                    </td>
                </tr> 
                <tr>
                    <td colspan="2">
                        <label>croquis:</label>
                        <input type="text" id="croquis" >
                    </td>
                </tr> 
                <tr>
                    <td colspan="2">
                        <label>area</label>
                        <input type="text" id="area" >
                    </td>
                </tr> 
                <tr>
                    <td colspan="2">
                        <label>prazo</label>
                        <input type="text" id="prazo" >
                    </td>
                </tr> 
                <tr>
                    <td colspan="2">
                        <label>finalidade</label>
                        <input type="text" id="finalidade" >
                    </td>
                </tr> 
                <tr>
                    <td colspan="2">
                        <label>conta partida:</label>
                        <input type="text" id="ContraPartida" >
                    </td>
                </tr> 
                <!--<tr>
                    <td>
                        <label><strong>CEP:</strong></label>
                        <input type="number" id="cep">
                    </td>
                    <td>
                        <label><strong>NUMERO:</strong></label>
                        <input type="number" id="numero">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label><Strong>TIPO:</Strong></label>
                        <select>
                            <option>Terreno</option>
                            <option>Casa</option>
                            <option>Predio</option>                                
                        </select>
                    </td>
                    <td>
                        <label><Strong>Tamanho</Strong></label>
                        <input type="number" id="tamanho">
                    </td>-->
                </tr>
            </table><br>
            <div class="but">
                <button class="boton" type="button" onclick="get_cadastro()">CADASTRAR</button>
            </div><br><br>
            <center><input type="file"></center>
        </div>
    </body>
    <%@include file="rodape.jsp"%>
</html>
