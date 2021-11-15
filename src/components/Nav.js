import {
  useHistory,
  Link
} from "react-router-dom"; 
import '../css/Nav.css';


const Nav = ({titel}) => {
//const history = useHistory()

const linkStyle = {
  textDecoration: "none",
  color: "#4663AC",
};

const path = window.location.pathname;
const pathDepth = path.split("/").length;
let url;
if (pathDepth === 1){
  url = "/";
}
else if (pathDepth === 2){
  url = "/";
}
else {
  url = "/" + path.split("/")[1];
}
console.log(url);
//onClick={() => history.goBack()
  return (
    <div className = 'nav-div'>  
    <Link style={linkStyle} to={url}><div className = 'div-back'> &lt; </div></Link>
      <div className = 'div-header'>
        {titel}

      </div>
    </div>
  );
}
export default Nav;

