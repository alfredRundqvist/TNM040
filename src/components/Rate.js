import '../css/slider.css'
const Rate = ({props}) => {
 
    const containerStyle={

    };

    const starStyle = {
        
        fill: "#4663AC66",
       
        
        
    }
    const updateValue = (e) => {
        document.getElementById("valueContainer").innerHTML =  e.target.value;
        
    }
    const handleSubmit = (e) => {
        let thisId = parseInt(e.target.id);
        console.log(thisId);
        for (let id = 1; id <= thisId; id++){

            document.getElementById(id).style.fill = "#4663ACff";

        }
        for (let id= thisId+1; id <= 5; id++){
            document.getElementById(id).style.fill = "#4663AC66";
        }
    }
    
    return (
        <div>
           <svg style={containerStyle}> 
            <g transform="translate(25,35)">
                <polygon id="1" onClick={handleSubmit} style={starStyle} points="25,2.5 10,49.5 47.5,19.5 2.5,19.5 40,49.5"  />
                
                <g transform="translate(50,0)">
                    <polygon id="2" onClick={handleSubmit} style={starStyle}points="25,2.5 10,49.5 47.5,19.5 2.5,19.5 40,49.5"  />
                    <g transform="translate(50,0)">
                        <polygon  id="3" onClick={handleSubmit} style={starStyle}points="25,2.5 10,49.5 47.5,19.5 2.5,19.5 40,49.5"  />
                        <g transform="translate(50,0)">
                            <polygon id="4"  onClick={handleSubmit}style={starStyle} points="25,2.5 10,49.5 47.5,19.5 2.5,19.5 40,49.5"  />
                            <g transform="translate(50,0)">
                                <polygon id="5"  onClick={handleSubmit}style={starStyle} points="25,2.5 10,49.5 47.5,19.5 2.5,19.5 40,49.5"  />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
            </svg>
        </div>
    );
};

export default Rate;