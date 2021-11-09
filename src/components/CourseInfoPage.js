import Nav from './Nav'
import SearchPath from './SearchPath';
import GetCourseFromUrl from './getCourseFromUrl'
// Det inom kommentar kan användas om vi använder kurskod som "code" istället för titel.
//import { useParams } from 'react-router';
//import { getObjectFromCode } from '../data/courseData';
const CourseInfoPage = ({props}) => {

const theCourse = GetCourseFromUrl()
//const {code} = useParams();
//const theCourse = getObjectFromCode(code);

    return (
        <div>
            <Nav titel={theCourse.namn}/>
            <SearchPath />
        </div>
    )
};

export default CourseInfoPage;