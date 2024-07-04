import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './sections/header'
import Home from './sections/home'
import Service from './sections/service'
import Menu from './sections/menu'
import About from './sections/about'
import Discount from './sections/discount'
import Contact from './sections/contact'
import Footer from './sections/footer'

import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header />
   <Home />
   <Service />
   <Menu />
   <About />
   <Discount />
   <Contact />
   <Footer />
  </React.StrictMode>,
)
