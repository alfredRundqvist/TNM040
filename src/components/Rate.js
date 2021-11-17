import '../css/slider.css'
const Rate = ({props}) => {
    const sliderStyle = {
        width: "50%",
        backgroundColor: "#a0a5bf",
        background: "#a0a5bf",
        outline: "none",
        appearance: "none",
        borderRadius: 8
          
    }

    const starStyle = {
        width: "100",
        height: "100",
        fill: "#4663AC",
        position: "relative",
        top: 30,
        overflow: "visible"
        
        
    }
    const updateValue = (e) => {
        document.getElementById("valueContainer").innerHTML =  e.target.value;
        
    }
    const handleSubmit = () => {
       
    }
    
    return (
        <div>
            
            <input type="range" min="1" max="5" style={sliderStyle} onInput={updateValue} className="slider"/>
            <svg height="210" width="500" style={starStyle} className="button" onClick={() => handleSubmit()}>
                <polygon points="50,5 20,99 95,39 5,39 80,99"  />
            </svg>
            <p id="valueContainer" style={{fontSize: "7vh",}}>5</p>
            
        </div>
    );
};

export default Rate;