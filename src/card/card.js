import { Card } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import './card.css';

function Card1(props){
    return(
        <div className="main_card1">
            <div className="cc1">
                <h3 className="hh3">{props.heading}</h3>
                <div className="content1">
                <div className="images2">
                
                <div className="image1">    
                <img src={props.img1}></img><p>{props.title1}</p>
                </div>

                <div className="image1">
                <img src={props.img2}></img><p>{props.title2}</p>
                </div>
                </div>

                <div className="images2">
                <div className="image1">

                <img src={props.img3}></img><p>{props.title3}</p>
                </div>

                <div className="image1">
                <img src={props.img4}></img><p>{props.title4}</p>
                </div>
                </div>
                </div>
                <div className="image1 see_more1 ">
                    <a className="see_more1" href={props.link}>See more</a>
                </div>
                
            </div>
        </div>
    );
}
export default Card1;