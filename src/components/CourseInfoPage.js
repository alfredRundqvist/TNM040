import Nav from './Nav'
import SearchPath from './SearchPath';
import GetCourseFromUrl from './getCourseFromUrl'
import ListForkunskaper from './listForkunskaper'

const CourseInfoPage = ({props}) => {

const theCourse = GetCourseFromUrl()
    return (
        <div>
            <Nav key = {theCourse.namn} titel = {theCourse.namn}/>
            <SearchPath />
          <ListForkunskaper titel = {theCourse.forkunskaper} key = {theCourse.kurskod}/>
        </div>
    )
};

export default CourseInfoPage;