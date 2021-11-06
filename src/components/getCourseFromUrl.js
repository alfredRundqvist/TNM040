import {
  useParams
} from "react-router-dom"; 
import courseData from '../data/courseData';
import fromUrl from './fromUrl'

function GetCourseFromUrl() {
  const { code } = useParams();
  const theCourseData = courseData
  const codeWithSpace =  fromUrl(code) 
  return(theCourseData.find(element => element.namn === codeWithSpace));// Söker på namn
}
export default GetCourseFromUrl;

