import React from 'react';
import './App.css';
import Navbar from './navbar';
import Register from './register';
import Contact from './contact';
import About from './about';
import Footer from './footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {


  return (
    <Router>

      <div className="App">
        <Navbar />
        <switch>
          <Route path="/" exact component={home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />
        </switch>
        <Footer/>
      </div>
    </Router>
  );
}
const home = () => {

  return(
  <div className="App">
    <h1>Home Page</h1>
  </div>
  );
}
export default App;
