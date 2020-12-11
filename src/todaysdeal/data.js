import React from 'react';
import ReactDOM from 'react-dom';
import './deal.css'
import Timer from 'react-compound-timer';

function Data(props){
    return(
        <div className="main_deal">
            <div className="main_deal2">
            
                <div className="content_deal">
                <img  className =" image1"src={props.img}></img>
                <p className="range">{props.range}</p>
                <p className="p_timer">Ends in <Timer
                        initialTime={5555000}
                    direction="backward"
                        >
                {() => (
                <React.Fragment>
                    <Timer.Hours />:
                    <Timer.Minutes />:
                    <Timer.Seconds /> 
                </React.Fragment>
                )}
                </Timer></p>
                <div className="add_to_cart_main_btn">

                <button className="add_to_cart_btn">Add to Cart</button>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Data;