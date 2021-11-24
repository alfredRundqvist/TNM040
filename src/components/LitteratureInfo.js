import Nav from './Nav'
import SearchPath from './SearchPath';
import { useParams } from 'react-router';
import { getLitteratureInfoFromCode } from '../data/litteratureData';
import Rating from './Rating'
import Rate from './Rate';


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
        border : "1px solid black",
    }
    
    const containerStyle = {
        margin: "5%",
       
    };

    const ratingStyle= {
        position: "absolute",
        left: "84%",
        width: "0",
    }
    const textStyle1 = {
        fontSize: "3vh",
        margin: "0",
        
    };

    const tableStyle = {
        textAlign: "left",
        position: "relative",
        top: "-10vh",
        width: "100%"
    };
    const columnStyle = {
        width: "60%",
        textAlign: "right",
        
    }

    const rateStyle = {
        position: "relative",
        top: "-5vh"
    };
const cellStyle = {
    verticalAlign: "top"
}

return(
    <div>
        <Nav titel={courseLitterature.titel}/>
        <div style={containerStyle}>

            <SearchPath /> 
            <div style={ImgDiv}>
                <img src={courseLitterature.url} alt="Bild saknas" style = {ImgStyleLitterature}/>
            </div>
            <div style={ratingStyle}>
                <Rating />
            </div>
            <div style={LitInfoDiv}>
                <span style={textStyle1}>
                    <p>Betyg:</p>
                    <p>Användbar? Vad tycker du?</p>
                </span>
                <div style={rateStyle}>
                    <Rate />
                </div>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={{fontSize: "7vh"}}>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={cellStyle}>{courseLitterature.typ +" titel: "}</td>
                            <td style={columnStyle}>{courseLitterature.titel}</td>
                        </tr>
                        <tr>
                            <td style={cellStyle}>Författare: </td>
                            <td style={columnStyle}>{courseLitterature.forfattare}</td>                    
                        </tr>
                        <tr>
                            <td style={cellStyle}>Upplaga: </td>
                            <td style={columnStyle}>{courseLitterature.upplaga}</td>
                        </tr>
                        <tr>
                            <td style={cellStyle}>Utgiven år: </td> 
                            <td style={columnStyle}>{courseLitterature.ar}</td>
                        </tr>
                        <tr>
                            <td style={cellStyle}>Utgivare: </td>
                            <td style={columnStyle}>{courseLitterature.forlag}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
    )
    
};

export default LitteratureInfo;