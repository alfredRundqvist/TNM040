import Nav from './Nav'
import SearchPath from './SearchPath';
import { useParams } from 'react-router';
import { getObjectFromCode } from '../data/courseData';
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
    margin: "5%",
    display: "flex",
    flexDirection: "column",
   
};


    return (
        <div>
            <Nav titel={theCourse.namn}/>
            <div style={containerStyle} >
                <SearchPath />
                <Header title="Kurslitteratur" src={bok} />
                {litteratureData.map(d => {
                    return (
                        d.kurskoder === code? <Button rubrik={d.titel} url={code + "/" + d.titel} key={d.titel}/>:null
                        )
                    })}
                <Header title="Förkunskaper" src={penna}/>
                <Header title="Fortsättningskurser" src={qm}/>
            </div>
        </div>
    )
};

export default CourseInfoPage;