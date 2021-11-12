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


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/share" component={Share} />
        <Route path="/values" component={Values} />
        <Route path="/faq" component={Faq} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default withRouter(App);
