import './css/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import FirstPage from './components/FirstPage.js';
import CourseInfoPage from './components/CourseInfoPage';
function App() {

 


  return (
    <Router>
      <Switch>
        <Route path="/:code/:title">
            <p>Litteraturinfosida</p>
         
            {/*
              LITTERATURINFO
                HEADER
                SÖKVÄG
                LITTERATUR
            */}
        </Route>
        <Route path="/:code">
            <CourseInfoPage />
            {/* 
              KURSINFOSIDAN
                HEADER
                SÖKVÄG
                LITTERATURMODULER
                KURSMODULER
                ...
            */}
        </Route>
        <Route path="/">
          <FirstPage />
         
          
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
