const Rating = ({props}) => {
    


    const svgStyle = {
        backgroundColor: "#0000",
        overflow: "visible",
        width:  "1px",
        fill: "#4663AC",
        
    };

    const textStyle = {
        fill: "white",
        fontSize: "5vh",
        
    };


    return (
        <div>
            <svg style={svgStyle} width="100px" height="100px">
           
                    <circle cx="0" cy="0" r="7vh" />
                    <text x="-7vw" y="1.5vh" style={textStyle}>4/5</text>
            </svg>
        </div>
    );
}

export default Rating;