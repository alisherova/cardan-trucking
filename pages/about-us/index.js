import React from 'react'
import FirstSection from './FirstSection'
import Navbar from '../../components/Navbar'
import Contact from './Contact'
import Footer from '../../components/Footer'
function index() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
      <FirstSection/>
        <Contact/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default index