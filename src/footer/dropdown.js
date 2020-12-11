import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css';

function Drop_footer(){
    return(
        <div className="main_drop_footer">
        <select className="fotter_drop_1" id = "dropdown">
        <option className="footer_option" value="ALL">English</option>
        <option className="footer_option" value="1">हिंदी - HI</option>
        <option className="footer_option" value="2">தமிழ் - TA</option>
        <option className="footer_option" value="3">తెలుగు - TE</option>
        <option className="footer_option" value="5">ಕನ್ನಡ - KN</option>
        <option className="footer_option" value="6">മലയാളം - ML</option>
        </select>
        </div>

    );
}
export default Drop_footer;