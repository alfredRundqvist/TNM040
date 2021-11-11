import { Link } from "react-router-dom";
import fromUrl from './fromUrl'
import { getObjectFromCode } from "../data/courseData";
import { getLitteratureInfoFromCode } from "../data/litteratureData";
const SearchPath = ({props}) => {
    // Hämtar den aktuella sökvägen och delar upp den i en array vid varje '/'
    const path = window.location.pathname;
    const pathComponents = path.split("/");
    
    const linkStyle = {
        textDecoration: "none",
        color: "#4663AC"
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
                    const regex = /%20/ig;
                    
                    return <Link key={i} to={d} style={linkStyle}>{d.length < 25? d: d.slice(0,25).replaceAll(regex, " ") + "..."}</Link>
                }
                return null;
                // TODO: Lägg till länk om i == 2, dvs litteraturinfosidan
                // TODO: Eventuellt, ändra kurskod till kursnamn
            })}
        </div>
    )
};

export default SearchPath;