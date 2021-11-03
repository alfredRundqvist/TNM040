import courseData from '../data/courseData';
import React, {useState} from 'react';

const FirstPage = ({props}) => {
    const [searchString, setSearchString] = useState("");
    
    function handleInput(e) {
        const input = e.target.value;
        setSearchString(input);
    };
    
    // TODO: centrera logga
    const imageStyle = {
        position: "absolute",
        top: "25%",
    };

    const containerStyle = {
        width: "90%",
        margin: "0 auto",

    };
    // Resultat modul properties
    const resultStyle = {
        display: "flexbox",
        flexDirection: "column",
        position: "absolute",
        top: "55%",
        color: "rgba(70, 99, 172, 1)",
    }
        
    // TODO: Input är ej helt centrerad
    const inputStyle = {
        fontSize: "large",
        borderRadius: "10px",
        height: "30px",
        border: "1px solid rgba(210, 222, 235, 1)",
        boxShadow: "3px 3px 10px #0005" , 
        padding: "5px",
        color: "rgba(70, 99, 172, 1)",
        position: "absolute",
        top: "50%",
        width: "85%",         
       

    }
   
        
    

    // TODO: Om vi vill ha filter behöver vi lägga till info i courseData, t.ex. huvudområde, termin m.m.
    const resultList = courseData.map((d) => {
        const courseName = d.namn.toLowerCase();
        const courseCode = d.kurskod.toLowerCase();
        const searchStringLower = searchString.toLowerCase();
        const indexSubstrName = courseName.indexOf(searchStringLower);
        const indexSubstrCode = courseCode.indexOf(searchStringLower);
        
        if ((indexSubstrName !== -1 || indexSubstrCode !== -1) && searchStringLower !== ""){
            return d;
        }
        else {
            return null;
        }
    });

    return (
        <div style={containerStyle}>
            <div>
                {/* TODO: Lägg till src för logga och positionera */}
                <img alt="LOGGA" style={imageStyle}/>
                <br />
                <input type="text" style={inputStyle} placeholder="Sök efter kurs" onChange={handleInput}></input>
            </div>
            <div style ={resultStyle}>
                {/* Om sökfältet är tomt vill vi inte visa "resultat" */}
                {searchString === ""? null: <p>Resultat</p>}
                {/* Gå igenom resultatlistan och skriv ut kursmoduler */}
                {resultList.map(d => {
                    return (
                        d !== null?<p>{d.namn}</p>:null
                    )
                })}
            </div>
        </div>
    )
};


export default FirstPage;