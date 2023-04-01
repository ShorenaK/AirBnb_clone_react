import React from 'react'

export default function Card() {
  return (
    <div className='card'>
         <img src="../images/katie-zaferes.png" alt="photo"  className='card__image'/>
        <div className='card__stats'> 
         <img src="../images/star.png" alt="star icon picture" className="card__star"/> 
         <span> 5.0</span>   
         <span> (30)</span>  
         <span>  USA </span> 
         </div>
         <p> Life lesson with Katie Zaferes</p>
        <p> From $125 / person </p>
    </div>
  )
}
