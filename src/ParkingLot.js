import React from 'react'
import "./style.css"

 
export default function ParkingLot(props) {
    return (
        <div className="park-container">
                <p> {props.item.text} </p>
        </div>
    )
}