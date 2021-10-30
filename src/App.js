import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from "./components/Card";
import Forms from "./components/Form";
import Home from "./components/Home";

function App() {

  return (
    <Router>
    <div className="container mx-auto my-4">
      
        <Link to="/form">
        <div className="text-right text-blue-500 underline">Form</div>
        </Link>
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cardDetails/:id">
          <Card />
        </Route>
        <Route path="/form">
          <Forms />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
