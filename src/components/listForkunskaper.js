
import Button from './Button'
import GetCourseFromName from './getCourseFromName'
const ListForkunskaper = (corses) =>{
    const allCorses = corses.titel
    let splitCorses = allCorses.split(',')

const testStyle = {
    textAlign: "center",
    color: "#32436C",
    fontSize: "3vh",
    paddingBottom: "0.5vh"
}

return(
    <div>
        <div style={testStyle}>Förkunskaper</div>
        {splitCorses.map((corseN) => ( <Button objekt = {GetCourseFromName(corseN)} key = {corseN}/>) )}
    </div>
    );
}
export default ListForkunskaper;