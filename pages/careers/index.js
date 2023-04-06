import React from 'react'
import Navbar from '../../components/Navbar'
import CardsSection from './CardsSection'
import CareersSecondSection from './CareersSecondSection'
import FirstSection from './FirstSection' 
import Logos from './Logos' 
import Footer from '../../components/Footer'
function index() {
  return (
    <div>
       <header>
        <Navbar/>

       </header>
        <main>
            <FirstSection/>
            <Logos/>
            <CareersSecondSection/>
            <CardsSection/>
        </main>
        <footer>
          <Footer/>  
        </footer>
    </div>
  )
}

export default index