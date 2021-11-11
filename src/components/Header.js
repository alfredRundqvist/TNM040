const Header = ({title, src}) => {
    
    const headerStyle = {
        // display: "inline-block",
        color: "#32436C",
        // position: "relative",
        // top: "-10px",
        fontSize: "3vh"
    }
    const imageStyle = {
      
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div style={containerStyle}>
            <img style={imageStyle} alt="image" src={src}/>
            <h1 style={headerStyle}>{title}</h1>
        </div>
    )
}

export default Header;