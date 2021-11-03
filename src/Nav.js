import {
  Link
} from "react-router-dom"; 
function Nav(kursnamn) {

console.log(kursnamn);

  return (
    <div>
      <div> 
        <Link to={"../"}> <div> &lt; </div></Link>
      </div>
      <div>
        <p>{kursnamn.header}</p>
      </div>
    </div>
  );
}
export default Nav;
