import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import FirstPage from './components/FirstPage.js';

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
            <p>Kursinfosida</p>
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
