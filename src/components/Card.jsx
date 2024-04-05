// import React, { useState } from 'react'

export default function Card(props) {
    
    // const text = "1 kg Beetroot|1 1/2 l Milk|400 g Sugar; (400 to 500)|Elaichi powder; (cardomon)|Saffron few flakes|1 tb Ghee";
    // const part = text.split('|');
  return (
    <div className="card-main-body">
        <div className="card-inner-main-body">
            <div className="card-title card-items-common">{props.title}</div>
            <div className="card-ingredients-head card-items-common">Ingredients:</div>
            
            <ul className="card-ingredients card-items-common">
                {   
                    props.ingredients.split('|').map((p,i)=>(
                        <li key={i} >{p}</li>
                    )
                    )
                }
            </ul>
            <div className="card-ingredients-head ">Servings:</div>
            <li className="card-servings card-items-common">{props.servings}</li>
            <div className="card-ingredients-head">Instructions:</div>
            <div className="card-instructions card-items-common">{props.instructions}</div>
        </div>
    </div>
  )
}
