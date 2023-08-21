//import Carou from "./components/Caroussel";
import Libras from "./components/Libras";
import Cards from "./components/Cards";
import Rodape from "./components/Foolter";
//import Navbarproj from "./components/Navbarproj";
import './apps.css/'
import Frame from "./assets/Frame 1.png"
import Joao from "./components/Joao"



function Home() {
  return (
    <div className="body">
      <Libras></Libras> 
      <div className="cabecalho bg-info"> 
       <h2>Matemática fácil para pessoas carentes com deficiência auditiva</h2> 
      <Joao/>
    </div>

    <img className="img" src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
   
    
    <div className="joao bg-info">
    <p>Nossas aulas:</p>
    </div>
    <br />
    <Cards/>
    <br />
    
    <br />
    <Rodape/>
    </div>
    
  )
}

export default Home