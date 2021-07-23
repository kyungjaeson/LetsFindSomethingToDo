import React from 'react'
import './App.css';
import Landing from './pages/Landing';
import EventPage from './pages/EventPage';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Event from './components/Event';

function App() {
  const LinkyPoo = () => {
    let {id} = useParams();
    {console.log(id)}
    return (
      <div>
        <Event id={id} />
      </div>
    )
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/eventDetail/:id" component={LinkyPoo} />
          <Route path="/">
            <Landing />
            <EventPage />
          </Route>
        </Switch>  
      </Router>
      
    </div>
  );
}

export default App;
