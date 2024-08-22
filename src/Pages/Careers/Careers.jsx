import React from 'react'
import CareersSideBar from "../../components/CareersSideBar/CareersSideBar";
import RightSiderCareers from "../../components/RightSiderCareers/RightSiderCareers";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Careers.css"
const Careers = () => {
  return (
    <>
            <Navbar />
    <div className='careers-page'>
      <div className='Container-Spacing '>
            <CareersSideBar />
            <br />
            <RightSiderCareers />
            </div>
    </div>
    <Footer />

    </>
  )
}

export default Careers
