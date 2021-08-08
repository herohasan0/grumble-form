import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import FormIncident from './component/FormIncident';
import Thanks from './component/Thanks';

function App() {
  return (
    <Router>
     <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create-incident">
            <FormIncident />
          </Route>
          <Route path="/thank-you">
            <Thanks />
          </Route>
          <Route >
            <Redirect to="/create-incident" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
