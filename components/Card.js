import React from 'react'

export default function Card(props) {
    let badgeText
  if(props.openSpot === 0 ){
    badgeText = "SOLD OUT"
  }else if(props.location === "Online"){
      badgeText = "ONLINE"
  }



  return (
    <div className='card'>
       {badgeText && <div className="card--badge">{badgeText}</div>}
         <img src={`../images/{props.img}`} alt="photo"  className='card__image'/>
        <div className='card__stats'> 
         <img src="../images/star.png" alt="star icon picture" className="card__star"/> 
         <span className='span'> {props.rating}</span>   
         <span className='span'> ({props.reviewCount})</span>  
         <span className='span'> {props.country}</span> 
         </div>
         <p> {props.title}</p>
        <p> <span className='bold'> From {props.price} </span>/ person </p>
    </div>
  )
}
