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
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        <Data
        img="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
        range="₹51,999.00 - ₹58,999.00"
        ></Data>
        </Carousel>
        
        </div>

            </>
    );
}
export default Deal;