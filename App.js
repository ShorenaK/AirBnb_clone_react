import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js"
console.log(data)


export default function App(){
    //hero
    data.map((com)=>{
    return (
        <div> 
            <Navbar />
            <Hero /> 
            < Card 
            id = {com.id}
            img= "katie-zaferes.png"
            rating={com.rating}
            reviewCount={com.reviewCount}
            location={com.location}
             title={com.title}
             price={136}    
            
            /> 
        </div>

    )
})
}