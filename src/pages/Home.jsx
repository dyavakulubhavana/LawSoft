import React from 'react';
import NavBar from '../features/navbar/Navbar';
import { Slideshow } from '../features/slideshow/Slideshow';
import { Footer } from '../features/footer/Footer';
import InfoGrid from '../features/card/InfoCard';
import ImgCard from '../features/card/ImgCard';

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Slideshow></Slideshow>
      <div className='p-12 space-y-10'>
        <InfoGrid></InfoGrid>
        <ImgCard></ImgCard>
      </div>
      <Footer></Footer>

    </div>
  )
}

export default Home
