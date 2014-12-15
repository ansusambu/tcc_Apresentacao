
import java.sql.PreparedStatement;
import java.sql.ResultSet;
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
public class Opera_banco {
    
    String cabecalho="<table class='dado' id='dados'><tr><th>Beneficio</th><th>Endereco</th><th>Decreto</th><th>Lavrado_em</th><th>Processo</th><th>Planta</th>"
            +"<th>Croquis</th><th>Area</th><th>Prazo</th><th>Finalidade</th><th>Contra Partida</th><th>Localiza_Mapa</th></tr>";
    
    public String pesquisa_endereco(String endereco){
        try{
            PreparedStatement smt = M_Coneta.get_conexao().prepareStatement("select *from imoveis where endereco = '"+endereco+"' order by linha");
            ResultSet rt = smt.executeQuery();
            String temp=cabecalho;
            int linha = 1;
            while(rt.next()){
                if(rt.getString(13)!=null && rt.getString(14)!=null ){
                    temp=temp+"<tr><td>"+rt.getString(2)+"</td><td>"+rt.getString(3)+"</td><td>"+rt.getString(4)+"</td>"
                        + "<td>"+rt.getString(5)+"</td><td>"+rt.getString(6)+"</td><td>"+rt.getString(7)+"</td>"
                        + "<td>"+rt.getString(8)+"</td><td>"+rt.getString(9)+"</td><td>"+rt.getString(10)+"</td>"
                        + "<td>"+rt.getString(11)+"</td><td>"+rt.getString(12)+"</td>"
                        + "<td><center><input type='image' onclick='localiza_map("+rt.getString(13)+","+rt.getString(14)+");'"
                        + "src='../css/image/lupa_procura.png'></center></td></tr>";
                }
                linha++;
            }
            temp=temp+"</table>";
            smt.close();            
            return temp;
            
        }catch(SQLException e){            
            return "deu errado no ("+e.getMessage()+")" ;
        }         
    }
    public String pesquisa_regiao(String a, int b){
        try{
            PreparedStatement smt = M_Coneta.get_conexao().prepareStatement("select *from imoveis where endereco = '"+a+"' order by linha");
            ResultSet rt = smt.executeQuery();
            if(rt.next()){
                smt = M_Coneta.get_conexao().prepareStatement("select *from imoveis where longitude >= '"+(Integer.parseInt(rt.getString(13))-b)+"'"
                        + "and longitude <='"+(Integer.parseInt(rt.getString(13))+b)+"' order by linha");
                rt = smt.executeQuery();                
            }else return "Regiao Invalida Ou sem Imovel Disponivel";
            String temp=cabecalho;
            int linha = 1;
            while(rt.next()){
                if(rt.getString(13)!=null && rt.getString(14)!=null ){
                    temp=temp+"<tr><td>"+rt.getString(2)+"</td><td>"+rt.getString(3)+"</td><td>"+rt.getString(4)+"</td>"
                        + "<td>"+rt.getString(5)+"</td><td>"+rt.getString(6)+"</td><td>"+rt.getString(7)+"</td>"
                        + "<td>"+rt.getString(8)+"</td><td>"+rt.getString(9)+"</td><td>"+rt.getString(10)+"</td>"
                        + "<td>"+rt.getString(11)+"</td><td>"+rt.getString(12)+"</td>"
                        + "<td><center><input type='image' onclick='localiza_map("+rt.getString(13)+","+rt.getString(14)+");'"
                        + "src='../css/image/lupa_procura.png'></center></td></tr>";
                }
                linha++;
            }
            temp=temp+"</table>";
            smt.close();            
            return temp;
            
        }catch(SQLException e){            
            return "deu errado no ("+e.getMessage()+")" ;
        }  
    }
    
    public String pesquisa_Prazo(String prazo){
        try{
            PreparedStatement smt = M_Coneta.get_conexao().prepareStatement("select *from imoveis where prazo = '"+prazo+"' order by linha");
            ResultSet rt = smt.executeQuery();
            String temp=cabecalho;
            int linha=1;
           while(rt.next()){
                if(rt.getString(13)!=null && rt.getString(14)!=null ){
                    temp=temp+"<tr><td>"+rt.getString(2)+"</td><td>"+rt.getString(3)+"</td><td>"+rt.getString(4)+"</td>"
                        + "<td>"+rt.getString(5)+"</td><td>"+rt.getString(6)+"</td><td>"+rt.getString(7)+"</td>"
                        + "<td>"+rt.getString(8)+"</td><td>"+rt.getString(9)+"</td><td>"+rt.getString(10)+"</td>"
                        + "<td>"+rt.getString(11)+"</td><td>"+rt.getString(12)+"</td>"
                        + "<td><center><input type='image' onclick='localiza_map("+rt.getString(13)+","+rt.getString(14)+");'"
                        + "src='../css/image/lupa_procura.png'></center></td></tr>";
                }
                linha++;
            }
            temp=temp+"</table>";
            smt.close();            
            return temp;            
        }catch(SQLException e){            
            return "deu errado no ("+e.getMessage()+")" ;
        }               
    }
    
    public String insert(String[] valores){
        try{
            PreparedStatement stmt = M_Coneta.get_conexao().prepareStatement("insert into imoveis (beneficiario, endereco, decreto,"
                    +"lavradoem, processo, planta, croquis, area, prazo, finalidade, contrapartida )values(?,?,?,?,?,?,?,?,?,?,?)");
            stmt.setString(1, valores[0]);
            stmt.setString(2, valores[1]);
            stmt.setString(3, valores[2]);
            stmt.setString(4, valores[3]);
            stmt.setString(5, valores[4]);
            stmt.setString(6, valores[5]);
            stmt.setString(7, valores[6]);
            stmt.setString(8, valores[7]);
            stmt.setString(9, valores[8]);
            stmt.setString(10, valores[9]);
            stmt.setString(11, valores[10]);
            //stmt.setString(12, valores[11]);
            stmt.execute();
            stmt.close();
            return "cadastrado com sucesso";
        }catch(SQLException e){
            return "Erro no cadastro"+e.toString();
        }        
    }
    
    public String actualiza_Coordenada(int linha, String latitude, String longitude){
        try{
            PreparedStatement stmt = M_Coneta.get_conexao().prepareStatement("update imoveis set latitude='"+latitude+"', longitude='"
            +longitude+"' where linha="+linha);                     
            stmt.execute();
            stmt.close();
            return "Coordenadas atualizada com sucesso na linha = "+linha+" do banco";
        }catch(SQLException e){
            return "Erro atualização de coordenadas";
        }        
    }  
}
