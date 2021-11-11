import { Link } from "react-router-dom";
import fromUrl from './fromUrl'
import { getObjectFromCode } from "../data/courseData";
import { getLitteratureInfoFromCode } from "../data/litteratureData";
const SearchPath = ({props}) => {
    // Hämtar den aktuella sökvägen och delar upp den i en array vid varje '/'
    const path = window.location.pathname;
    const pathComponents = path.split("/");
    const code = pathComponents[1];
    
    const linkStyle = {
        textDecoration: "none",
        color: "#4663AC",
       
    }

    return (
        <div>
            {pathComponents.map((d,i) => {
                if (i === 0){
                    return  <Link key={i} to="/" style={linkStyle}>Sök/</Link>;
                }
                else if (i === 1){
                    // ../ för att sökvägen ska länka rätt
                    const theCourse = getObjectFromCode(d);
                    return <Link key={i} to={"../" + d} style={linkStyle}>{theCourse.namn}/</Link>
                }
                else if ( i === 2){
                    // Fullösning som funkar! Hämtar lista på litteratur med kurskoden "code", sparar de kurser som har titel med samma första och sista bokstav som finns i sökvägen.
                    // Funkar så länge två böcker i samma kurs inte börjar och slutar på samma bokstäver eller börjar /slutar på å,ä,ö.
                    const littArray = getLitteratureInfoFromCode(code);
                    const litt = littArray.filter(e => e.titel[0] === pathComponents[2][0] && e.titel[e.titel.length-1] === pathComponents[2][pathComponents[2].length-1]);
                    console.log(litt);
                    return <Link key={i} to={d} style={linkStyle}>{litt[0].titel}</Link>
                }
                return null;
            
            })}
        </div>
    )
};

export default SearchPath;