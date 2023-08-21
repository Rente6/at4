import Alert from 'react-bootstrap/Alert';
import { InstagramLogo, TwitterLogo} from "@phosphor-icons/react";

function Rodape() {
  return (
    <>
      <div className="pedro bg-info">
    <p>@matenágica</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolor dicta aspernatur. Obcaecati labore quam id, iste et blanditiis est nisi quae provident ex facilis aperiam temporibus cupiditate culpa quisquam.</p>
    <InstagramLogo size={32} />
    <TwitterLogo size={32} />
    
    </div>


    </>
  );
}

export default Rodape;