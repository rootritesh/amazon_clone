import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css'

function ThFoot(){
    return(
        <>
        <div className="thfoot_main">
        <span><a className="th_item" href="#" >
        <p>Abebooks</p>    
        <p>Books,art</p>    
        <p>& collection</p>    
        </a></span>

        <span><a className="th_item" href="#" >
        <p>Amazon Web Services</p>    
        <p>Scalable Cloud</p>    
        <p>Computing Services</p>    
        </a></span>

        <span><a className="th_item" href="#" >
        <p>Audible</p>    
        <p>Download</p>    
        <p>Audio Books</p>    
        </a></span>
        <span><a className="th_item" href="#" >
        <p>DPReview</p>
        <p>Digital</p>
        <p>Photography</p>
        </a></span>
        <span><a className="th_item" href="#" >
        <p>IMDb</p>
        <p>Movies, TV</p>
        <p>& Celebrities</p>
        </a></span>
        </div>
        <div className="thfoot_main">
        <span><a className="th_item" href="#" >
        <p>Shopbop</p>    
        <p>Designer</p>    
        <p>Fashion Brands</p>    
        </a></span>

        <span><a className="th_item" href="#" >
        <p>Amazon Business</p>    
        <p>Everything For</p>    
        <p>Business</p>    
        </a></span>

        <span><a className="th_item" href="#" >
        <p>Prime Now</p>    
        <p>2-Hour Delivery</p>    
        <p>On EveryDay items</p>    
        </a></span>
        <span><a className="th_item" href="#" >
        <p>Amazon Prime Music</p>
        <p>60 million songs</p>
        
        </a></span>
        {/* <span><a className="th_item" href="#" >
        <p>IMDb</p>
        <p>Movies, TV</p>
        <p>& Celebrities</p>
        </a></span>
            */}
        </div> 
        </>
        
    );
}
export default ThFoot;