import "./App.scss"
import React,{useState,useEffect} from 'react'
import Header from './components/Header/Header.jsx'
import {Route,Switch,withRouter} from "react-router-dom"
import Home from './pages/PC/Home/Home.jsx';
import HomeMobile from "./pages/mobile/HomeMobile/HomeMobile";
import About from './pages/PC/About/About.jsx';
import Faq from './pages/PC/Faq/Faq.jsx';
import Values from './pages/PC/Values/Values.jsx';
import Share from "./pages/PC/Share/Share.jsx";
import Footer from "./components/Footer/Footer";
import Apply from "./pages/PC/Apply/Apply";
import Appointment from "./pages/PC/Appointment/Appointment";


function App() {
  // 初始值设置为不是移动端
const [isMobile, setIsMobile] = useState(false);

const ua = navigator.userAgent.toLowerCase();
let agents = ['iphone', 'ipad', 'ipod', 'android', 'linux', 'windows phone']; // 所有可能是移动端设备的字段

useEffect(() => {
    for (let i = 0; i < agents.length; i++) {
      if (ua.indexOf(agents[i]) !== -1) {
        setIsMobile(true);
      }
    }
},[]);
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={isMobile?HomeMobile:Home}/>
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
