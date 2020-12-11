import React from 'react';
import ReactDOM from 'react-dom';
import Data from './data';
import Carousel from "react-elastic-carousel";
const breakPoints = [
    { width: 1, itemsToShow: 1 , pagination: false},
    { width: 0, itemsToShow: 2, itemsToScroll: 2 , pagination: false},
    { width: 0, itemsToShow: 3 , pagination: false},
    { width: 0, itemsToShow: 5 , pagination: false}
  ];
function Deal(){
    return(
        <>
        <h2 className="h2_deal">Today's Deal</h2>
        {/* <h2>Today's Deal</h2> */}
        <div className="data_deal">
            {/* <div className="h2_deal_main">
            <h2 className="h2_deal">Today's Deal</h2>
            </div> */}
            {/* <Carousel itemsToShow="6" pagination="false" itemsToScroll="2"> */}
        
            <Carousel breakPoints={breakPoints} pagination="false">
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/51JU8ZlLATL.__AC_SY200_.jpg"
        range="₹159.00 - ₹9,098.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/314tdAuteqL.__AC_SY200_.jpg"
        range="₹199.00 - ₹1,499.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41l9s95Y30L.__AC_SY200_.jpg"
        range="₹569.00 - ₹1,519.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41AlI6D7kPL.__AC_SY200_.jpg"
        range="₹27.00 - ₹1,214.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41RB2DJPY5L.__AC_SY200_.jpg"
        range="₹109.00 - ₹1,869.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41p0PLiCyeL.__AC_SY200_.jpg"
        range="₹12,999.00 - ₹13,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/31pN-Ey7aZL.__AC_SY200_.jpg"
        range="₹7,999.00 - ₹9,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/314UDL26aeL.__AC_SY200_.jpg"
        range="₹288.00 - ₹1,059.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41DH1neHaGL.__AC_SY200_.jpg"
        range="₹729.00 - ₹1,299.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41NZgMzeEkL.__AC_SY200_.jpg"
        range="₹749.00 - ₹1,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41FqUR+eJ6L.__AC_SY200_.jpg"
        range="₹369.00 - ₹1,799.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41GC+DNzM5L.__AC_SY200_.jpg"
        range="₹1,406.00 - ₹9,999.00"
        ></Data>
        </Carousel>
        </div>

            </>
    );
}
export default Deal;