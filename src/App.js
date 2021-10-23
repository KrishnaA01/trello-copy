import React from 'react'
import {parkingLot} from './DataParkingLot';
import ParkingLot from './ParkingLot';
import { productBacklog } from "./DataProductBack"
import Backlog from './Backlog';
import "./style.css"


 export default function App() {
    return (
        <section>
            <div className="big-card">
                <div className="nav">
                     <h4>Parking Lot</h4>
                 <span className="dots">&#8728;&#8728;&#8728;</span>
                </div>
                    <div className="body">
                        {parkingLot.map(item=>{
                        return (
                        <ParkingLot key={item.id} item = {item} />
                        )
                        })}
                    </div>
               
                <div className="footer">
                     <p> <span className="plus"> &#x2b;</span> Add another card </p>
                </div>
            </div>

            
            <div className="big-card backlog">
                <div className="nav">
                     <h4>Product Backlog</h4>
                         <span className="dots">&#8728;&#8728;&#8728;</span>
                </div>
                <div>
                    {productBacklog.map(item=>{
                    return (
                    <Backlog key={item.id}  item = {item} />
                    )
                    })}
                </div>
             
                 <div className="footer">
                <p><span className="plus">&#x2b; </span> Add another card </p>
                </div>

            </div>
            
        </section>
    )
}
