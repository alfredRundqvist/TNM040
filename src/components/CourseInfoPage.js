import Nav from './Nav'
import SearchPath from './SearchPath';
import { useParams } from 'react-router';
import courseData, { getObjectFromCode } from '../data/courseData';
import Header from './Header';
import litteratureData from '../data/litteratureData';
import Button from './Button';
import bok from '../images/Bok.png';
import penna from '../images/Penna.png';
import qm from '../images/questionmark.png';
const CourseInfoPage = ({props}) => {

const {code} = useParams();
const theCourse = getObjectFromCode(code);

const containerStyle = {
    margin: "4%",
    display: "flex",
    flexDirection: "column",
    width: "96%",
   
};

const finnsEj = {
    textAlign: "center",
    fontSize: "3vh",
    color: "#4663AC"
}

let found1FortKurs = false;
let found1litteratur = false;
    const prerequisites = theCourse.forkunskaper.split(", ");
    return (
        <div>
            <Nav titel={theCourse.namn}/>
            <div style={containerStyle} >
                <SearchPath />
                <Header title="Kurslitteratur" src={bok} />
                {litteratureData.map(d => {
                    if (d.kurskoder === code){
                        found1litteratur = true;
                    }
                    return (
                        d.kurskoder === code? <Button rubrik={d.titel} url={code + "/" + d.titel} key={d.titel}/> : null
                        )
                    })}
                {
                found1litteratur === false? <div style={finnsEj}>Ingen kurslitteratur</div>: null
                }

                <Header title="Förkunskaper" src={penna}/>
                {prerequisites.map(d => {
                const object = getObjectFromCode(d);
                return (
                    object === undefined?<div style={finnsEj}>Inga förkunskaper</div>:<Button rubrik={object.namn} url={object.kurskod} key={object.namn} underrubrik={object.kurskod}/>
                )
                })}
                

                <Header title="Fortsättningskurser" src={qm}/>
                {courseData.map(d => {
                    const prerequisites = d.forkunskaper.split(", ");
                    const found = prerequisites.find(element => {return element === code});
                   if (found !== undefined) {
                    found1FortKurs = true;
                   };
                    return (
                        found !== undefined? <Button rubrik={d.namn} url={d.kurskod} underrubrik={d.kurskod} key={d.kurskod} />: null
                    )
                })}
                {
                found1FortKurs === false? <div style={finnsEj}>Inga fortsättningskurser</div>: null
                }
            </div>
        </div>
    )
};

export default CourseInfoPage;