import './css/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import FirstPage from './components/FirstPage.js';
import CourseInfoPage from './components/CourseInfoPage';
import LitteratureInfo from './components/LitteratureInfo';
function App() {

 


  return (
    <Router>
      <Switch>
        <Route path="/:code/:title">
            <LitteratureInfo />
        </Route>
        <Route path="/:code">
            <CourseInfoPage />
        </Route>
        <Route path="/">
          <FirstPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
