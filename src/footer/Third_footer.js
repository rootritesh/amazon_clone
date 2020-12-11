import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css'

function ThFoot(){
    return(
        <>
        <div className="thfoot_main">
        <span className="th_span"><a className="th_item" href="#" >
        <p className="p_first">Abebooks</p>    
        <p className="p_item">Books,art</p>    
        <p className="p_item">& collection</p>    
        </a></span>

        <span className="th_span"><a className="th_item" href="#" >
        <p className="p_first">Amazon Web Services</p>    
        <p className="p_item">Scalable Cloud</p>    
        <p className="p_item">Computing Services</p>    
        </a></span>

        <span className="th_span"><a className="th_item" href="#" >
        <p className="p_first">Audible</p>    
        <p className="p_item">Download</p>    
        <p className="p_item">Audio Books</p>    
        </a></span>
        <span className="th_span"><a className="th_item" href="#" >
        <p className="p_first">DPReview</p>
        <p className="p_item">Digital</p>
        <p className="p_item">Photography</p>
        </a></span>
        <span className="th_span"><a className="th_item" href="#" >
        <p className="p_first">IMDb</p>
        <p className="p_item">Movies, TV</p>
        <p className="p_item">& Celebrities</p>
        </a></span>
        </div>
        <div className="thfoot_main">
        <span className="th_span"><a className="th_item" href="#" >
        <p className="p_first">Shopbop</p>    
        <p className="p_item">Designer</p>    
        <p className="p_item">Fashion Brands</p>    
        </a></span>

        <span className="th_span"><a className="th_item" href="#" >
        <p className="p_first">Amazon Business</p>    
        <p className="p_item">Everything For</p>    
        <p className="p_item">Business</p>    
        </a></span>

        <span className="th_span"><a className="th_item" href="#" >
        <p className="p_first">Prime Now</p>    
        <p className="p_item">2-Hour Delivery</p>    
        <p className="p_item">On EveryDay items</p>    
        </a></span>
        <span className="th_span"><a className="th_item" href="#" >
        <p className="p_first">Amazon Prime Music</p>
        <p className="p_item">60 million songs</p>
        
        </a></span>
        
        
           
        </div> 
        <div className="copy_right_main">
            <span class="copy_item"><a className="link_cop"  href="#">Conditions of Use & Sale</a></span>
            <span class="copy_item"><a className="link_cop" href="#">Private Notice</a></span>
            <span class="copy_item"><a className="link_cop" href="#">Interest-Based Ads</a></span>
            <span class="copy_item">© 1996-2020, Amazon.com, Inc. or its affiliates</span>
        </div>
        </>
        
    );
}
export default ThFoot;