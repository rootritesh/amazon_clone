import React from 'react';
import ReactDOM from 'react-dom';
import './deal.css'

function Data(props){
    return(
        <div className="main_deal">
            <h2 className="h2_deal">Today's Deals</h2>
            <div className="content_deal">
                <img  className =" image1"src={props.img}></img>
                <p className="range">₹51,999.00 - ₹58,999.00</p>
            </div>
        </div>
    );
}
export default Data;