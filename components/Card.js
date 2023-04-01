import React from 'react'

export default function Card() {
  return (
    <div className='card'>
         <img src="../images/katie-zaferes.png" alt="photo"  className='card__image'/>
        <div className='card__stats'> 
         <img src="../images/star.png" alt="star icon picture" className="card__star"/> 
         <span className='spna'> 5.0</span>   
         <span className='spna'> (30)</span>  
         <span className='spna'>  USA </span> 
         </div>
         <p> Life lesson with Katie Zaferes</p>
        <p> <span className='bold'> From $125 </span>/ person </p>
    </div>
  )
}
