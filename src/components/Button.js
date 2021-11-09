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
    boxShadow: "5px 5px 5px #4663AC33"
  }

  const LinkStyle = {
    color: "#4663AC",
    textDecoration: "none"
    
  }

  return (
    // Jag tänker att kurskod vore bättre att ha som URL. Kortare och slipper konvertera. /Alfred
    <Link to= {"./" + url} style={LinkStyle}>
    <div style = {divStyle}>
      <span>{rubrik}</span>
      <br />
      <br/>
      {underrubrik !== undefined? <span>{underrubrik}</span> : null}
      

    </div>
    </Link>
  );
}
export default Button;

