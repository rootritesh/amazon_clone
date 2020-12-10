import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import Drop from './dropdown';
import Search from './search';
import Sbtn from './Searchbtn';
import Si from './Signin';
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
            <div className="search_main1">
                <Search></Search>
                <Sbtn></Sbtn>
            </div>
            <div className="right_el">
                <div className="signin">
                <Si></Si>
                </div>
            </div>
           
            
            
            
        </div>
        </>



    );
}
export default Header;