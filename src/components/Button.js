import {
  Link,
} from "react-router-dom"; 
import toUrl from './toUrl'

  const Button = ({rubrik, underrubrik, url}) => {
  const divStyle = {
    height: "10vh", 
    backgroundColor: "#DCF0FF",
    textAlign: "center",
    marginTop: "4%",
    width: "95%",
    borderRadius: "10px",
    boxShadow: "5px 5px 5px #4663AC33",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }

  const LinkStyle = {
    color: "#4663AC",
    textDecoration: "none"
    
  }
  

  return (

    <Link to= {"./" + url} style={LinkStyle}>
    <div style = {divStyle}>
      <span>{rubrik}</span>
      
      {underrubrik !== undefined? <span>{underrubrik}</span> : null}
      

    </div>
    </Link>
  );
}
export default Button;

