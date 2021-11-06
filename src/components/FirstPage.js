import courseData from '../data/courseData';
import React, {useState} from 'react';
import smartSearch from '../functions/utils'
import Button from './Button';

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
    // TODO: Fixa style/properties på boxarna/moduler
    const resultStyle = {
        display: "flexbox",
        flexDirection: "column",
        position: "absolute",
        top: "55%",
        color: "rgba(70, 99, 172, 1)",
    }
        
    // TODO: Input/searchbar är ej helt centrerad
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
       // const indexSubstrName = courseName.indexOf(searchStringLower); // Kan substitueras med smart sökfunktion
        const indexSubstrCode = courseCode.indexOf(searchStringLower);
        
        // Smart sökfunktion som känner igen stavfel med n antal bokstäver
        var found = smartSearch(courseName, searchStringLower, 1); // Smartsearch, enter full word, substring and depth of search
        
        if ((found || indexSubstrCode !== -1) && searchStringLower !== ""){
            return d;
        }
        return null;
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
                {resultList.map(kurs => {
                    return (
                        kurs !== null?<div><p key={kurs.kurskod}>{kurs.namn}</p> <Button objekt = {kurs} key = {kurs.namn}/> </div>:null 
                                            )
                                            
                })}
            </div>
        </div>
    )
};


export default FirstPage;