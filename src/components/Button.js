import {
  Link,
} from "react-router-dom"; 
import toUrl from './toUrl'
import '../css/Button.css';

  const Button = ({objekt, isLiterature}) => {
    if(objekt === undefined){// Om inga kurser finns i ex förkunskaper
      return (<div></div>);
    }
    else if(isLiterature){

  }
    else{
        return (
        <div>
          <Link to= {"./" + toUrl(objekt.namn)}>  <div className= 'divStyle'><div className='FIXATEXT'>{objekt.namn}</div> <div className = 'arrow'> &gt; </div></div></Link>
          <br/>
        </div>
        );
      
    }
}
export default Button;

