import courseData from '../data/courseData';
import React, {useState} from 'react';
import smartSearch, {addFilter} from '../functions/utils'
import Button from './Button';
import image from '../images/MTlogga3.png';
const FirstPage = ({props}) => {
    const [searchString, setSearchString] = useState("");
    const [filter, setFilter] = useState("");
    function handleInput(e) {
        const input = e.target.value;
        setSearchString(input);
    };
    
    // TODO: centrera logga
    const imageStyle = {
        position: "absolute",
        top: "10%",
        marginLeft: "4%",
        height: "35%",
        width: "90%",
        
    };

    const containerStyle = {
        width: "100%",
        margin: "auto",
        

    };
    // Resultat modul properties
    // TODO: Fixa style/properties på boxarna/moduler
    const resultStyle = {
        display: "flexbox",
        flexDirection: "column",
        position: "absolute",
        top: "65%",
        width: "96%",
        left: "4%",
        color: "rgba(70, 99, 172, 1)",
    }
     
    const inputStyle = {
        fontSize: "large",
        borderRadius: "10px",
        height: "30px",
        border: "1px solid rgba(210, 222, 235, 1)",
        boxShadow: "0px 0px 5px #4663AC" , 
        padding: "5px",
        color: "rgba(70, 99, 172, 1)",
        position: "absolute",
        top: "50%",
        width: "85%",
        marginLeft: "5%",        
    }
   

    

    // TODO: Om vi vill ha filter behöver vi lägga till info i courseData, t.ex. huvudområde, termin m.m.
    const resultList = courseData.map((d) => {
        const courseName = d.namn.toLowerCase();
        const courseCode = d.kurskod.toLowerCase();
        const searchStringLower = searchString.toLowerCase();
       // const indexSubstrName = courseName.indexOf(searchStringLower); // Kan substitueras med smart sökfunktion
        const indexSubstrCode = courseCode.indexOf(searchStringLower);
        
        let passedFilter = addFilter(filter, d);
        

        if (passedFilter){

            // Smart sökfunktion som känner igen stavfel med n antal bokstäver
            var found = smartSearch(courseName, searchStringLower, 1); // Smartsearch, enter full word, substring and depth of search
            
            if ((found || indexSubstrCode !== -1) && (searchStringLower !== "" || (passedFilter && filter !== ""))){
                return d;
            }
        }
        return null;
    });

const formStyle = {
        
        position: "absolute",
        top: "60%",
        left: "5%",
        fontSize: "4vh",
        color: "rgba(70, 99, 172, 1)",
        right: "5%"
    };
const selectStyle = {
    fontSize: "3vh", 
    color: "rgba(70, 99, 172, 1)",
    border: "1px solid rgba(210, 222, 235, 1)",
};

const selectStyle2 = {
    fontSize: "3vh", 
    color: "rgba(70, 99, 172, 1)",
    border: "1px solid rgba(210, 222, 235, 1)",   
    width: "100%"
}


const filterOptions = {
    visibility: "hidden",
};

const filterOptions2= {
    visibility: "hidden",
    display: "inline"
}


function changeFilter(e){
    if (e.target.value === "inget"){
        document.getElementById("filterOptions1").style.visibility = "hidden";
        document.getElementById("filterOptions2").style.visibility = "hidden";
        document.getElementById("result").style.top = "65%";
        setFilter("");
    }
    else if (e.target.value === "huvudomrade"){
        document.getElementById("filterOptions1").style.visibility = "visible";
        document.getElementById("filterOptions2").style.visibility = "hidden";
        document.getElementById("result").style.top = "70%";
        setFilter(document.getElementsByTagName("select")[2].value);
        
    }
    else if (e.target.value === "termin"){
        document.getElementById("filterOptions2").style.visibility = "visible";
        document.getElementById("filterOptions1").style.visibility = "hidden";
        document.getElementById("result").style.top = "65%";
        setFilter(document.getElementsByTagName("select")[1].value);
    }
    else {

    }
}

function filterResult(e) {
    setFilter(e.target.value);
};


    return (
        <div style={containerStyle}>
           
            <div>
            
                <img alt="LOGGA" src={image} style={imageStyle} />
                <br />
                <input type="text" style={inputStyle} placeholder="Sök efter kurs" onChange={handleInput}></input>
                <form style={formStyle}>
                    <label>Filter: </label>
                    <select style={selectStyle} onChange={changeFilter}>
                        <option value="inget">Inget filter</option>
                        <option value="termin">Termin</option>
                        <option value="huvudomrade">Huvudområde</option>
                    </select>
                    <div id="filterOptions2" style={filterOptions2}>
                        <select style={selectStyle} onChange={filterResult}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                    <div id="filterOptions1" style={filterOptions}>
                    <select style={selectStyle2} onChange={filterResult}>
                        <option value="datateknik">Datateknik</option>
                        <option value="datavetenskap">Datavetenskap</option>
                        <option value="elektroteknik">Elektroteknik</option>
                        <option value="fysik">Fysik</option>
                        <option value="grafisk design och kommunikation">Grafisk design och kommunikation</option>
                        <option value="industriell ekonomi">Industriell ekonomi</option>
                        <option value="informationsteknologi">Informationsteknologi</option>
                        <option value="matematik">Matematik</option>
                        <option value="medieteknik">Medieteknik</option>
                        <option value="programmering">Programmering</option>
                        <option value="teknisk fysik">Teknisk fysik</option>
                        <option value="tillämpad matematik">Tillämpad matematik</option>
                    </select>
                    </div>
                    
                </form>
            </div>
            <div id="result" style ={resultStyle}>
                {/* Om sökfältet är tomt vill vi inte visa "resultat" */}
                {searchString === ""? null: <p>Resultat</p>}
                {/* Gå igenom resultatlistan och skriv ut kursmoduler */}
                {resultList.map(kurs => {
                    return (
                        kurs !== null?<Button rubrik={kurs.namn} underrubrik={kurs.kurskod} url={kurs.kurskod} key = {kurs.kurskod}/>:null 
                    )
                                            
                })}
            </div>
        </div>
    )
};


export default FirstPage;