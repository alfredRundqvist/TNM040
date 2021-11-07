
import Button from './Button'
import GetCourseFromName from './getCourseFromName'

const listLiteratur = (corse) =>{
    const theCorse = corse.titel

const testStyle = {
    textAlign: "center",
    color: "#32436C",
    fontSize: "3vh",
    paddingBottom: "0.5vh"
}

return(
    <div>
        <div style={testStyle}>Litteratur</div>
        {splitCorses.map((corseN) => ( <Button objekt = {GetCourseFromName(corseN)} key = {corseN}/>) )}
    </div>
    );
}
export default listLiteratur;