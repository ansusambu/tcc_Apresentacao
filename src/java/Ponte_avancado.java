/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author David
 */
public class Ponte_avancado extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Opera_banco_avancado banco = new Opera_banco_avancado();
        String temp = request.getParameter("valores");
        String[] v = temp.split("/");
        if(v.length > 10){           
            banco.insert(v);
            response.getWriter().print(banco.insert(v));
        }else{
             
            switch(v[0]){
                case "REGIAO":
                    String []tp;
                    try{
                        tp = v[1].split(",");
                        response.getWriter().print(banco.pesquisa_regiao(tp[0],Integer.parseInt(tp[1])));
                        
                    }catch(Exception e){
                        response.getWriter().print("Entrada Invalida tente regiao,raio");
                    }
                break;
                case "BENEFICIARIO":
                    response.getWriter().print(banco.pesquisa_Simples("beneficiario",v[1]));
                break;
                case "CONTRAPARTIDA":
                    response.getWriter().print(banco.pesquisa_Simples("contrapartida",v[1]));
                break;
                case "DECRETO":
                    response.getWriter().print(banco.pesquisa_Simples("decreto",v[1]));
                break;
                case "ENDERECO":
                    response.getWriter().print(banco.pesquisa_Simples("endereco",v[1]));
                break;
                case "FINALIDADE":
                    response.getWriter().print(banco.pesquisa_Simples("finalidade",v[1]));
                break;  
                case "PRAZO":
                    response.getWriter().print(banco.pesquisa_Simples("prazo",v[1]));
                break;
                case "PLANTA":
                    response.getWriter().print(banco.pesquisa_Simples("planta",v[1]));
                break;
                case "ATUALIZA":
                    response.getWriter().print( banco.actualiza_Coordenada(Integer.parseInt(v[1]),v[2],v[3]));                    
                break;
                case "REMOVER":
                    response.getWriter().print(banco.remove(Integer.parseInt(v[1])));
                break;
                case "ATUALIZA_TODOS":
                    String t="";
                    for(int a=1; a<v.length; a++){
                        t=t+v[a];
                    }
                    response.getWriter().print(banco.atualiza_todos(t));
                break;
                    
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
