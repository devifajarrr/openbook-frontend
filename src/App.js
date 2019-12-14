import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import NotFound from './pages/NotFound/NotFound'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
