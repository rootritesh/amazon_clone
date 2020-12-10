import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
// import SearchIcon from '@material-ui/icons/Search';

function Search(){
    return(
        <>
        <div className="search_bar">
            <input  className="bar_search" type="text"></input>
        </div>
       
    </>
    );
}
export default Search;