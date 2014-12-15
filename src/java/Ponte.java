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
public class Ponte extends HttpServlet {

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
        Opera_banco banco = new Opera_banco();
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
                case "ENDERECO":
                    response.getWriter().print(banco.pesquisa_endereco(v[1]));
                break;
                case "PRAZO":
                    response.getWriter().print(banco.pesquisa_Prazo(v[1]));
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
