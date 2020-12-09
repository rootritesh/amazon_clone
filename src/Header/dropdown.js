import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

function Drop(){
    return(
        <div className="main_drop">
        <select className="drop_1" id = "dropdown">
        <option value="ALL">All</option>
        <option value="1">Deals</option>
        <option value="2">Alexa Skills</option>
        <option value="3">Amazon Devices</option>
        <option value="5">Amazon Pantry</option>
        <option value="6">Appliances</option>
        <option value="7">App & Games</option>
        <option value="8">Baby</option>
        <option value="9">Beauty</option>
        <option value="10">Car & Accessories</option>
        <option value="11">Electronics</option>
        <option value="12">Furtniture</option>
        <option value="13">Gift Card</option>
        </select>
        </div>

    );
}
export default Drop;