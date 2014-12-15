
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author David
 */
public class M_Coneta {
    
    private static Connection coneta;
    
    private M_Coneta(){        
    }
    public static Connection get_conexao(){
        if(coneta==null){
            try {
                Class.forName("org.postgresql.Driver");
                coneta = DriverManager.getConnection("jdbc:postgresql://localhost:5432/ImoveisDaPrefeituraSP","postgres","12345");
            }
            catch(ClassNotFoundException | SQLException d)
            {
                System .out.println("ERRO DE CONEXÂO");
            }
        } 
        return coneta;
    }
    
}
