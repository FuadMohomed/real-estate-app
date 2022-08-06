import React from 'react'
import './Featured.css'
import House1 from '../../images/house1.jpg'
import House2 from '../../images/house2.jpg'
import House3 from '../../images/house10.jpg'
import House4 from '../../images/house3.jpg'
import House5 from '../../images/house5.jpg'
import House6 from '../../images/house9.jpg'
import House7 from '../../images/house14.jpg'
import House8 from '../../images/house15.jpg'
import House9 from '../../images/house16.jpg'
import House10 from '../../images/house6.jpg'

function Featured() {
    
  return (
    <div className='featured'>
        <h1 className='featured-text'>Top Featured Listing</h1>
        <p className='featured-text'>Selected listings by city, State, and  Zip based on Views</p>
        <div className='container'>
            <img className='span-3 image-grid-row-2' src={House1} alt='1' />
            <img src={House2} alt='2' />
            <img src={House3} alt='3' />
            <img src={House4} alt='4' />
            <img src={House5} alt='5' />
            <div className='span-3 img-details'>
             <div className='top' >
                 <h2>123 Acme st. Dallas, Tx</h2>
                 <p>House for Sale</p>
                 <p className='price'> $2,677,000</p>
             </div>
             <div className='info-grid'>
                 <div>
                     <div className='info'>
                     <p className='bold'>Bedrooms:</p><p>5</p>
                     </div>
                     <div className='info'>
                     <p className='bold'>Bathrooms:</p><p>7</p>
                     </div>
                 </div>
                 <div>
                     <div className='info'>
                     <p className='bold'>Square Feet:</p><p>8,138</p>
                     </div>
                     <div className='info'>
                     <p className='bold'>Payment:</p><p>$14,797/month</p>
                     </div>
                 </div>
             </div>
            </div>
            <div className='span- right-img-details'>
                <p>A beautiful mordern day home in the city with a
                    full-size pool. Spacious and luxurious home located
                    in Texas. Including media room,Workout facility,
                    and built-in sauna.</p>
                <button className='btn'>View Listing</button>
            </div>
             </div>
             {/* second section */}
               <div className='container'>
            <img className='order-2' src={House7} alt='7' />
            <img className='order-3' src={House8} alt='8' />


 <img className='span-3 image-grid-row-2 order-1'src={House6} alt='6' />


            <img className='order-4' src={House9} alt='9' />
            <img className='order-5' src={House10} alt='10' />

             <div className='span-2 right-img-details order-7'>
                <p>A beautiful mordern day home in the city with a
                    full-size pool. Spacious and luxurious home located
                    in Texas. Including media room,Workout facility,
                    and built-in sauna.

                </p>
                <button className='btn'>View Listing</button>
            </div>


            <div className='span-3 img-details order-6'>
             <div className='top' >
                 <h2>123 Acme st. Dallas, Tx</h2>
                 <p>House for Sale</p>
                 <p className='price'> $2,677,000</p>
             </div>
             <div className='info-grid'>
                 <div>
                     <div className='info'>
                     <p className='bold'>Bedrooms:</p><p>5</p>
                     </div>
                     <div className='info'>
                     <p className='bold'>Bathrooms:</p><p>7</p>
                     </div>
                 </div>
                 <div>
                     <div className='info'>
                     <p className='bold'>Square Feet:</p><p>8,138</p>
                     </div>
                     <div className='info'>
                     <p className='bold'>Payment:</p><p>$14,797/month</p>
                     </div>
                 </div>
             </div>
            </div>
           
             </div>
    </div>
  )
}

export default Featured