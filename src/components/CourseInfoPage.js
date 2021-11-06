import Nav from './Nav'
import SearchPath from './SearchPath';
import GetCourseFromUrl from './getCourseFromUrl'

const CourseInfoPage = ({props}) => {

const theCourse = GetCourseFromUrl()

    return (
        <div>
            <Nav key = {theCourse.namn} titel = {theCourse.namn}/>
            <SearchPath />
        </div>
    )
};

export default CourseInfoPage;