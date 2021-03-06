import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css'
import Drop_footer from './dropdown';
import Lang from './languages';
import Thfoot from './Third_footer';

function Footer(){
    return(
        <>
        <div className="main_fotter">
            <div className="get_footer">
            <ul  className="fotter_ul">
                <li className="li_heading">Get to Know Us</li>
                <li className="li_footer">About Us</li>
                <li className="li_footer">Careers</li>
                <li className="li_footer">Press Releases</li>
                <li className="li_footer">Amazon Cares</li>
                <li className="li_footer">Gift a Smile</li>
            </ul>
            </div>
            <div className="get_footer">
            <ul className="fotter_ul">
                <li className="li_heading">Connect with Us</li>
                <li className="li_footer">Facebook</li>
                <li className="li_footer">Twitter</li>
                <li className="li_footer">Instagram</li>
            </ul>
            </div>
            <div className="get_footer">
            <ul className="fotter_ul">
                <li className="li_heading">Sell on Amazon</li>
                <li className="li_footer">Sell under Amazon Accelerator</li>
                <li className="li_footer">Become an Affiliate</li>
                <li className="li_footer">Fulfilment by Amazon</li>
                <li className="li_footer">Advertise Your Products</li>
                <li className="li_footer">Amazon Pay on Merchants</li>
            </ul>
            </div>
            <div className="get_footer">
            <ul className="fotter_ul">
                <li className="li_heading">Lets Us Help You</li>
                <li className="li_footer">Your Account</li>
                <li className="li_footer">Returns Centre</li>
                <li className="li_footer">100% Purchase Protection</li>
                <li className="li_footer">Amazon App Download</li>
                <li className="li_footer">Amazon Assistant Download</li>
                <li className="li_footer">Help</li>
            </ul>
            </div>
        </div>
        {/* <hr></hr> */}
        <div className="second_footer">
            <div className="s2_content">
                <img className="amazon_logo_footer" src="https://www.rivadelpo.it/wp-content/uploads/2020/01/amazon.png"></img>
                <Drop_footer></Drop_footer>
            </div>
            <div className="lang_footer">
                <Lang></Lang>
            </div>
        </div>
        <div className="third_footer">
            <Thfoot></Thfoot>
        </div>
        </>
    );
}
export default Footer;