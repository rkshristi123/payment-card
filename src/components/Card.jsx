import React from "react"
import Crdcomp from "./Crdcomp"



const  card=[
    {
        date:"12/3/2022",
        logo: " https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png ",
        heading:"case study" ,
        gift: "Amzon Gift " ,
        subheading :"Pay" ,
        devices:"desktop - Mobile" ,
        color:"orange"

    },
    {
        date:"25/8/2020",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg ",
        heading:"case study" ,
        gift: "Apple Gift " ,
        subheading :"Payment" ,
        devices:"MacOs - Mobile" , 
        color:"lightblue"
        
    },

    {
        date:"14/8/2020",
        logo: "https://cdn-icons-png.flaticon.com/512/49/49004.png ",
        heading:"case study" ,
        gift: "Flipkart Gift " ,
        subheading :"Payment" ,
        devices:"desktop - Mobile" , 
        color:"lightpink"
        
    },
    {
        date:"18/8/2022",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png ",
        heading:"case study" ,
        gift: "Myntra Gift " ,
        subheading :"Pay" ,
        devices:"desktop - Mobile" ,
        color:"lightgreen"

    },
]

    
    
    
  const Card = ()=>{
    
    return(
    <div>
        {card.map((el)=>(
         
     <Crdcomp{...el} /> 
 ))}
       
       </div> 

    )
}

export default Card