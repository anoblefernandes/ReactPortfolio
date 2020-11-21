import Home from "./pages/home"
import Contact from "./pages/contact"
import './App.css';
import Navbar from "./components/navbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
  <Router>
    <Navbar/>
    <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/contact" component = {Contact}/>
    </Switch>
  </Router>
  );
}

export default App;
