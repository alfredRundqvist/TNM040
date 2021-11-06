import {
  Link,
} from "react-router-dom"; 
import toUrl from './toUrl'

  const Button = ({objekt}) => {
  const divStyle = {
    height: "10vh", 
    backgroundColor: "blue"
  }

  const LinkStyle = {
    backgroundColor: "green",
    height: "2vh"
  }
console.log(objekt.name + ":)))")

  return (
    <div style = {divStyle}>
 <Link to= {"./" + toUrl(objekt.namn)} style = {LinkStyle} >HEJ</Link>
 <p>Namn:{objekt.namn}</p>
    </div>
  );
}
export default Button;

