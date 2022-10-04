import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Event from './components/Event/Event';
import Create from './components/Create/Create';




function App() {
  return (
    <Router>      
      <Switch>
        <Route path="/" element={<Home/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/create" element={<Create/>}/>
      </Switch>
    </Router>
  );
}

export default App;
