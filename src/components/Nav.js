import {
  useHistory,
} from "react-router-dom"; 
import '../css/Nav.css';

const Nav = ({titel}) => {
const history = useHistory()


  return (
    <div className = 'nav-div'>  
   <div onClick={() => history.goBack()} className = 'div-back'> &lt; </div>
      <div className = 'div-header'>
        {titel}
      </div>
    </div>
  );
}
export default Nav;

