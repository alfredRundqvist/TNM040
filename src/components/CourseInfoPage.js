import Nav from './Nav'
import SearchPath from './SearchPath';
import { useParams } from 'react-router';
import { getObjectFromCode } from '../data/courseData';
const CourseInfoPage = ({props}) => {

const {code} = useParams();
const theCourse = getObjectFromCode(code);
console.log(theCourse);

    return (
        <div>
            <Nav titel={theCourse.namn}/>
            <SearchPath />
        </div>
    )
};

export default CourseInfoPage;