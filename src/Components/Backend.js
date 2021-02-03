import React, { useState } from 'react'
import BackendData from "./BackendData"



function Backend() {

    const [back,SetBack] = useState(BackendData);

    return (
        <div className="container">
        <h1 className="back-head">The Backend</h1>
        {back.map((item)=>{
            return (
                <div className="card">
                    <img src={item.img} alt="img1"></img>
                    <p>{item.branch}</p>
                    <h1>{item.name}</h1>
                </div>
            )
        })}        
        </div>
    );
}

export default Backend;