import {
  Link
} from "react-router-dom"; 
import './css/Nav.css';
// Kommentar: Bättre med titel som props istället för kursnamn? Eftersom nav används för både litteraturinfo och kursinfo.
function Nav(kursnamn) {

console.log(kursnamn);

  return (
    <div>
      <div> 
        <Link to={"../"}> <div> &lt; </div></Link> {/* TODO: Hitta "ett steg bakåt"istället för homepage*/}
      </div>
      <div>
        <p>{kursnamn.header}</p>
      </div>
    </div>
  );
}
export default Nav;
