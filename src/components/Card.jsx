import React from 'react'

export default function Card({img, course, tag, fees}) {
    return (
        <div className="card-container">
            <div>
                <img src={img} alt="IIM" width="200px" height="250px"/>
            </div>
            <div>
                <h1>{course}</h1>
                <p>{tag}</p>
                <h3>Fee: {fees} ₹</h3>
            </div>
        </div>
    )
}