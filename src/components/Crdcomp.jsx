import React from "react"
import style from "./card.module.css"

const  Crdcomp=(props)=>{
    const clr={
        background:props.color
    }
    
   
  
    return(
        <>
    
          <div className={style.box}  style={clr}>
              <div className= {style.box2}>
        <p>{props.date}</p>
        <img className={style.logo}  src={props.logo}/>
        </div>
        <div className={style.box3}>
            <button className={style.btn}>{props.heading}</button>
            <h1>{props.gift}</h1>
            <h1>{props.subheading}</h1>
           
        </div>
        <div className={style.box4}> <h4>{props.devices}</h4>
      <h2><i class="fa-solid fa-arrow-right"></i></h2>
        </div>
        </div>
        </>
    )
}

export default Crdcomp