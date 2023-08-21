import Joao from "./components/Joao";
import Cards from "./components/Cards";
import Rodape from "./components/Foolter";
import './apps.css/';
import Libras from "./components/Libras";


function Produtos(){
 return(
 <div>
         <Libras></Libras> 

 <div className="cabecalho bg-info">
        <h1>Matemágica</h1>
    <Joao/>
    </div>
 <div className="hzin">
 <h3>Nossos aulas</h3>
 </div>
 <br />
    <Cards/>
    <br />
   <br />
   <br />
   <br />
   <br />
 <Rodape/>
 </div>
 )
}
export default Produtos
