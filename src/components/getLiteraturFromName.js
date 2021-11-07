
import courseData from '../data/courseData';

function GetCourseFromName(theName) {
  const theCourseData = courseData
  if(theName[0] === ' '){// Kan va space i början efter , -> "TNA001, TNA002"
    theName =  theName.substring(1)
  }
  const theCourse = theCourseData.find(element => element.kurskod === theName)
return(theCourse);
}
export default GetCourseFromName;

