import Nav from './Nav'
import SearchPath from './SearchPath';
import { useParams } from 'react-router';
import { getLitteratureInfoFromCode } from '../data/litteratureData';
import Header from './Header';
import litteratureData from '../data/litteratureData';
import qm from '../images/questionmark.png';

const ImgDiv = {
    display : "flex",
    justifyContent : "space-evenly",
    paddingTop : "4vh",
    maxWidth : "250px",
    margin : "auto",
}

const LitInfoDiv = {
    textAlign : "center",
    color : "#4663AC"
}

const ImgStyleLitterature = {
    width : "100%",
    border : "1px solid black"
}

const containerStyle = {
    margin: "5%",
   
};

const LitteratureInfo = ({props}) => {

    const {code} = useParams();
    const {title} = useParams();
    const litteratureArray = getLitteratureInfoFromCode(code);
    let courseLitterature = "nothing";

    for(let i = 0; i < litteratureArray.length; i++){
        if(title === litteratureArray[i].titel){
            courseLitterature = litteratureArray[i];
            break;  
        }
    }

return(
    <div>
        <Nav titel={courseLitterature.titel}/>
        <div style={containerStyle}>

            <SearchPath /> 
            <div style={ImgDiv}>
                <img src={courseLitterature.url} alt="Bild saknas" style = {ImgStyleLitterature}/>
            </div>
            <div style={LitInfoDiv}>
                <p>{courseLitterature.typ +" titel: " + courseLitterature.titel}</p>
                <p>{"Författare: " + courseLitterature.forfattare}</p>
                <p>{"Upplaga: " +courseLitterature.upplaga +", utgiven år: "+ courseLitterature.ar}</p>
                <p>{"Utgivare: " + courseLitterature.forlag}</p>
            </div>
            
        </div>
    </div>
    )
    
};

export default LitteratureInfo;