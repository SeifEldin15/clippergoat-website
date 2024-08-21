import React from 'react'
import CareersSideBar from "../../components/CareersSideBar/CareersSideBar";
import RightSiderCareers from "../../components/RightSiderCareers/RightSiderCareers";
import "./Careers.css"
const Careers = () => {
  return (
    <div className='careers-page'>
            <CareersSideBar />
            <RightSiderCareers />
    </div>
  )
}

export default Careers
