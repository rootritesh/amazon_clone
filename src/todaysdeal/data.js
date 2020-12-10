import React from 'react';
import ReactDOM from 'react-dom';
import './deal.css'

function Data(props){
    return(
        <div className="main_deal">
            <div className="main_deal2">
            <h2 className="h2_deal">{props.title}</h2>
                <div className="content_deal">
                <img  className =" image1"src={props.img}></img>
                <p className="range">{props.range}</p>
                </div>
            </div>
        </div>
    );
}
export default Data;