import {
  useHistory,
} from "react-router-dom"; 
import '../css/Nav.css';


const Nav = ({titel}) => {
const history = useHistory()

const navStyle = {
      fontSize: "5vh",
};


  return (
    <div className = 'nav-div'>  
   <div onClick={() => history.goBack()} className = 'div-back'> &lt; </div>
      <div style={navStyle} className = 'div-header'>
        {titel}

      </div>
    </div>
  );
}
export default Nav;

