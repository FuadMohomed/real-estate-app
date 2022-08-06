import React from 'react'
import { icons } from 'react-icons'
import {AiOutlineSearch} from 'react-icons/ai'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='content'>
        <h1>find the perfect place</h1>
        <p className='search-text'>
          search the largest selection of luxury high-rise apartments
         </p>
         <form className='search'>
           <div>
           <input type='text' placeholder='Enter Keyword...'></input>
           </div>
           <div className='radio'>
             <input type='radio' checked></input>
             <label>Buy</label>
             <input type='radio' ></input>
             <label>Rent</label>
             <button type='submit'><AiOutlineSearch className='icon'/>
             </button>
           </div>

         </form>

      </div>

    </div>
    
  )
}

export default Hero