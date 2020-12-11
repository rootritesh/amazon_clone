import ReactDOM from 'react-dom';
import './Header.css';
import Drop from './dropdown';
import Search from './search';
import Sbtn from './Searchbtn';
import Si from './Signin';
import RetnrOder from './returnorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useState } from 'react';
function Header(){
    return(
        <>
        <div className="head_main">
            <div className="amazon_logo">
                <img src="./logo.png" height="40px"></img>
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
                <div className="returnorder">
                <RetnrOder></RetnrOder>
                </div>
                <div className="shoping_cart">
                    <ShoppingCartIcon className="shopping_cart_icon" fontSize="large"></ShoppingCartIcon>
                </div>
            </div>
           
            
            
            
        </div>
        </>



    );
}
export default Header;