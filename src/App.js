import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// PAGES
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Launches from "./screens/Launches";


function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/launches" component={Launches} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
