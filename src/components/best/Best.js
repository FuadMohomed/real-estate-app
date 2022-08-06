import React from 'react'
import './Best.css'
import Apt1 from '../../images/house17.jpg'
import Apt2 from '../../images/house13.jpg'
import Apt3 from '../../images/house12.jpg'

function Best() {
  return (
    <div className='best'>
        <h1>Find BEST Rated Properties</h1>
        <div>
            <p><span className='bold'>All</span></p>
            <p>commercial</p>
            <p>Residential</p>
            <p>Agriculture</p>
        </div>
        <div className='container'>
       <img src={Apt1} alt='1 house'/>
       <img src={Apt2} alt='2 house'/>
       <img src={Apt3} alt='3 house'/>
        </div>
        <button className='btn'>View All</button>
    </div>
  )
}

export default Best