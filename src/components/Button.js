import {
  Link,
} from "react-router-dom"; 
import toUrl from './toUrl'

  const Button = ({rubrik, underrubrik, url}) => {
  const divStyle = {
    height: "15vh", 
    backgroundColor: "#DCF0FF",
    textAlign: "center",
    marginTop: "4%",
    width: "95%",
    borderRadius: "10px",
    boxShadow: "3px 3px 5px #0008",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "3vh"
  }

  const LinkStyle = {
    color: "#4663AC",
    textDecoration: "none",
    
  }
  const arrowStyle={
    fontSize: "6vh"
  }

  const textBox = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "90%"
  }

  const underRubrikStyle = {
    // Om vi vill ändra position för kurskoden

  }
  return (

    <Link to= {"./" + url} style={LinkStyle}>
    <div style={divStyle}>
      <div style={textBox}>
        <span>{rubrik}</span>
        
        {underrubrik !== undefined? <span style={underRubrikStyle}>{underrubrik}</span> : null}
        

      </div>
      <div style={arrowStyle}>
        &gt;
      </div>
    </div>
    </Link>
  );
}
export default Button;

