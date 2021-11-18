import "./App.scss"
import React from 'react'
import Header from './components/Header/Header.jsx'
import {Route,Switch,withRouter} from "react-router-dom"
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Faq from './pages/Faq/Faq.jsx';
import Values from './pages/Values/Values.jsx';
import Share from "./pages/Share/Share.jsx";
import Footer from "./components/Footer/Footer";
import Apply from "./pages/Apply/Apply";
import Appointment from "./pages/Appointment/Appointment";


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/share" component={Share} />
        <Route exact path="/values" component={Values} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/apply" component={Apply}></Route>
        <Route exact path="/appointment" component={Appointment}></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default withRouter(App);
