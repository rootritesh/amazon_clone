import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import Drop from './dropdown';

function Header(){
    return(
        <>
        <div className="head_main">
            <div className="amazon_logo">
                <img src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png" height="56px"></img>
            </div>
            <div className="search_main">
                <Drop></Drop>
            </div>
        </div>
        </>



    );
}
export default Header;