import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
//import Daftarr from './components/Navbar/Daftarr'
import NotFound from './pages/NotFound/NotFound'
import Register from './pages/Regis/Register'
import Tentang from './pages/Tentang/Tentang'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          
          <Route path="/Login" exact component={Login}/>
           <Route path="/Register" exact component={Register}/>
           <Route paht="/Tentang" exact component={Tentang}/>
           <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
