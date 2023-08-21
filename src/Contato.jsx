import Frame from "./assets/Frame 1.png"
import Joao from "./components/Joao"

import Rodape from "./components/Foolter";
import './apps.css/'
import Libras from "./components/Libras";

function Contato(){
 return(
 <div>
         <Libras></Libras> 

  <div className="cabecalho bg-info">
        <h1>Matemágica</h1>
    <Joao/>
    </div>
 <div className="main">
   <br />
   
 <h1>Contato</h1>
 
 <div className="log bg-info" >
 <img src={Frame} alt="" height={300} width={170} />
 
 <p>Email:matemagica@fiap.com</p>
 <p>Instagram: @matemágica</p>
 </div>
 </div>
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
    <Rodape/>
 </div>
 )
}
export default Contato