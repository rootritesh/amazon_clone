import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './deal.css'
import Timer from 'react-compound-timer';
// import './Header/Header.js';

function Data(props){
    const [count, setCount] = useState(0);
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
            
                <button onClick={() => setCount(count + 1)}className="add_to_cart_btn">Add to Cart</button><p>You clicked {count} times</p>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Data;