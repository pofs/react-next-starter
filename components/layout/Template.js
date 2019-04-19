import React from 'react'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import '../../assets/stylesheets/application.scss'

const Template = ({ children }) => (
  <React.Fragment>
    <Head />
    <div className="wrapper">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  </React.Fragment>
)

export default Template
